import React, { useEffect, useState } from 'react';
import {
  ChevronRight,
  Clock,
  PlusCircle,
  PlusLg,
  QuestionCircle,
} from 'react-bootstrap-icons';
import Button from '../../../shared/components/button/button';
import Card from '../../../shared/components/card/card';
import Height from '../../../shared/components/height/height';
import NewTable from '../../../shared/components/newTable/newtable';
import PageTitle from '../../../shared/components/pagetitle/pagetitle';
import { CustomerDashboard } from '../../../shared/hooks/api/testService';
import './dashboard.scss';

function dashboard() {
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
      label: 'Payment',
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
              <div className="col-6 paddingRight">
                <Button className="btn-block center-container-btn btn-success">
                  <PlusCircle size={11} />
                  {'  '} Add cash
                </Button>
              </div>
              <div className="col-6 paddingLeft">
                {' '}
                <Button className="btn-block center-container-btn btn-primary">
                  <Clock size={11} />
                  {'  '} History
                </Button>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-4 promotion">
          <Card>
            <h3>Promotions</h3>
            <Height val={10} />
            <div className="tabs">
              <span className="active">Current</span>
              <span>Upcoming</span>
            </div>
            <Height val={14} />
            <div className="row bottom" style={{ padding: '15px 12px' }}>
              <div className="text-holder">
                <h5 className="car-name">Get 10% off 3 assist</h5>
                <p className="code" style={{ fontWeight: '300' }}>
                  5 hours left - 20.08.2000
                </p>
              </div>
              <div>
                <span>2/3</span>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-4">
          <Card>
            <h3>Summary</h3>
            <Height val={10} />
            <div className="row top">
              <div className="icon-number-holder">
                <div className="icon-holder primary_span_text">
                  <i className="fi fi-rr-school-bus primary_span_text"></i>
                </div>
                <div className="count-holder">
                  <span className="total">Total</span>
                  <h4 className="number">10</h4>
                </div>
              </div>
              <div
                className="add-vehicle-button success_span_text"
                style={{ padding: '7px' }}
              >
                <PlusLg size={16} />
                <span className="name">Add Vehicle</span>
              </div>
            </div>
            <Height val={10} />
            <p>Default</p>
            <Height val={3} />
            <div className="row bottom">
              <div className="text-holder">
                <h5 className="car-name">Mecedez Benz</h5>
                <p className="code">ASXD124</p>
              </div>
              <ChevronRight size={18} />
            </div>
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
          addcheckbox={false}
          pagination={false}
        />
        <div className="dflex jce">
          <div
            className="primary_span_text"
            style={{
              padding: '8px 25px',
              fontWeight: '500',
              fontSize: '12px',
            }}
          >
            See All
          </div>
        </div>
      </div>
    </main>
  );
}

export default dashboard;
