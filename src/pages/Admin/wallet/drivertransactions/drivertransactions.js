import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../../../shared/components/pagetitle/pagetitle';
import Button from '../../../../shared/components/button/button';
import { Calendar3 } from 'react-bootstrap-icons';
import {
  driverTransactions,
  vendors,
} from '../../../../shared/hooks/api/testService.js';
import { colorScheme } from '../../../../default';
import Card from '../../../../shared/components/card/card';
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

function DriverTransactions() {
  const modalRef = useRef();
  const [loading, setLoading] = useState(true);
  const [tabledata, setTableData] = useState([]);

  useEffect(async () => {
    const data = await driverTransactions();
    setTableData(data.data);
    setLoading(false);
  }, [tabledata]);

  const decorator = [
    {
      label: 'Date',
      accessor: 'date_data',
      Cell: props => (
        <span>
          <span>{props.date}</span>
          <br />
          <span>{props.time}</span>
        </span>
      ),
    },
    {
      label: 'Driver',
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
      label: 'Description',
      accessor: 'description',
      Cell: props => <span className="status success_span_text">{props}</span>,
    },

    {
      label: 'Amount',
      accessor: 'amount',
      Cell: props => <span>{`${props}`}</span>,
    },

    {
      label: 'Cash Balance',
      accessor: 'cash_balance',
      Cell: props => <span className="success">{`${props}`}</span>,
    },

    {
      label: 'Status',
      accessor: 'status',
      Cell: props => <span className="status orange_span_text">{props}</span>,
    },
  ];

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span>
            Wallet / Transactions / <b>Driver</b>
          </span>
        }
      >
        <>
          <select
            className="select-first"
            style={{ width: '220px', marginRight: '10px' }}
          >
            <option value="active">By Driver</option>
          </select>

          {/* <select className="select-first" style={{ width: '220px' }}>
            <option value="active">Filter by driver</option>
          </select> */}

          <input
            placeholder="Filter:Date"
            type="date"
            className="search"
            style={{ width: '180px' }}
          />
          <Button className="search-btn" onClick={() => {}}>
            <Calendar3 size={15} style={iconStyle} />
          </Button>

          <Button
            className="dashboard-title-btn success-dashboard-title-btn rightSpace"
            onClick={() => {}}
          >
            Top up
          </Button>

          <Button
            className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
            onClick={() => {}}
          >
            Withdraw
          </Button>
        </>
      </PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3 className="hoverPointer">All Transactions</h3>
          </div>
          <hr
            style={{
              background: colorScheme.gray,
              width: '117px',
              marginLeft: `8px`,
              height: '2.2px',
            }}
          />
          <hr style={customHrStyle} />
        </Card>
        <NewTable
          decorator={decorator}
          tableData={tabledata}
          isloading={loading}
          addcheckbox={true}
        />
      </section>
    </main>
  );
}

export default DriverTransactions;
