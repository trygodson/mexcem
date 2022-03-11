import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../../../shared/components/pagetitle/pagetitle';
import Button from '../../../../shared/components/button/button';
import { Archive, Plus, Search, Pencil, XCircle, PersonPlus } from 'react-bootstrap-icons';
import { documentsTypes } from '../../../../shared/hooks/api/testService.js';
import RippleTable from '../../../../shared/components/tables/table/TableCard';
import CustomText from '../../../../shared/components/customtext/customtext';
import { rootApp } from '../../../../routes';

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

function DocumentTypes() {
  const modalRef = useRef();

  const decorator = [
    {
      label: <span style={{ marginLeft: '15px' }}>Name</span>,
      accessor: 'name',
      Cell: props => <span style={{ padding: '15px', }}>{props.value}</span>,
    },

    {
      label: 'Type',
      accessor: 'type',
      Cell: props => <span style={{ padding: '15px', }}>{props.value}</span>,
    },

    {
      label: 'Actions',
      accessor: '_id',
      Cell: props => (
        <span className="actions" style={{ padding: '15px', }}>
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
            Documents <b>/ Types</b>
          </span>
        }
      >
        <>
          {/* <select className="select-first" style={{ width: '220px' }}>
            <option value="active">-Status: Active-</option>
            <option value="processing">-Status: Active-</option>
            <option value="disabled">-Status: Disabled-</option>
          </select>

          <input placeholder="Search" className="search" style={{ width: '180px' }} />
          <Button className="search-btn" onClick={() => {}}>
            <Search size={15} style={iconStyle} />
          </Button> */}

          <Button
            className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
            onClick={() => { }}
            style={{ marginRight: '-1px', width: '148px', height: '32px' }}
          >
            <Plus size={13.4} style={iconStyle} />
            New document
          </Button>
        </>
      </PageTitle>
      <section style={{ padding: '10px 15px' }}>
        <RippleTable
          title={''}
          column={decorator}
          rowAction={() => modalRef.current.props.toggle()}
          handleView={row => { }}
          showRefresh={false}
          fetchService={documentsTypes}
          fullpage={true}
          striped={true}
        />
      </section>
    </main>
  );
}

export default DocumentTypes;
