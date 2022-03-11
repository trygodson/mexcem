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
import { vendors } from '../../../../shared/hooks/api/testService.js';
import RippleTable from '../../../../shared/components/tables/table/TableCard';
import CustomText from '../../../../shared/components/customtext/customtext';
import { rootApp } from '../../../../routes';
import { colorScheme } from '../../../../default';
import Card from '../../../../shared/components/card/card';
import CustomSwitch from '../../../../shared/components/customswitch/customswitch';
import Ratings from '../../../../shared/components/ratings/ratings';
import { events } from '../../../../shared/hooks/api/testService';
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

function Events() {
  const modalRef = useRef();

  const [table, setTable] = useState('all_vendors');
  const [loading, setLoading] = useState(true);
  const [tabledata, setTableData] = useState([]);

  useEffect(async () => {
    const data = await events();
    setTableData(data.data);
    setLoading(false);
  }, [tabledata]);

  //
  const decorator = [
    {
      label: 'Triggers',
      accessor: 'triggers',
      Cell: props => <>{props}</>,
    },
    {
      label: 'SMS',
      accessor: 'sms',
      Cell: props => (
        <>
          <CustomSwitch defaultChecked={props} />
        </>
      ),
    },
    {
      label: 'App',
      accessor: 'app',
      Cell: props => (
        <>
          <CustomSwitch defaultChecked={props} />
        </>
      ),
    },
    {
      label: 'Email',
      accessor: 'email',
      Cell: props => <CustomSwitch defaultChecked={props} />,
    },

    {
      label: 'Actions',
      accessor: '_id',
      Cell: props => (
        <span className="actions">
          <span className="table-icon-wrapper  before success_span_text">
            <Pencil size={15.4} />
          </span>
        </span>
      ),
    },
  ];

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span>
            Configuration <b> / Notification Events</b>
          </span>
        }
      >
        <>
          {/* <select className="select-first" style={{ width: '220px', marginRight: '10px' }}>
            <option value="active">-Status: Active-</option>
            <option value="processing">-Status: Active-</option>
            <option value="disabled">-Status: Disabled-</option>
          </select> */}

          {/* <select className="select-first" style={{ width: '220px' }}>
            <option value="active">Filter by driver</option>
          </select> */}

          <input
            placeholder="Search"
            className="search"
            style={{ width: '180px' }}
          />
          <Button className="search-btn" onClick={() => {}}>
            <Search size={15} style={iconStyle} />
          </Button>

          <Button
            className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
            onClick={() => {}}
          >
            <Plus size={12.5} />
            New
          </Button>
        </>
      </PageTitle>
      <section>
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

export default Events;
