import React, { useRef, useState, useEffect } from 'react';
import PageTitle from '../../../../../shared/components/pagetitle/pagetitle';
import Button from '../../../../../shared/components/button/button';
import { CalendarDate } from 'react-bootstrap-icons';
import { colorScheme } from '../../../../../default';
import Card from '../../../../../shared/components/card/card';
import PullUp from '../../../../../shared/components/pullup/pullup';
import PieChartDraw from '../../../../../shared/components/piechartdraw/piechartdraw';
import AssistRequestStat from '../../../../../shared/components/assistrequeststat/assistrequeststat';
import LineChartDraw from '../../../../../shared/components/linechartdraw/linechartdraw';
import Height from '../../../../../shared/components/height/height';

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

function Productivity() {
  const modalRef = useRef();

  const [table, setTable] = useState('time_base_report'); // data_base_report
  const [loading, setLoading] = useState(true);
  const [timebasetabledata, setTimebaseTableData] = useState([]);
  const [databasetabledata, setDatabaseTableData] = useState([]);

  const [hideTimebaseReport, setHIdeTimebaseReport] = useState(false);
  const [hideDatabaseReport, setHideDatabaseReport] = useState(true);

  const defaultHrMarginLeft = 8;
  const [hrMarginLeft, setHrMarginLeft] = useState(defaultHrMarginLeft);

  const defaultHrWidth = 117;
  const [hrWidth, setHrWidth] = useState(defaultHrWidth);

  useEffect(() => {
    if (table === 'time_base_report') {
      setHIdeTimebaseReport(false);
      setHideDatabaseReport(true);
      setHrMarginLeft(defaultHrMarginLeft);
    } else {
      setHIdeTimebaseReport(true);
      setHideDatabaseReport(false);
      setHrMarginLeft(155);
    }
  }, [table]);

  // useEffect(
  //   async () => {
  //     const timebase = await feedbackTickets()
  //     const database = await feedbackFeedbacks()
  //     setTimebaseTableData(timebase.data)
  //     setDatabaseTableData(database.data)
  //     setLoading(false)
  //   }, [timebasetabledata]
  // )

  const timeBaseReport = (
    <Card className={hideTimebaseReport && 'hide'}>
      <div className="row assist-request">
        <div className="col-lg-3">
          <PullUp val={86} />
          <PieChartDraw />
          <PullUp val={10} />
        </div>
        <div className="col-sm-1 col-lg-1 stat">
          <AssistRequestStat
            title="Total Request"
            total={'0(0%)'}
            color={colorScheme.faintPrimary4}
          />
        </div>
        <div className="col-sm-1 col-lg-1 stat">
          <AssistRequestStat title="No driver" total={'0(0%)'} />
        </div>
        <div className="col-sm-1 col-lg-1 stat">
          <AssistRequestStat
            title="Cancelled"
            total={'0(0%)'}
            color={colorScheme.faintOrange2}
          />
        </div>
        <div className="col-sm-1 col-lg-1 stat">
          <AssistRequestStat
            title="Rejected"
            total={'0(0%)'}
            color={colorScheme.faintDanger3}
          />
        </div>
        <div className="col-sm-1 col-lg-1 stat">
          <AssistRequestStat
            title="Completed"
            total={'0(0%)'}
            color={colorScheme.faintSuccess2}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Height val={50} />
          <LineChartDraw height={280} />
        </div>
      </div>
      <Height val={25} />
      <div className="row">
        <div className="col-2">
          <b>0 min</b>
          <p>Avg. Assist Time</p>
        </div>
        <div className="col-2">
          <b>$0</b>
          <p>Avg. Assist Amount</p>
        </div>
        <div className="col-2">
          <b>0 Km</b>
          <p>Avg. Assist Distance</p>
        </div>
      </div>
    </Card>
  );
  const databaseReport = <div className={hideDatabaseReport && 'hide'}></div>;

  const renderTable = () => {
    return (
      <>
        {timeBaseReport}
        {databaseReport}
      </>
    );
  };

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span>
            Reports / Productivity <b>/ Request analytics</b>
          </span>
        }
      >
        <>
          {/* <select className="select-first" style={{ width: '220px', marginRight: '10px' }}>
            <option value="active">Vehicle type</option>
          </select>

          <select className="select-first" style={{ width: '220px', marginRight: '10px' }}>
            <option value="active">By driver</option>
          </select> */}

          {/* <select className="select-first" style={{ width: '220px' }}>
            <option value="active">Filter by driver</option>
          </select> */}

          <input
            placeholder="Filter:data"
            type="date"
            className="search"
            style={{ width: '180px' }}
          />

          <Button className="search-btn" onClick={() => {}}>
            <CalendarDate size={15} style={iconStyle} />
          </Button>
        </>
      </PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3
              className="hoverPointer"
              onClick={() => setTable('all_messages')}
            >
              Time base report
            </h3>
            <h3 className="hoverPointer" onClick={() => setTable('topics')}>
              Data base report
            </h3>
          </div>
          <select
            style={{
              width: '200px',
              float: 'right',
              marginTop: '-50px',
              marginRight: '20px',
            }}
          >
            <option>Request analysis</option>
            <option>Assist History</option>
            <option>Cancellation report</option>
          </select>
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

export default Productivity;
