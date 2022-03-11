import React, { useRef, useState, useEffect } from 'react';
import PageTitle from '../../../shared/components/pagetitle/pagetitle';
import Button from '../../../shared/components/button/button';
import { Archive, Trash, Search } from 'react-bootstrap-icons';
import { driverMoneyTransactions } from '../../../shared/hooks/api/testService.js';
// import './history.scss';
import NewTable from '../../../shared/components/newTable/newtable';

const customArchiveIconStyle = {
  width: '30px',
  height: '30px',
  borderRadius: '50%',
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

function DriverTransaction({ ...props }) {
  const modalRef = useRef();

  const [loading, setLoading] = useState(true);
  const [tabledata, setTableData] = useState([]);

  useEffect(async () => {
    const data = await driverMoneyTransactions();
    setTableData(data.data);
    setLoading(false);
  }, [tabledata]);

  // all vehicles
  const historyDecorator = [
    {
      label: 'Date',
      accessor: 'date',
      Cell: props => <>{props}</>,
    },

    {
      label: 'Type',
      accessor: 'type',
      Cell: props => <span>{props}</span>,
    },
    {
      label: 'Transaction no',
      accessor: 'transaction',
      Cell: props => <span>{props}</span>,
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
      label: 'Amount',
      accessor: 'total',
      Cell: props => <div className="">{props}</div>,
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
      <PageTitle
        title={
          <span>
            <b>Transaction</b>
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
        {/* <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3 className="hoverPointer" onClick={() => setTable('all_vehicles')}>
              All vehicles
            </h3>
            <h3 className="hoverPointer" onClick={() => setTable('brand')}>
              Brand
            </h3>
            <h3 className="hoverPointer" onClick={() => setTable('model')}>
              Model
            </h3>
            <h3 className="hoverPointer" onClick={() => setTable('color')}>
              Color
            </h3>
            <h3 className="hoverPointer" onClick={() => setTable('tire_size')}>
              Tire size
            </h3>
          </div>
          <hr
            style={{
              background: colorScheme.gray,
              width: '117px',
              marginLeft: `${hrMarginLeft}px`,
              height: '2.2px',
            }}
          />
          <hr style={customHrStyle} />
        </Card> */}
        <NewTable
          decorator={historyDecorator}
          tableData={tabledata}
          isloading={loading}
          addcheckbox={true}
        />
      </section>
    </main>
  );
}

export default DriverTransaction;
