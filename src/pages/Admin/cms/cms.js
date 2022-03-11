import React, { useRef, useState, useEffect } from 'react';
import PageTitle from '../../../shared/components/pagetitle/pagetitle';
import Button from '../../../shared/components/button/button';
import {
  Archive,
  Trash,
  Search,
  Pencil,
  XCircle,
  PersonPlus,
  Plus,
} from 'react-bootstrap-icons';
import RippleTable from '../../../shared/components/tables/table/TableCard';
import { colorScheme } from '../../../default';
import Card from '../../../shared/components/card/card';
import { cms } from '../../../shared/hooks/api/testService';
import { Link } from 'react-router-dom';
import NewTable from '../../../shared/components/newTable/newtable';

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

function CMS() {
  const modalRef = useRef();
  const [loading, setLoading] = useState(true);
  const [tabledata, setTableData] = useState([]);
  const [decorator, setDecorator] = useState([]);

  const _pre = [
    {
      label: 'Title',
      accessor: 'title',
      Cell: props => <>{props}</>,
    },

    {
      label: 'Name',
      accessor: 'name',
      Cell: props => <>{props}</>,
    },

    {
      label: 'Actions',
      accessor: '_id',
      Cell: props => (
        <span className="actions">
          <span className="table-icon-wrapper before success_span_text">
            <Pencil size={15.4} />
          </span>

          <span className="table-icon-wrapper danger_span_text">
            <XCircle size={15.4} />
          </span>
        </span>
      ),
    },
  ];

  useEffect(async () => {
    const data = await cms();
    setTableData(data.data);
    setDecorator(_pre);
    setLoading(false);
  }, [decorator, tabledata]);

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span>
            <b>CMS</b>
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

          <Link to="/app/cms/new">
            <Button
              className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
              onClick={() => {}}
            >
              <Plus size={12.5} />
              Add new
            </Button>
          </Link>
        </>
      </PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3 className="hoverPointer">Content Management System</h3>
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
        />
      </section>
    </main>
  );
}

export default CMS;
