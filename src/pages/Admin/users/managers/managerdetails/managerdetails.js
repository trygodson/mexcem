import React, { useRef, useState, useEffect } from 'react';
import PageTitle from '../../../../../shared/components/pagetitle/pagetitle';
import Button from '../../../../../shared/components/button/button';
import { Archive, ArrowRight, Trash, XCircle } from 'react-bootstrap-icons';
import {
  driverSettlementsPayOut,
  driverSettlementsProcessing,
  managerRatings,
} from '../../../../../shared/hooks/api/testService.js';
import RippleTable from '../../../../../shared/components/tables/table/TableCard';
import { colorScheme } from '../../../../../default';
import Card from '../../../../../shared/components/card/card';
import Ratings from '../../../../../shared/components/ratings/ratings';
import CreditCard from '../../../../../shared/components/creditcard/creditcard';
import Height from '../../../../../shared/components/height/height';
import CustomSwitch from '../../../../../shared/components/customswitch/customswitch';
import UserCard from '../../../../../shared/components/smallcards/usercard/usercard';
import TabCard from '../../../../../shared/components/smallcards/usercard/tabcard/tabcard';
import UserDetails from '../../../../../shared/components/userdetails/userdetails';
import './managerdetails.scss';
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

const customDivStyle = {
  padding: '40px 10px 50px 10px',
};

function ManagerDetails() {
  const modalRef = useRef();

  const [table, setTable] = useState('ratings'); // summary // ratings // documents // bank_detail // services // credit_cards
  const [loading, setLoading] = useState(true);
  const [tabledata, setTableData] = useState([]);

  useEffect(async () => {
    const data = await drivers();
    setTableData(data.data);
    setLoading(false);
  }, [tabledata]);

  const [hideSummary, setHideSummary] = useState(false);
  const [hideRatingsTable, setHideRatingsTable] = useState(true);
  const [hideDocuments, setHideDocuments] = useState(true);
  const [hideBankDetail, setHideBankDetail] = useState(true);
  const [hideServices, setHideServices] = useState(true);
  const [hideCreditCards, setHideCreditCards] = useState(true);

  const defaultHrMarginLeft = 8;
  const [hrMarginLeft, setHrMarginLeft] = useState(defaultHrMarginLeft);
  const defaultHrWidth = 117;
  const [hrWidth, setHrWidth] = useState(defaultHrWidth);

  useEffect(() => {
    if (table === 'summary') {
      //   setHidePayOutTable(false);
      setHideSummary(false);
      setHideRatingsTable(true);
      setHideDocuments(true);
      setHideBankDetail(true);
      setHideServices(true);
      setHideCreditCards(true);
      setHrMarginLeft(defaultHrMarginLeft);
    } else if (table === 'ratings') {
      setHideSummary(true);
      setHideRatingsTable(false);
      setHideDocuments(true);
      setHideBankDetail(true);
      setHideServices(true);
      setHideCreditCards(true);
      setHrMarginLeft(150);
    } else if (table === 'documents') {
      setHideSummary(true);
      setHideRatingsTable(true);
      setHideDocuments(false);
      setHideBankDetail(true);
      setHideServices(true);
      setHideCreditCards(true);
      setHrMarginLeft(298);
    } else if (table === 'bank_detail') {
      setHideSummary(true);
      setHideDocuments(true);
      setHideBankDetail(false);
      setHideServices(true);
      setHideCreditCards(true);
      setHrMarginLeft(460);
    } else if (table === 'services') {
      setHideSummary(true);
      setHideRatingsTable(true);
      setHideDocuments(true);
      setHideBankDetail(true);
      setHideServices(false);
      setHideCreditCards(true);
      setHrMarginLeft(615);
    } else {
      // credit_cards
      setHideSummary(true);
      setHideRatingsTable(true);
      setHideDocuments(true);
      setHideBankDetail(true);
      setHideServices(true);
      setHideCreditCards(false);
      setHrMarginLeft(765);
    }
  }, [table]);

  // summary
  const summary = (
    <div className={hideSummary && 'hide'}>
      <Card className="paddingNone">
        <div className="row">
          <div className="col-7">
            <div style={customDivStyle}>
              <h3 style={{ marginLeft: '13px', marginBottom: '12px' }}>
                Manager Details
              </h3>
              <UserDetails />
            </div>
          </div>
          <div
            className="col-5"
            style={{ borderLeft: `1px solid ${colorScheme.darkGray2}` }}
          >
            <div style={customDivStyle}>
              <h3>Wallet details</h3>
              <Height val={8} />
              <div className="row">
                <div className="col-6 paddingNone">
                  <b>$100.0</b>
                  <p>Cash balance</p>
                </div>
                <div className="col-6 paddingNone">
                  <b>$0</b>
                  <p>Credit balance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ background: colorScheme.darkGray2 }} />
        <Height val={20} />
        <div style={customDivStyle}>
          <div className="row">
            <div className="col-12">
              <h3 style={{ marginLeft: '13px', marginBottom: '5px' }}>
                Members
              </h3>
              <div className="row members-row">
                <div className="col-xl-4 col-lg-6">
                  <UserCard
                    title="Fix spare tire"
                    status="Active"
                    membersNum={1}
                  />
                </div>
                <div className="col-xl-4 col-lg-6">
                  <UserCard
                    title="Fix spare tire"
                    status="Active"
                    membersNum={1}
                  />
                </div>
                <div className="col-xl-4 col-lg-6">
                  <UserCard
                    title="Fix spare tire"
                    status="Active"
                    membersNum={1}
                  />
                </div>
                <div className="col-xl-4 col-lg-6">
                  <UserCard
                    title="Fix spare tire"
                    status="Active"
                    membersNum={1}
                  />
                </div>
                <div className="col-xl-4 col-lg-6">
                  <UserCard
                    title="Fix spare tire"
                    status="Active"
                    membersNum={1}
                  />
                </div>
                <div className="col-xl-4 col-lg-6">
                  <UserCard
                    title="Fix spare tire"
                    status="Active"
                    membersNum={1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  // ratings
  const ratingsDecorator = [
    {
      label: 'Date',
      accessor: 'date',
      Cell: props => <div style={{ paddingLeft: '10px' }}>{props}</div>,
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
        tableData={tabledata}
        isloading={loading}
        addcheckbox={true}
      />
    </div>
  );

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
            <Height val={150} />
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

  // bank_detail
  const bankDetail = (
    <div className={hideBankDetail && 'hide'}>
      <Card>
        <h3 style={{ fontWeight: 'normal' }}>All assists</h3>
        <Height val={15} />
        <div className="row">
          <div className="col-sm-12 col-lg-4">
            <Card className="grayBg hash-card" style={{ padding: '15px' }}>
              <h3>Wells Fargo</h3>
              <Height val={10} />
              <hr className="thick-title-underline" />
              <Height val={15} />
              <p>Account name: Stephen Jackson</p>
              <p>Bank BIC/SWIFT code: 01214457</p>
              <p>Account number: 01234567289</p>
              <p>Account type: Savings</p>
            </Card>
          </div>
          <div className="col-sm-12 col-lg-4">
            {' '}
            <Card className="grayBg hash-card" style={{ padding: '15px' }}>
              <h3>Wells Fargo</h3>
              <Height val={10} />
              <hr className="thick-title-underline" />
              <Height val={15} />
              <p>Account name: Stephen Jackson</p>
              <p>Bank BIC/SWIFT code: 01214457</p>
              <p>Account number: 01234567289</p>
              <p>Account type: Savings</p>
            </Card>
          </div>
        </div>

        <Height val={330} />
      </Card>
    </div>
  );

  // services
  const services = (
    <div className={hideServices && 'hide'}>
      <Card>
        <h3>All assists</h3>
        <Height val={15} />
        <UserCard title="Fix spare tire" status="Active" membersNum={1} />
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
            <div className="col-sm-12 col-xl-4 col-lg-6 col-md-6 mx-auto">
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
            <div className="col-sm-12 col-xl-4 col-lg-6  col-md-6">
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
            <div className="col-sm-12 col-xl-4 col-lg-6 col-md-6 mx-auto">
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
        {summary}
        {ratingsTable}
        {documents}
        {bankDetail}
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
            User / Manager <b>/ Stephen Jackson</b>
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

export default ManagerDetails;
