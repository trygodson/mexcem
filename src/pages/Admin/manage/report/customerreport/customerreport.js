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
  Plus,
  Calendar,
  CalendarEvent,
  Download,
} from 'react-bootstrap-icons';
import { customerreport } from '../../../../../shared/hooks/api/testService.js';
import { colorScheme } from '../../../../../default';
import Card from '../../../../../shared/components/card/card';
import Ratings from '../../../../../shared/components/ratings/ratings';
import NewTable from '../../../../../shared/components/newTable/newtable';
import IconInput from '../../../../../shared/components/iconinput/iconinput';

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

function CustomerReport() {
  const modalRef = useRef();
  const [loading, setLoading] = useState(true);
  const [tabledata, setTableData] = useState([]);

  useEffect(async () => {
    const data = await customerreport();
    setTableData(data.data);
    console.log(tabledata);
    setLoading(false);
  }, []);

  const decorator = [
    {
      label: 'Customer',
      accessor: 'customer',
      Cell: props => <span className="text-center">{props}</span>,
    },
    {
      label: 'Vendor Assists',
      accessor: 'vendor_assist',
      Cell: props => <span className="text-center">{props}</span>,
    },
    {
      label: 'Driver Assist',
      accessor: 'driver_assist',
      Cell: props => <span className="text-center">{props}</span>,
    },
    {
      label: 'Cancelled Assist',
      accessor: 'cancelled_assist',
      Cell: props => <span className="text-center">{props}</span>,
    },
    {
      label: 'Completed Assist',
      accessor: 'completed_assist',
      Cell: props => <span className="text-center">{props}</span>,
    },
    {
      label: 'Total Assist',
      accessor: 'total_assist',
      Cell: props => <span className="text-center">{props}</span>,
    },
    {
      label: 'Ratings',
      accessor: 'rating',
      Cell: props => (
        <span className="text-center" style={{ paddingRight: '10px' }}>
          {props}
        </span>
      ),
    },
  ];

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span style={{ fontWeight: 'bold', color: 'grey' }}>
            Reports / Customer
          </span>
        }
      >
        <>
          {/* <select
            className="select-first"
            style={{ width: '220px', marginRight: '10px' }}
          >
            <option value="active">-Status: Active-</option>
            <option value="processing">-Status: Active-</option>
            <option value="disabled">-Status: Disabled-</option>
          </select> */}

          {/* <select className="select-first" style={{ width: '220px' }}>
            <option value="active">Filter by driver</option>
          </select> */}

          <input
            placeholder="Filter: Date"
            className="search"
            type="date"
            style={{ width: '180px' }}
          />
          <Button className="search-btn" onClick={() => {}}>
            <CalendarEvent size={15} style={iconStyle} />
          </Button>

          <Button
            className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
            onClick={() => {}}
          >
            <Download size={12.5} className="mx-1" />
            Export
          </Button>
        </>
      </PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple dflex jcb alc">
            <div className="dflex jcb alc">
              <span className="smtext">Show</span>
              <input type="number" className="grey_input" />
              <span className="smtext">entries</span>
            </div>
            <div className="dflex jcb">
              <input
                type="text"
                className="grey_input"
                placeholder="Search"
                style={{ width: 'auto' }}
              />
            </div>
          </div>
          <hr style={customHrStyle} />
        </Card>
        <NewTable
          decorator={decorator}
          tableData={tabledata}
          isloading={loading}
          addcheckbox={false}
          bulkAction={true}
        />
      </section>
    </main>
  );
}

export default CustomerReport;
