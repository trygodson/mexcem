import React, { useEffect, useRef, useState } from 'react';
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
} from 'react-bootstrap-icons';
import { drivers } from '../../../../shared/hooks/api/testService.js';
import RippleTable from '../../../../shared/components/tables/table/TableCard';
import CustomText from '../../../../shared/components/customtext/customtext';
import { rootApp } from '../../../../routes';
import NewTable from '../../../../shared/components/newTable/newtable';

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

function Drivers() {
  const modalRef = useRef();
  const [loading, setLoading] = useState(true);
  const [tabledata, setTableData] = useState([]);

  useEffect(async () => {
    const data = await drivers();
    setTableData(data.data);
    setLoading(false);
  }, [tabledata]);

  const decorator = [
    {
      label: 'Name',
      accessor: 'image',
      Cell: props => <img src={props} style={imgStyle} />,
    },
    {
      label: '',
      accessor: 'user_data',
      Cell: props => (
        <>
          <span>{props.name}</span>
          <br />
          <span>{props.telephone}</span>
        </>
      ),
    },
    {
      label: 'Email',
      accessor: 'email',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Assist',
      accessor: 'assist',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Status',
      accessor: 'status',
      Cell: props => (
        <span className="status success_span_text">
          <CustomText type="span" size={14.6}>
            {props}
          </CustomText>
        </span>
      ),
    },
    {
      label: 'Actions',
      accessor: '_id',
      Cell: props => (
        <span className="actions">
          <span className="table-icon-wrapper before success_span_text">
            <Pencil size={15.4} />
          </span>
          <span className="table-icon-wrapper before primary_span_text">
            <XCircle size={15.4} />
          </span>
          <span className="table-icon-wrapper danger_span_text">
            <Archive size={15.4} />
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
            Users <b>/ Drivers</b>
          </span>
        }
      >
        <>
          <select className="select-first" style={{ width: '220px' }}>
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

          <Link to={rootApp + '/user/add'}>
            <Button
              className="dashboard-title-btn success_span_text rightSpace"
              onClick={() => {}}
              style={{ marginRight: '-1px' }}
            >
              <PersonPlus size={12.8} style={iconStyle} />
              Add user
            </Button>
          </Link>

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

export default Drivers;
