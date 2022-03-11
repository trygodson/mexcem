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
import { activityLog } from '../../../../../shared/hooks/api/testService.js';
import RippleTable from '../../../../../shared/components/tables/table/TableCard';
import CustomText from '../../../../../shared/components/customtext/customtext';
import { rootApp } from '../../../../../routes';
import { colorScheme } from '../../../../../default';
import Card from '../../../../../shared/components/card/card';
import UserDetails from '../../../../../shared/components/userdetails/userdetails';
import Height from '../../../../../shared/components/height/height';
import Attachment from '../../../../../shared/components/smallcards/attachment/attachment';
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

function AdminDetails() {
  const modalRef = useRef();

  const [table, setTable] = useState('summary'); // activity_log
  const [loading, setLoading] = useState(true);
  const [tabledata, setTableData] = useState([]);

  useEffect(async () => {
    const data = await activityLog();
    setTableData(data.data);
    setLoading(false);
  }, [tabledata]);

  const [hideSummary, setHideSummary] = useState(false);
  const [hideActivityLogTable, setHideActivityLogTable] = useState(true);

  const defaultHrMarginLeft = 8;
  const [hrMarginLeft, setHrMarginLeft] = useState(defaultHrMarginLeft);
  const defaultHrWidth = 117;
  const [hrWidth, setHrWidth] = useState(defaultHrWidth);

  useEffect(() => {
    if (table === 'summary') {
      setHideSummary(false);
      setHideActivityLogTable(true);
      setHrMarginLeft(defaultHrMarginLeft);
      setHrWidth(defaultHrWidth);
    } else {
      setHideSummary(true);
      setHideActivityLogTable(false);
      setHrMarginLeft(145);
      setHrWidth(150);
    }
  }, [table]);

  // summary
  const summary = (
    <div className={hideSummary && 'hide'}>
      <Card className="paddingNone">
        <div style={{}}>
          <div className="row">
            <div className="col-sm-12 col-lg-7" style={customCol2Style}>
              <h3 style={{ marginLeft: '13.6px' }}>Admin Details</h3>
              <Height val={11} />
              {/* pass props to below */}
              <UserDetails />
            </div>
            <div className="col-sm-12 col-lg-5" style={customColStyle}>
              <h3>Roles & Permissions</h3>
              <Height val={8} />
              <select className="" style={{ width: '220px' }}>
                <option value="active">- Status: Role -</option>
              </select>
              <button
                className="dashboard-title-btn primary-dashboard-title-btn"
                style={{ height: '35px', marginLeft: '3.7px' }}
              >
                Update
              </button>
            </div>
          </div>
        </div>
        <Height val={70} />
      </Card>
    </div>
  );

  // activity log
  const activityLogDecorator = [
    {
      label: 'Date',
      accessor: 'date_data',
      Cell: props => (
        <span
          style={{
            paddingLeft: '10px',
            flexDirection: 'column',
            display: 'flex',
          }}
        >
          <>
            {props.date}

            <small>{props.time}</small>
          </>
        </span>
      ),
    },

    {
      label: 'Event',
      accessor: 'event',
      Cell: props => <>{props}</>,
    },
    {
      label: 'URL',
      accessor: 'url',
      Cell: props => <>{props}</>,
    },
    {
      label: 'IP address',
      accessor: 'ip_address',
      Cell: props => <>{props}</>,
    },
  ];

  const activityLogTable = (
    <NewTable
      decorator={activityLogDecorator}
      tableData={tabledata}
      isloading={loading}
      addcheckbox={false}
      pagination={false}
      hide={hideActivityLogTable}
    />
  );

  const renderAdminDetails = () => {
    return (
      <>
        {summary}
        {activityLogTable}
      </>
    );
  };

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span>
            User / Admin <b>/ Stephen Jackson</b>
          </span>
        }
      >
        <>
          {/* <select className="select-first" style={{ width: '220px', marginRight: '10px' }}>
            <option value="active">-Status: Active-</option>
            <option value="processing">-Status: Active-</option>
            <option value="disabled">-Status: Disabled-</option>
          </select>

          <select className="select-first" style={{ width: '220px' }}>
            <option value="active">Filter by driver</option>
          </select> */}

          {/* <input placeholder="Search" className="search" style={{ width: '180px' }} />
          <Button className="search-btn" onClick={() => {}}>
            <Search size={15} style={iconStyle} />
          </Button> */}

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
            <h3
              className="hoverPointer"
              onClick={() => setTable('activity_log')}
            >
              Activity Log
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
        {renderAdminDetails()}
      </section>
    </main>
  );
}

export default AdminDetails;
