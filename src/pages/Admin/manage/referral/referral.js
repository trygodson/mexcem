// not finished yet~
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../../../shared/components/pagetitle/pagetitle';
import Button from '../../../../shared/components/button/button';
import {
  Archive,
  Trash,
  Search,
  Pencil,
  XCircle,
  PersonPlus,
  Plus,
} from 'react-bootstrap-icons';
import {
  driverSettlementsPayOut,
  driverSettlementsPayIn,
  driverSettlementsProcessing,
  referralReferralProgram,
  referralLeaderboard,
} from '../../../../shared/hooks/api/testService.js';
import RippleTable from '../../../../shared/components/tables/table/TableCard';
import CustomText from '../../../../shared/components/customtext/customtext';
import { rootApp } from '../../../../routes';
import { colorScheme } from '../../../../default';
import Card from '../../../../shared/components/card/card';
import CustomSwitch from '../../../../shared/components/customswitch/customswitch';
import NewTable from '../../../../shared/components/newTable/newtable';

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

const customButtonWidth = {
  width: '100px',
};

function Referral() {
  const modalRef = useRef();

  const [table, setTable] = useState('statistics'); // referral_program // leaderboard
  const [loading, setLoading] = useState(true);
  const [statisticstabledata, setStatisticsTableData] = useState([]);
  const [referralprogramtabledata, setReferralProgramTableData] = useState([]);
  const [leaderboardtabledata, setLeaderBoardTableData] = useState([]);

  const [hideStatistics, setHideStatistics] = useState(false);
  const [hideReferralProgramTable, setHideReferralProgramTable] =
    useState(true);
  const [hideLeaderboardTable, setHideLeaderboardTable] = useState(true);

  const defaultHrMarginLeft = 8;
  const [hrMarginLeft, setHrMarginLeft] = useState(defaultHrMarginLeft);
  const defaultWidth = 117;
  const [hrWidth, setHrWidth] = useState(defaultWidth);

  useEffect(() => {
    if (table === 'statistics') {
      setHideStatistics(false);
      setHideReferralProgramTable(true);
      setHideLeaderboardTable(true);
      setHrWidth(defaultWidth);
      setHrMarginLeft(defaultHrMarginLeft);
    } else if (table === 'referral_program') {
      setHideStatistics(true);
      setHideReferralProgramTable(false);
      setHideLeaderboardTable(true);
      setHrWidth(158);
      setHrMarginLeft(160);
    } else {
      // leaderboard
      setHideStatistics(true);
      setHideReferralProgramTable(true);
      setHideLeaderboardTable(false);
      setHrWidth(140);
      setHrMarginLeft(372.5);
    }
  }, [table]);

  useEffect(async () => {
    const referral = await referralReferralProgram();
    const leader = await referralLeaderboard();
    setReferralProgramTableData(referral.data);
    setLeaderBoardTableData(leader.data);
    setLoading(false);
  }, [referralprogramtabledata, leaderboardtabledata]);

  // statistics
  const statisticsData = [];

  const statisticsTable = <div className={hideStatistics && 'hide'}></div>;

  // referral_program
  const referralProgramDecorator = [
    {
      label: 'Title',
      accessor: 'title',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Type',
      accessor: 'type',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Max ref',
      accessor: 'max_ref',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Users',
      accessor: 'users',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Status',
      accessor: 'status',
      Cell: props => <CustomSwitch defaultChecked={props} />,
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

  const referralProgramTable = (
    <NewTable
      decorator={referralProgramDecorator}
      tableData={referralprogramtabledata}
      isloading={loading}
      hide={hideReferralProgramTable}
    />
  );

  // leaderboard
  const leaderboardDecorator = [
    {
      label: 'Name',
      accessor: 'user_data',
      Cell: props => (
        <span>
          {props.name}
          <br />
          {props.telephone}
        </span>
      ),
    },
    {
      label: 'Email',
      accessor: 'email',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Refs',
      accessor: 'refs',
      Cell: props => <>{props}</>,
    },
    {
      label: 'For',
      accessor: 'for',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Cash',
      accessor: 'cash',
      Cell: props => <span className="success">{props}</span>,
    },
    {
      label: 'Status',
      accessor: 'status',
      Cell: props => <span className="status orange_span_text">{props}</span>,
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

  const leaderboardTable = (
    <NewTable
      decorator={leaderboardDecorator}
      tableData={leaderboardtabledata}
      isloading={loading}
      hide={hideLeaderboardTable}
    />
  );

  const renderTable = () => {
    return (
      <>
        {statisticsTable}
        {referralProgramTable}
        {leaderboardTable}
      </>
    );
  };

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span>
            Wallet / Settlments <b>/ Driver</b>
          </span>
        }
      >
        <>
          {table == 'referral_program' && (
            <>
              <select
                className="select-first"
                style={{ width: '220px', marginRight: '10px' }}
              >
                <option value="active">-Status: Active-</option>
                <option value="processing">-Status: Active-</option>
                <option value="disabled">-Status: Disabled-</option>
              </select>

              <input
                placeholder="Search"
                className="search"
                style={{ width: '180px' }}
              />
              <Button className="search-btn" onClick={() => {}}>
                <Search size={15} style={iconStyle} />
              </Button>
            </>
          )}

          {table == 'leaderboard' && (
            // customer, driver, tow company, all
            <>
              <Button
                className="dashboard-title-btn white_span_text rightSpace"
                onClick={() => {}}
                style={customButtonWidth}
              >
                <i className="fi-rr-circle-small"></i>
                Customer
              </Button>
              <Button
                className="dashboard-title-btn white_span_text rightSpace"
                onClick={() => {}}
                style={customButtonWidth}
              >
                <i className="fi-rr-circle-small"></i>
                Driver
              </Button>
              <Button
                className="dashboard-title-btn white_span_text rightSpace"
                onClick={() => {}}
                style={customButtonWidth}
              >
                <i className="fi-rr-circle-small"></i>
                Company
              </Button>
              <Button
                className="dashboard-title-btn white_span_text rightSpace"
                onClick={() => {}}
                style={customButtonWidth}
              >
                <i className="fi-rr-circle-small"></i>
                All
              </Button>
              <select className="select-first" style={{ width: '180px' }}>
                <option value="active">Select referral program</option>
              </select>
            </>
          )}

          {/* <select className="select-first" style={{ width: '220px' }}>
            <option value="active">Filter by driver</option>
          </select> */}

          <Button
            className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
            onClick={() => {}}
            style={customButtonWidth}
          >
            <Plus size={12.5} />
            New referral
          </Button>

          {/* <Button
            className="dashboard-title-btn success_span_text rightSpace"
            onClick={() => {}}
            style={{ marginRight: '-1px' }}
          >
            Pay
          </Button> */}
        </>
      </PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3 className="hoverPointer" onClick={() => setTable('statistics')}>
              Statistics
            </h3>
            <h3
              className="hoverPointer"
              onClick={() => setTable('referral_program')}
            >
              Referral program
            </h3>
            <h3
              className="hoverPointer"
              onClick={() => setTable('leaderboard')}
            >
              Leaderboard
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

export default Referral;
