import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../../../shared/components/pagetitle/pagetitle';
import Button from '../../../../shared/components/button/button';
import { Archive, Trash, Search, Pencil, XCircle, PersonPlus, Plus } from 'react-bootstrap-icons';
import { colorScheme } from '../../../../default';
import Card from '../../../../shared/components/card/card';
import { issuesandreasons } from '../../../../shared/hooks/api/testService';
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

function IssuesAndReasons() {
  const modalRef = useRef();

  //table states

  const [loading, setLoading] = useState(true)
  const [tabledata, setTableData] = useState([])
  const [decorator, setDecorator] = useState([])
  const _pre = [{ label: '#', accessor: 'hash', }, { label: 'label', accessor: 'label', }, { label: 'User', accessor: 'user' }, { label: 'Assist Status', accessor: 'assist_status' }, {
    label: 'Actions', accessor: '_id', Cell: (val) => <td>
      <span className="actions" >
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
    </td>
  }]


  useEffect(
    async () => {
      const data = await issuesandreasons()
      setTableData(data.data)
      setDecorator(_pre)
      setLoading(false)
    }, [decorator, tabledata]
  )

  // const decorator = [
  //   {
  //     label: <input type="checkbox" style={checkboxStyle} />,
  //     accessor: 'id',
  //     Cell: props => <input type="checkbox" style={checkboxStyle} />,
  //   },

  //   {
  //     label: '#',
  //     accessor: 'hash',
  //     Cell: props => <>{props.value}</>,
  //   },
  //   {
  //     label: 'Title',
  //     accessor: 'title',
  //     Cell: props => <>{props.value}</>,
  //   },
  //   {
  //     label: 'User',
  //     accessor: 'user',
  //     Cell: props => <>{props.value}</>,
  //   },

  //   {
  //     label: 'Assist status',
  //     accessor: 'assist_status',
  //     Cell: props => <>{props.value}</>,
  //   },
  //   {
  //     label: 'Actions',
  //     accessor: '_id',
  //     Cell: props => (
  //       <span className="actions">
  //         <span className="table-icon-wrapper before success_span_text">
  //           <Pencil size={15.4} />
  //         </span>
  //         <span className="table-icon-wrapper before primary_span_text">
  //           <Archive size={15.4} />
  //         </span>

  //         <span className="table-icon-wrapper danger_span_text">
  //           <XCircle size={15.4} />
  //         </span>
  //       </span>
  //     ),
  //   },
  // ];

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span>
            <b>Issues & reasons</b>
          </span>
        }
      >
        <>
          <select className="select-first" style={{ width: '220px', marginRight: '10px' }}>
            <option value="active">-Status: Active-</option>
            <option value="processing">-Status: Active-</option>
            <option value="disabled">-Status: Disabled-</option>
          </select>

          {/* <select className="select-first" style={{ width: '220px' }}>
            <option value="active">Filter by driver</option>
          </select> */}

          <input placeholder="Search" className="search" style={{ width: '180px' }} />
          <Button className="search-btn" onClick={() => { }}>
            <Search size={15} style={iconStyle} />
          </Button>

          <Link to="/issues/and/reasons/new">
            <Button
              className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
              onClick={() => { }}
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
            <h3 className="hoverPointer">All issues & reasons</h3>
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
        <NewTable decorator={decorator} tableData={tabledata} actions={true} isloading={loading} />
      </section>
    </main>
  );
}

export default IssuesAndReasons;
