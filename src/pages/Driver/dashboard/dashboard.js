import React, { useEffect, useState } from 'react';
import {
  ChevronRight,
  Clock,
  Download,
  PlusCircle,
  PlusLg,
  QuestionCircle,
} from 'react-bootstrap-icons';
import Button from '../../../shared/components/button/button';
import Card from '../../../shared/components/card/card';
import Height from '../../../shared/components/height/height';
import { LineChartDrawDriver } from '../../../shared/components/linechartdraw/linechartdraw';
import NewTable from '../../../shared/components/newTable/newtable';
import PageTitle from '../../../shared/components/pagetitle/pagetitle';
import { CustomerDashboard } from '../../../shared/hooks/api/testService';
import './dashboard.scss';

function DriverDashboard() {
  const [loading, setLoading] = useState(true);
  const [tabledata, setTableData] = useState([]);

  useEffect(async () => {
    const data = await CustomerDashboard();
    setTableData(data.data);
    setLoading(false);
  }, [tabledata]);

  const vehiclesDecorator = [
    {
      label: 'Date and Time',
      accessor: 'date',
      Cell: props => <div style={{ paddingLeft: '10px' }}>{props}</div>,
    },
    {
      label: 'Assist',
      accessor: 'assist',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Paymenr',
      accessor: 'payment',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Status',
      accessor: 'status',
      Cell: props => (
        <span
          className="success_span_text"
          style={{ padding: '4px 8px', fontSize: 14 }}
        >
          {props}
        </span>
      ),
    },

    {
      label: 'Total',
      accessor: 'total',
      Cell: props => <>{`$${props}`}</>,
    },
  ];

  return (
    <main>
      <PageTitle title={<h2 className="left">Welcome, Stephen</h2>}>
        <></>
      </PageTitle>
      <Height val={8} />
      <div className="row">
        <div className="col-4">
          <Card>
            <h3>Wallet</h3>
            <Height val={12} />
            <h1>$500.00</h1>
            <Height val={7} />
            <p className="balance">
              Total balance <QuestionCircle size={11} />
            </p>
            <Height val={10} />
            <div className="row">
              <div className="w100">
                <Button className="btn-block center-container-btn success_span_text">
                  <Download size={14} />
                  <span style={{ fontWeight: '600' }}> Cash out</span>
                </Button>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-4 promotion paddingNone">
          <Card className="" style={{ padding: '10px' }}>
            <div className="dflex jcb alc" style={{ paddingBottom: '5px' }}>
              <h4>Actvities</h4>
              <div className="view-more">View more</div>
            </div>
            <LineChartDrawDriver height={155} />
          </Card>
        </div>
        <div className="col-4 promotion">
          <Card className="" style={{ padding: '10px' }}>
            <div className="dflex jcb alc" style={{ paddingBottom: '5px' }}>
              <h4>Earnings</h4>
              <div className="view-more">View more</div>
            </div>
            <LineChartDrawDriver height={155} />
          </Card>
        </div>
      </div>
      <div>
        <span style={{ fontWeight: 'bold' }}>Recent assist</span>
      </div>
      <div className="mtop-2">
        <NewTable
          decorator={vehiclesDecorator}
          tableData={tabledata}
          isloading={loading}
          addcheckbox={true}
        />
      </div>
    </main>
  );
}

export default DriverDashboard;
