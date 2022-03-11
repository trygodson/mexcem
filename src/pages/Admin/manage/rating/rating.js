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
import { reviews, vendors } from '../../../../shared/hooks/api/testService.js';
import RippleTable from '../../../../shared/components/tables/table/TableCard';
import CustomText from '../../../../shared/components/customtext/customtext';
import { rootApp } from '../../../../routes';
import { colorScheme } from '../../../../default';
import Card from '../../../../shared/components/card/card';
import CustomSwitch from '../../../../shared/components/customswitch/customswitch';
import Ratings from '../../../../shared/components/ratings/ratings';
import { toolbox } from '../../../../shared/hooks/api/testService';
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

function Rating() {
  const modalRef = useRef();
  const [loading, setLoading] = useState(true);
  const [tabledata, setTableData] = useState([]);

  useEffect(async () => {
    const data = await reviews();
    setTableData(data.data);
    console.log(tabledata);
    setLoading(false);
  }, []);

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
        <span>
          {props.name}
          <br />
          {props.telephone}
        </span>
      ),
    },
    {
      label: 'Review',
      accessor: 'review_data',
      Cell: props => (
        <span>
          <span>
            <Ratings val={props.rating} size={14} />
          </span>
          <span>
            {props.comment === null ? <small>No review</small> : props.comment}
          </span>
        </span>
      ),
    },

    {
      label: 'User',
      accessor: 'user',
      Cell: props => <>{props}</>,
    },

    {
      label: 'Cost',
      accessor: 'cost',
      Cell: props => <span className="success">{props}</span>,
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
            <Archive size={15.4} />
          </span>

          <span className="table-icon-wrapper danger_span_text">
            <XCircle size={15.4} />
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
            <b>Review</b>
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
          {/* 
          <Button
            className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
            onClick={() => {}}
          >
            <Plus size={12.5} />
            Add new
          </Button> */}
        </>
      </PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3 className="hoverPointer">All review</h3>
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
          bulkAction={true}
        />
      </section>
    </main>
  );
}

export default Rating;
