import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../../shared/components/pagetitle/pagetitle';
import Button from '../../../shared/components/button/button';
import {
  Archive,
  Search,
  ChevronRight,
  QuestionCircle,
  PlusCircle,
  Person,
  BagFill,
  PersonCircle,
  CreditCard,
  Paypal,
  Download,
} from 'react-bootstrap-icons';
import { customerHistory } from '../../../shared/hooks/api/testService.js';
import RippleTable from '../../../shared/components/tables/table/TableCard';
import Height from '../../../shared/components/height/height';
import Card from '../../../shared/components/card/card';
import NewTable from '../../../shared/components/newTable/newtable';

const customArchiveIconStyle = {
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const customPaymentCardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const customStatus = {
  padding: '10px 12px',
  fontSize: '14px',
  display: 'inline-block',
};

const iconStyle = {
  marginRight: '9px',
  marginBottom: '-2px',
};

const checkboxStyle = {
  marginLeft: '15px',
};

function DriverPayment({ ...props }) {
  const modalRef = useRef();

  const [loading, setLoading] = useState(true);
  const [tabledata, setTableData] = useState([]);

  useEffect(async () => {
    const data = await customerHistory();
    setTableData(data.data);
    setLoading(false);
  }, [tabledata]);

  // all vehicles
  const historyDecorator = [
    {
      label: 'Date',
      accessor: 'date',
      Cell: props => <span style={{ paddingLeft: '15px' }}>{props}</span>,
    },
    {
      label: 'Amount',
      accessor: 'amount',
      Cell: props => <span style={{ paddingLeft: '10px' }}>{props}</span>,
    },
    {
      label: 'Method',
      accessor: 'method',
      Cell: props => <span style={{ paddingLeft: '10px' }}>{props}</span>,
    },
    {
      label: 'Type',
      accessor: 'type',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Status',
      accessor: 'status',
      Cell: props => (
        <div className="success_span_text" style={customStatus}>
          {props}
        </div>
      ),
    },
    {
      label: 'Actions',
      accessor: '_id',
      Cell: props => (
        <>
          {/* <CustomSwitch defaultChecked={props} /> */}
          <div className="primary_span_text" style={customArchiveIconStyle}>
            <Archive size={18} className="primary_span_text" />
          </div>
        </>
      ),
    },

    // {
    //   label: 'Actions',
    //   accessor: '_id',
    //   Cell: props => (
    //     <span className="actions">
    //       <span className="table-icon-wrapper  before success_span_text">
    //         <Pencil size={15.4} />
    //       </span>
    //       <span className="table-icon-wrapper  before primary_span_text">
    //         <Archive size={15.4} />
    //       </span>

    //       <span className="table-icon-wrapper  danger_span_text">
    //         <XCircle size={15.4} />
    //       </span>
    //     </span>
    //   ),
    // },
  ];

  return (
    // figure out a better way to do this
    <main>
      <div className="row" style={{ margin: '40px 0' }}>
        <div className="col-4">
          <Card>
            <h4>Wallet</h4>
            <Height val={10} />
            <h1>$500.00</h1>
            <p className="balance">
              Total balance <QuestionCircle size={11} />
            </p>
            <Height val={10} />
            <div className="row">
              <div className="w100">
                <Button className="btn-block center-container-btn primary_span_text">
                  <Download size={14} className="" />
                  <span className=""> Cash out</span>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="col-4">
          <Card>
            <h4>Payment default</h4>
            <Height val={10} />
            <div className="row bottom">
              <div style={customPaymentCardStyle}>
                <PersonCircle size={18} style={{ marginRight: '5px' }} />
                <div className="text-holder">
                  <h5 className="car-name">Personal</h5>
                  <p className="code">paypal</p>
                </div>
              </div>
              <ChevronRight size={18} />
            </div>
            <Height val={10} />
            <div className="row bottom">
              <div style={customPaymentCardStyle}>
                <BagFill size={18} style={{ marginRight: '5px' }} />
                <div className="text-holder">
                  <h5 className="car-name">Business</h5>
                  <p className="code">set up your business profile</p>
                </div>
              </div>
              <ChevronRight size={18} />
            </div>
          </Card>
        </div>
        <div className="col-4">
          <Card>
            <h4>Payment Methods</h4>
            <Height val={10} />
            <div className="row bottom">
              <div style={customPaymentCardStyle}>
                <CreditCard size={18} style={{ marginRight: '5px' }} />
                <div className="text-holder">
                  <p className="code">Add Bank Card</p>
                </div>
              </div>
              <ChevronRight size={18} />
            </div>
            <Height val={10} />
            <div className="row bottom">
              <div style={customPaymentCardStyle}>
                <Paypal size={18} style={{ marginRight: '5px' }} />
                <div className="text-holder">
                  <p className="code">paypal</p>
                </div>
              </div>
              <ChevronRight size={18} />
            </div>
            <Height val={10} />
            <div className="row bottom">
              <div style={customPaymentCardStyle}>
                <CreditCard size={18} style={{ marginRight: '5px' }} />
                <div className="text-holder">
                  <p className="code">Master Card</p>
                </div>
              </div>
              <ChevronRight size={18} />
            </div>
          </Card>
        </div>
      </div>

      <PageTitle
        title={
          <span>
            <b>History</b>
          </span>
        }
      >
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

          <Button className="dashboard-title-btn primary-dashboard-title-btn rightSpace">
            <Archive size={12.5} />
            Archive
          </Button>
        </>
      </PageTitle>
      <section>
        <NewTable
          decorator={historyDecorator}
          tableData={tabledata}
          isloading={loading}
          addcheckbox={false}
        />
      </section>
    </main>
  );
}

export default DriverPayment;
