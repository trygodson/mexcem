import { useEffect, useState } from 'react';
import { DriversDailyEarning } from '../../../shared/hooks/api/testService.js';

import {
  ArrowLeftRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Stopwatch,
} from 'react-bootstrap-icons';
import { colorScheme } from '../../../default';
import Card from '../../../shared/components/card/card';
import { LineChartDrawDriver } from '../../../shared/components/linechartdraw/linechartdraw';
import NewTable from '../../../shared/components/newTable/newtable';
import PageTitle from '../../../shared/components/pagetitle/pagetitle';
// import './driverearning.scss';

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

const DriverActivities = () => {
  const [loading, setLoading] = useState(true);
  const [tabledata, setTableData] = useState([]);

  useEffect(async () => {
    const data = await DriversDailyEarning();
    setTableData(data.data);
    setLoading(false);
  }, [tabledata]);

  // all vehicles
  const historyDecorator = [
    {
      label: 'Date',
      accessor: 'date',
      Cell: props => (
        <span className="dflex alc pl-1">
          <div
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: 'grey',
              borderRadius: '50%',
              fontSize: '14px',
              marginRight: '10px',
            }}
            className="dflex jcc alc"
          >
            jul
          </div>
          {props}
        </span>
      ),
    },
    {
      label: 'Total assist',
      accessor: 'total_assists',
      Cell: props => <span className="pl-1">{props}</span>,
    },
    {
      label: 'Booked Time',
      accessor: 'booked_time',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Remark',
      accessor: 'remark',
      Cell: props => <div>{props}</div>,
    },
    {
      label: 'Score',
      accessor: 'score',
      Cell: props => <div className="">{props}</div>,
    },
    {
      label: '',
      accessor: '_id',
      Cell: props => (
        <>
          {/* <CustomSwitch defaultChecked={props} /> */}
          <ChevronDown size={18} />
        </>
      ),
    },
  ];

  return (
    <main>
      <PageTitle
        title={
          <span>
            <b>Activities</b>
          </span>
        }
      ></PageTitle>
      <div className="mtop-2 tops ">
        <div className="row w100 jcb alc">
          <div classname="col-lg-4">
            <div className="title-text">
              <span>Current</span>
            </div>
            <div className="grey-container mtop-1 dflex flex-columm jcb">
              <div className="dflex jcc desc" style={{ marginBottom: '15px' }}>
                <span>Today</span>
              </div>
              <div className="dflex jcb alc mtop-2 pricearea">
                <ChevronLeft size={15} />
                <h4>90%</h4>
                <ChevronRight size={15} />
              </div>
              <div className="dflex jcb">
                <div className="dflex alc jcb">
                  <ArrowLeftRight size={12} />
                  <span
                    style={{
                      fontWeight: '500',
                      fontSize: '12px',
                      marginLeft: '8px',
                    }}
                  >
                    12 assist
                  </span>
                </div>
                <div>
                  <Stopwatch size={12} />
                  <span
                    style={{
                      fontWeight: '500',
                      fontSize: '12px',
                      marginLeft: '4px',
                    }}
                  >
                    4hrs 30min booked
                  </span>
                </div>
              </div>
              <div className="bottomarea w100">
                <div className="dflex jcb alc ">
                  <span>See all weekly earning</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </div>
          </div>
          <div classname="col-lg-4">
            <div className="title-text">
              <span>Weekly</span>
            </div>
            <div className="grey-container mtop-1 dflex flex-columm jcb">
              <div className="dflex jcc desc" style={{ marginBottom: '15px' }}>
                <span>Mar 9 - Mar 22</span>
              </div>
              <div className="dflex jcb alc mtop-2 pricearea">
                <ChevronLeft size={15} />
                <h4>90%</h4>
                <ChevronRight size={15} />
              </div>
              <div className="dflex jcb">
                <div className="dflex alc jcb">
                  <ArrowLeftRight size={12} />
                  <span
                    style={{
                      fontWeight: '500',
                      fontSize: '12px',
                      marginLeft: '8px',
                    }}
                  >
                    12 assist
                  </span>
                </div>
                <div>
                  <Stopwatch size={12} />
                  <span
                    style={{
                      fontWeight: '500',
                      fontSize: '12px',
                      marginLeft: '4px',
                    }}
                  >
                    4hrs 30min booked
                  </span>
                </div>
              </div>
              <div className="bottomarea w100">
                <div className="dflex jcb alc ">
                  <span>See all weekly earning</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </div>
          </div>
          <div classname="col-lg-4">
            <div className="title-text">
              <span>Past 3 months</span>
            </div>
            <div className="grey-container mtop-1 dflex flex-columm jcb">
              <div className="dflex jcc desc" style={{ marginBottom: '15px' }}>
                <span>Mar 9 - Mar 22</span>
              </div>
              <div className="dflex jcb alc mtop-2 pricearea">
                <ChevronLeft size={15} />
                <h4>90%</h4>
                <ChevronRight size={15} />
              </div>
              <div className="dflex jcb">
                <div className="dflex alc jcb">
                  <ArrowLeftRight size={12} />
                  <span
                    style={{
                      fontWeight: '500',
                      fontSize: '12px',
                      marginLeft: '8px',
                    }}
                  >
                    12 assist
                  </span>
                </div>
                <div>
                  <Stopwatch size={12} />
                  <span
                    style={{
                      fontWeight: '500',
                      fontSize: '12px',
                      marginLeft: '4px',
                    }}
                  >
                    4hrs 30min booked
                  </span>
                </div>
              </div>
              <div className="bottomarea w100">
                <div className="dflex jcb alc ">
                  <span>See all weekly earning</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple dflex jcb">
            <h3 className="hoverPointer">Daily Earnings</h3>
          </div>
          <hr style={customHrStyle} />
        </Card>
        <Card>
          <NewTable
            decorator={historyDecorator}
            tableData={tabledata}
            isloading={loading}
            addcheckbox={false}
            bulkAction={false}
          />
        </Card>
      </section>
    </main>
  );
};

export default DriverActivities;
