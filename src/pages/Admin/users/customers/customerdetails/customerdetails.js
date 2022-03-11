import React, { useRef, useState, useEffect } from 'react';

import Card from '../../../../../shared/components/card/card';
import PageTitle from '../../../../../shared/components/pagetitle/pagetitle';
import { colorScheme } from '../../../../../default';
import './customerdetails.scss';
import ProfileImage from '../../../../../shared/components/profileimage/profileimage';
import Height from '../../../../../shared/components/height/height';
import CustomText from '../../../../../shared/components/customtext/customtext';
import { Star, StarFill, ChatTextFill, Eye } from 'react-bootstrap-icons';
import UserCard from '../../../../../shared/components/smallcards/usercard/usercard';
import UserDetails from '../../../../../shared/components/userdetails/userdetails';
import Ratings from '../../../../../shared/components/ratings/ratings';
import {
  Archive,
  Trash,
  Search,
  Pencil,
  XCircle,
  PersonPlus,
  Plus,
} from 'react-bootstrap-icons';
import RippleTable from '../../../../../shared/components/tables/table/TableCard';
import {
  customerFamilyPlan,
  customerRatings,
  customerVehicles,
} from '../../../../../shared/hooks/api/testService';
import CreditCard from '../../../../../shared/components/creditcard/creditcard';
import CustomSwitch from '../../../../../shared/components/customswitch/customswitch';
import NewTable from '../../../../../shared/components/newTable/newtable';

const customHrStyle = {
  background: colorScheme.border2,
};

const customColStyle = {
  borderLeft: `1px solid ${colorScheme.darkGray2}`,
  padding: '25px',
};

const customCol2Style = {
  paddingLeft: '17px',
  paddingTop: '35px',
  paddingRight: '17px',
  paddingBottom: '10px',
};

const customCardStyle = {
  marginBottom: '0px',
};

const imgStyle = {
  width: '45px',
  borderRadius: '50%',
};

const VehicleDetails = () => {
  return (
    <div className="row">
      <div className="col-sm-12 col-lg-4">
        <ProfileImage width="168px" />
      </div>
      <div className="col-sm-12 col-lg-4">
        <h3 style={{ fontWeight: '500' }}>TC20168</h3>
        <Height val={5} />
        <CustomText type="p" size={17}>
          Number plate
        </CustomText>
        <Height val={15} />
        <h3 style={{ fontWeight: '500' }}>Audi</h3>
        <Height val={5} />
        <CustomText type="p" size={17}>
          Brand
        </CustomText>
        <Height val={15} />
        <h3 style={{ fontWeight: '500' }}>2010</h3>
        <Height val={5} />
        <CustomText type="p" size={17}>
          Year
        </CustomText>
        <Height val={33.6} />
      </div>
      <div className="col-sm-12 col-lg-4">
        <CustomText type="b" size={17}>
          Black
        </CustomText>
        <CustomText type="p" size={17}>
          Color
        </CustomText>
        <Height val={15} />
        <CustomText type="b" size={17}>
          R8
        </CustomText>
        <CustomText type="p" size={17}>
          Model
        </CustomText>
      </div>
    </div>
  );
};

function CustomerDetails() {
  const modalRef = useRef();

  const [table, setTable] = useState('summary'); // ratings // vehicles // family_plan // credit_cards
  const [loading, setLoading] = useState(true);
  const [summarytabledata, setSummaryTableData] = useState([]);
  const [ratingstabledata, setRatingsTableData] = useState([]);
  const [vehiclestabledata, setVehiclesTableData] = useState([]);
  const [familyplantabledata, setFamilyPlanTableData] = useState([]);

  const [hideSummary, setHideSummary] = useState(false);
  const [hideRatingsTable, setHideRatingsTable] = useState(true);
  const [hideVehiclesTable, setHideVehiclesTable] = useState(true);
  const [hideFamilyPlanTable, setHideFamilyPlanTable] = useState(true);
  const [hideCreditCards, setHideCreditCards] = useState(true);

  const defaultHrMarginLeft = 11;
  const [hrMarginLeft, setHrMarginLeft] = useState(defaultHrMarginLeft);

  const defaultHrWidth = 120;
  const [hrWidth, setHrWidth] = useState(defaultHrWidth);

  useEffect(() => {
    if (table === 'summary') {
      setHideSummary(false);
      setHideRatingsTable(true);
      setHideVehiclesTable(true);
      setHideFamilyPlanTable(true);
      setHideCreditCards(true);
      setHrMarginLeft(defaultHrMarginLeft);
    } else if (table === 'ratings') {
      setHideSummary(true);
      setHideRatingsTable(false);
      setHideVehiclesTable(true);
      setHideFamilyPlanTable(true);
      setHideCreditCards(true);
      setHrMarginLeft(152);
    } else if (table === 'vehicles') {
      setHideSummary(true);
      setHideRatingsTable(true);
      setHideVehiclesTable(false);
      setHideFamilyPlanTable(true);
      setHideCreditCards(true);
      setHrMarginLeft(275);
    } else if (table === 'family_plan') {
      setHideSummary(true);
      setHideRatingsTable(true);
      setHideVehiclesTable(true);
      setHideFamilyPlanTable(false);
      setHideCreditCards(true);
      setHrMarginLeft(429);
    } else {
      // credit_cards
      setHideSummary(true);
      setHideRatingsTable(true);
      setHideVehiclesTable(true);
      setHideFamilyPlanTable(true);
      setHideCreditCards(false);
      setHrMarginLeft(600);
      // https://madewithreactjs.com/react-credit-cards
      // https://codesandbox.io/s/ovvwzkzry9?file=/styles.css
    }
  }, [table]);

  useEffect(async () => {
    const rating = await customerRatings();
    const vehicle = await customerVehicles();
    const familyplan = await customerFamilyPlan();
    setRatingsTableData(rating.data);
    setVehiclesTableData(vehicle.data);
    setFamilyPlanTableData(familyplan.data);
    setLoading(false);
  }, [ratingstabledata, familyplantabledata]);

  const summary = () => (
    <Card
      className={`paddingNone ${hideSummary && 'hide'}`}
      style={customCardStyle}
    >
      <div style={{}}>
        <div className="row">
          <div className="col-sm-12 col-lg-7" style={customCol2Style}>
            <h3 style={{ marginLeft: '13.6px' }}>Customer details</h3>
            <Height val={11} />
            {/* pass props to below */}
            <UserDetails />
            <Height val={80} />
            <hr style={{ background: colorScheme.darkGray2 }} />
            <Height val={80} />
            <h3 style={{ marginLeft: '13.6px' }}>Primary vehicle</h3>
            <Height val={11} />
            <VehicleDetails />
          </div>
          <div className="col-sm-12 col-lg-5" style={customColStyle}>
            <h3>Wallet details</h3>
            <Height val={8} />
            <div className="row">
              <div className="col-12 paddingNone">
                <p>
                  <span className="left boldText">$100.0</span>{' '}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 paddingNone">
                <p>
                  <span className="left">
                    <small>Cash balance</small>
                  </span>{' '}
                </p>
              </div>
              <Height val={246} />
              <hr style={{ background: colorScheme.darkGray2 }} />
              <Height val={13} />

              <div className="bootstrap-wrapper">
                <div className="row">
                  <h3>Membership</h3>
                </div>
                <Height val={10} />
                <div className="row">
                  {/* pass props */}
                  <UserCard
                    title="Member of Jackson's family"
                    status="Active"
                    membersNum={10}
                  />
                </div>
                <Height val={10} />
                <div className="row">
                  <h3>Referred by</h3>
                </div>
                <Height val={10} />
                <div className="row">
                  {/* pass props */}
                  <UserCard title="Jackson Malwi" status="Active" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Height val={70} />
    </Card>
  );

  // ratings
  const ratingsDecorator = [
    {
      label: 'Summary',
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
      Cell: props => <span className="primary">{props}</span>,
    },
    {
      label: 'Cost',
      accessor: 'cost',
      Cell: props => <>{`${props}`}</>,
    },
  ];

  const ratingsTable = (
    <NewTable
      decorator={ratingsDecorator}
      tableData={ratingstabledata}
      isloading={loading}
      hide={hideRatingsTable}
    />
  );

  // vehicles
  const vehiclesDecorator = [
    {
      label: 'Brand',
      accessor: 'brand',
      Cell: props => <>{props}</>,
    },

    {
      label: 'Year',
      accessor: 'year',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Role',
      accessor: 'role',
      Cell: props => <span className="status primary_span_text">{props}</span>,
    },

    {
      label: 'Status',
      accessor: 'status',
      Cell: props => <span className="status success_span_text">{props}</span>,
    },

    {
      label: 'Actions',
      accessor: '_id',
      Cell: props => (
        <span className="actions">
          <span className="table-icon-wrapper  before success_span_text">
            <Eye size={15.4} />
          </span>
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

  const vehiclesTable = (
    <NewTable
      decorator={vehiclesDecorator}
      tableData={vehiclestabledata}
      isloading={loading}
      hide={hideVehiclesTable}
    />
  );

  // family_plan
  const familyPlanDecorator = [
    {
      label: 'Name',
      accessor: 'image',
      Cell: props => <img src={props} style={imgStyle} />,
    },
    {
      label: '',
      accessor: 'user_data',
      Cell: props => (
        <span>
          <span>{props.name}</span>
          <br />
          <span>{props.telephone}</span>
        </span>
      ),
    },
    {
      label: 'Email',
      accessor: 'email',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Role',
      accessor: 'role',
      Cell: props => <span className="status primary_span_text">{props}</span>,
    },
    {
      label: 'Status',
      accessor: 'status',
      Cell: props => <span className="status success_span_text">{props}</span>,
    },

    {
      label: 'Actions',
      accessor: '_id',
      Cell: props => (
        <span className="actions">
          <span className="table-icon-wrapper  before success_span_text">
            <Eye size={15.4} />
          </span>

          <span className="table-icon-wrapper  danger_span_text">
            <XCircle size={15.4} />
          </span>
        </span>
      ),
    },
  ];

  const familyPlanTable = (
    <NewTable
      decorator={familyPlanDecorator}
      tableData={familyplantabledata}
      isloading={loading}
      hide={hideFamilyPlanTable}
    />
  );

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
        {summary()}
        {ratingsTable}
        {vehiclesTable}
        {familyPlanTable}
        {creditCards}
      </>
    );
  };

  return (
    <main>
      <PageTitle
        title={
          <span>
            Order <b>/ #4010 - Stephen Jackson</b>
          </span>
        }
      ></PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3 className="hoverPointer" onClick={() => setTable('summary')}>
              Summary
            </h3>
            <h3 className="hoverPointer" onClick={() => setTable('ratings')}>
              Ratings
            </h3>
            <h3 className="hoverPointer" onClick={() => setTable('vehicles')}>
              Vehicles
            </h3>
            <h3
              className="hoverPointer"
              onClick={() => setTable('family_plan')}
            >
              Family plan
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
            }}
          />
          <hr style={customHrStyle} />
        </Card>
        {renderTable()}
      </section>
    </main>
  );
}

export default CustomerDetails;
