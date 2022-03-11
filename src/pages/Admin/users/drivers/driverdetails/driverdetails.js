import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../../../../shared/components/pagetitle/pagetitle';
import Button from '../../../../../shared/components/button/button';
import {
  Archive,
  Trash,
  Search,
  Pencil,
  XCircle,
  PersonPlus,
} from 'react-bootstrap-icons';
import {
  driverSettlementsPayOut,
  driverSettlementsPayIn,
  driverSettlementsProcessing,
  managerRatings,
  driverRatings,
} from '../../../../../shared/hooks/api/testService.js';
import RippleTable from '../../../../../shared/components/tables/table/TableCard';
import CustomText from '../../../../../shared/components/customtext/customtext';
import { rootApp } from '../../../../../routes';
import { colorScheme } from '../../../../../default';
import Card from '../../../../../shared/components/card/card';
import Ratings from '../../../../../shared/components/ratings/ratings';
import CustomSwitch from '../../../../../shared/components/customswitch/customswitch';
import Height from '../../../../../shared/components/height/height';
import CreditCard from '../../../../../shared/components/creditcard/creditcard';
import UserCard from '../../../../../shared/components/smallcards/usercard/usercard';
import TabCard from '../../../../../shared/components/smallcards/usercard/tabcard/tabcard';
import NewTable from '../../../../../shared/components/newTable/newtable';

const customHrStyle = {
  background: colorScheme.border2,
};

const customCardStyle = {
  marginBottom: '0px',
};

const iconStyle = {
  marginRight: '9px',
  marginBottom: '-2px',
};

const checkboxStyle = {
  marginLeft: '15px',
};

const imgStyle = {
  width: '45px',
  borderRadius: '50%',
};

function DriverDetails() {
  const modalRef = useRef();

  const [table, setTable] = useState('ratings'); // summary // ratings // documents // bank_detail // services // credit_cards
  const [loading, setLoading] = useState(true);
  const [payouttabledata, setPayoutTableData] = useState([]);
  const [processingtabledata, setProcessingTableData] = useState([]);
  const [ratingstabledata, setRatingsTableData] = useState([]);

  const [hidePayOutTable, setHidePayOutTable] = useState(false);
  const [hideRatingsTable, setHideRatingsTable] = useState(false);
  const [hidePayInTable, setHidePayInTable] = useState(true);
  const [hideProcessingTable, setHideProcessingTable] = useState(true);
  const [hideDocuments, setHideDocuments] = useState(true);
  const [hideServices, setHideServices] = useState(true);
  const [hideCreditCards, setHideCreditCards] = useState(true);

  const defaultHrMarginLeft = 8;
  const [hrMarginLeft, setHrMarginLeft] = useState(defaultHrMarginLeft);
  const defaultHrWidth = 117;
  const [hrWidth, setHrWidth] = useState(defaultHrWidth);

  useEffect(() => {
    if (table === 'summary') {
      //   setHidePayOutTable(false);
      setHideRatingsTable(true);
      setHideProcessingTable(true);
      setHideDocuments(true);
      setHideServices(true);
      setHideCreditCards(true);
      setHrMarginLeft(defaultHrMarginLeft);
    } else if (table === 'ratings') {
      setHidePayOutTable(true);
      setHideRatingsTable(false);
      setHideProcessingTable(true);
      setHideDocuments(true);
      setHideServices(true);
      setHideCreditCards(true);
      setHrMarginLeft(150);
    } else if (table === 'documents') {
      setHidePayOutTable(true);
      setHideRatingsTable(true);
      setHideDocuments(false);
      setHideProcessingTable(true);
      setHideServices(true);
      setHideCreditCards(true);
      setHrMarginLeft(298);
    } else if (table === 'bank_detail') {
      setHidePayOutTable(true);
      setHidePayInTable(false);
      setHideDocuments(true);
      setHideProcessingTable(true);
      setHideCreditCards(true);
      setHrMarginLeft(460);
    } else if (table === 'services') {
      setHidePayOutTable(true);
      setHideRatingsTable(true);
      setHideProcessingTable(true);
      setHideDocuments(true);
      setHideServices(false);
      setHideCreditCards(true);
      setHrMarginLeft(615);
    } else {
      // credit_cards
      setHidePayOutTable(true);
      setHidePayInTable(true);
      setHideRatingsTable(true);
      setHideDocuments(true);
      setHideProcessingTable(true);
      setHideServices(true);
      setHideCreditCards(false);
      setHrMarginLeft(765);
    }
  }, [table]);

  useEffect(async () => {
    const rating = await driverRatings();
    const payout = await driverSettlementsPayOut();
    const processing = await driverSettlementsProcessing();
    setRatingsTableData(rating.data);
    setPayoutTableData(payout.data);
    setProcessingTableData(processing.data);
    setLoading(false);
  }, [ratingstabledata, processingtabledata]);

  // pay out
  const payOutDecorator = [
    {
      label: 'Driver',
      accessor: 'image',
      Cell: props => <img src={props} style={imgStyle} />,
    },
    {
      label: '',
      accessor: 'user_data',
      Cell: props => (
        <>
          <span>{props.name}</span>
          <br />
          <span>{props.telephone}</span>
        </>
      ),
    },
    {
      label: 'Vehicle no',
      accessor: 'vehicle_no',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Withdrawable',
      accessor: 'withdrawable',
      Cell: props => <span className="success">{`${props}`}</span>,
    },
    {
      label: 'Cash balance',
      accessor: 'cash_balance',
      Cell: props => <span className="status ">{`${props}`}</span>,
    },
    {
      label: 'Actions',
      accessor: '_id',
      Cell: props => (
        <span className="actions">
          <span className="table-icon-wrapper  before primary_span_text">
            <Archive size={15.4} />
          </span>

          <span className="table-icon-wrapper  danger_span_text">
            <XCircle size={15.4} />
          </span>
        </span>
      ),
    },
  ];

  const payOutTable = (
    <NewTable
      decorator={payOutDecorator}
      tableData={payouttabledata}
      isloading={loading}
      hide={hidePayOutTable}
    />
  );

  // ratings
  const ratingsDecorator = [
    {
      label: 'Date',
      accessor: 'date',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Assist',
      accessor: 'assist',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Rating',
      accessor: 'rating',
      Cell: props => <Ratings val={props} size={14} />,
    },
    {
      label: 'Payment',
      accessor: 'payment',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Transaction',
      accessor: 'transaction',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Cost',
      accessor: 'cost',
      Cell: props => <>{`${props}`}</>,
    },
  ];

  const ratingsTable = (
    <div className={hideRatingsTable && 'hide'}>
      <Card className="paddingNone" style={customCardStyle}>
        <div className="card-padded-title multiple">
          <h3 className="hoverPointer">Recent ratings</h3>
        </div>

        <hr style={customHrStyle} />
      </Card>
      <NewTable
        decorator={ratingsDecorator}
        tableData={ratingstabledata}
        isloading={loading}
        hide={hideRatingsTable}
      />
    </div>
  );

  // documents
  const documents = (
    <div className={hideDocuments && 'hide'}>
      <Card>
        <div className="row">
          <div className="col-4">
            <h3 style={{ fontWeight: 'normal' }}>Personal documents</h3>

            <Height val={20} />
            <div className="row">
              <TabCard title="Driver photo" />
            </div>

            <Height val={15} />

            <div className="row">
              <TabCard title="Driver's license" />
            </div>

            <Height val={15} />

            <div className="row">
              <TabCard title="Social Security Number" />
            </div>
            <Height val={25} />

            <h3 style={{ fontWeight: 'normal' }}>Vehicle documents</h3>

            <Height val={20} />
            <div className="row">
              <TabCard title="Driver photo" />
            </div>

            <Height val={15} />

            <div className="row">
              <TabCard title="Driver's license" />
            </div>

            <Height val={15} />

            <div className="row">
              <TabCard title="Social Security Number" />
            </div>
          </div>

          <div className="col-8">
            <h3 style={{ fontWeight: 'normal' }}>Driver's Photo</h3>
            <Height val={20} />

            <div
              style={{
                border: `1px solid ${colorScheme.darkGray2}`,
                height: '300px',
                borderRadius: '5px',
                padding: '20px',
              }}
            >
              <div className="row">
                <div className="col-6">
                  {/* <div className="media" style={{ border: '1px solid', height: '100%' }}></div> */}
                </div>
                <div className="col-6">
                  <div
                    className="media"
                    // style={{ position: 'relative', border: '1px solid', height: '250px' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  // processing
  const processingDecorator = [
    {
      label: <input type="checkbox" style={checkboxStyle} />,
      accessor: 'id',
      Cell: props => <input type="checkbox" style={checkboxStyle} />,
    },

    {
      label: 'Driver',
      accessor: 'image',
      Cell: props => <img src={props} style={imgStyle} />,
    },
    {
      label: '',
      accessor: 'user_data',
      Cell: props => (
        <>
          <span>{props.name}</span>
          <br />
          <span>{props.telephone}</span>
        </>
      ),
    },
    {
      label: 'Vehicle no',
      accessor: 'vehicle_no',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Processing balance',
      accessor: 'processing_balance',
      Cell: props => <span className="success">{`${props}`}</span>,
    },
  ];

  const processingTable = (
    <NewTable
      decorator={processingDecorator}
      tableData={processingtabledata}
      isloading={loading}
      hide={hideProcessingTable}
      bulkAction={true}
    />
  );

  // services
  const services = (
    <div className={hideServices && 'hide'}>
      <Card>
        <h3>All assists</h3>
        <Height val={15} />
        <div className="row">
          <div className="col-4">
            <UserCard title="Fix spare tire" status="Active" membersNum={1} />
          </div>
          <div className="col-4">
            <UserCard title="Fix spare tire" status="Active" membersNum={1} />
          </div>
          <div className="col-4">
            <UserCard title="Fix spare tire" status="Active" membersNum={1} />
          </div>
        </div>
        <Height val={330} />
      </Card>
    </div>
  );

  // credit_cards
  const creditCards = (
    <div className={hideCreditCards && 'hide'}>
      <Card>
        <h3>Default</h3>
        <Height val={16} />
        <div className="bootstrap-wrapper">
          <div className="row">
            <div className="col-sm-12 col-lg-4">
              <div className="credit-card-wrapper">
                <CreditCard
                  name="John Smith"
                  number="**** **** **** 1111"
                  expiry="10/20"
                  cvc="737"
                />
              </div>
              <div className="textCenter">
                <CustomSwitch defaultChecked={false} />
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="credit-card-wrapper">
                <CreditCard
                  name="John Smith"
                  number="**** **** **** 1111"
                  expiry="10/20"
                  cvc="737"
                />
              </div>
              <div className="textCenter">
                <CustomSwitch defaultChecked={false} />
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="credit-card-wrapper">
                <CreditCard
                  name="John Smith"
                  number="**** **** **** 1111"
                  expiry="10/20"
                  cvc="737"
                />
              </div>
              <div className="textCenter">
                <CustomSwitch defaultChecked={false} />
              </div>
            </div>
          </div>
        </div>
        <Height val={200} />
      </Card>
    </div>
  );

  const renderTable = () => {
    return (
      <>
        {payOutTable}
        {ratingsTable}
        {processingTable}
        {documents}
        {services}
        {creditCards}
      </>
    );
  };

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span>
            User / Driver <b>/ Stephen Jackson</b>
          </span>
        }
      >
        <>
          <Button
            className="dashboard-title-btn success_span_text rightSpace"
            onClick={() => {}}
            style={{ marginRight: '-1px' }}
          >
            Activate now
          </Button>

          <Button
            className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
            onClick={() => {}}
          >
            <Archive size={12.8} style={iconStyle} />
            Archive
          </Button>
          <Button
            className="dashboard-title-btn danger-dashboard-title-btn"
            onClick={() => {}}
          >
            <Trash size={14} style={iconStyle} />
            Delete
          </Button>
        </>
      </PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3 className="hoverPointer" onClick={() => setTable('summary')}>
              Summary
            </h3>
            <h3 className="hoverPointer" onClick={() => setTable('ratings')}>
              Ratings
            </h3>
            <h3 className="hoverPointer" onClick={() => setTable('documents')}>
              Documents
            </h3>

            <h3
              className="hoverPointer"
              onClick={() => setTable('bank_detail')}
            >
              Bank detail
            </h3>
            <h3 className="hoverPointer" onClick={() => setTable('services')}>
              Services
            </h3>
            <h3
              className="hoverPointer"
              onClick={() => setTable('credit_cards')}
            >
              Credit Cards
            </h3>
          </div>
          <hr
            style={{
              background: colorScheme.gray,
              width: `${hrWidth}px`,
              marginLeft: `${hrMarginLeft}px`,
              height: '2.2px',
            }}
          />
          <hr style={customHrStyle} />
        </Card>

        {renderTable()}
      </section>
    </main>
  );
}

export default DriverDetails;
