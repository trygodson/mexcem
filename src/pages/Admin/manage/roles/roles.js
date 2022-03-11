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
  Sliders,
  Plus,
} from 'react-bootstrap-icons';
import {
  driverSettlementsPayOut,
  driverSettlementsPayIn,
  driverSettlementsProcessing,
  manageRoles,
} from '../../../../shared/hooks/api/testService.js';
import RippleTable from '../../../../shared/components/tables/table/TableCard';
import CustomText from '../../../../shared/components/customtext/customtext';
import { rootApp } from '../../../../routes';
import { colorScheme } from '../../../../default';
import Card from '../../../../shared/components/card/card';
import Modal from '../../../../shared/components/modals';
import Height from '../../../../shared/components/height/height';
import Input from '../../../../shared/components/input/input';
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

function Roles() {
  const modalRef = useRef();

  const [table, setTable] = useState('all_roles');
  const [loading, setLoading] = useState(true)
  const [tabledata, setTableData] = useState([])


  
  const [hideRolesTable, setHideRolesTable] = useState(false);
  
  const defaultHrMarginLeft = 8;
  const [hrMarginLeft, setHrMarginLeft] = useState(defaultHrMarginLeft);
  
  const [OpenAddRoleModal, setOpenAddRoleModal] = useState(false);
  
  useEffect(
    async () => {
      const data = await manageRoles()
      setTableData(data.data)
      setLoading(false)
    }, [tabledata]
  )
  // pay out
  const rolesDecorator = [
    {
      label: '#',
      accessor: 'hash',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Name',
      accessor: 'name',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Description',
      accessor: 'description',
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

          <span className="table-icon-wrapper before primary_span_text">
            <Sliders size={15.4} />
          </span>

          <span className="table-icon-wrapper danger_span_text">
            <XCircle size={15.4} />
          </span>
        </span>
      ),
    },
  ];

  const rolesTable = (
    <NewTable decorator={rolesDecorator} tableData={tabledata} isloading={loading} addcheckbox={true}/>
    );

  const renderTable = () => {
    return <>{rolesTable}</>;
  };

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span>
            Manage<b>/ Roles</b>
          </span>
        }
      >
        <>
          {/* <select className="select-first" style={{ width: '220px', marginRight: '10px' }}>
            <option value="active">-Status: Active-</option>
            <option value="processing">-Status: Active-</option>
            <option value="disabled">-Status: Disabled-</option>
          </select>

          <select className="select-first" style={{ width: '220px' }}>
            <option value="active">Filter by driver</option>
          </select> */}

          <input placeholder="Search" className="search" style={{ width: '180px' }} />
          <Button className="search-btn" onClick={() => {}}>
            <Search size={15} style={iconStyle} />
          </Button>

          <Button
            className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
            onClick={() => setOpenAddRoleModal(true)}
          >
            <Plus size={12.5} />
            New role
          </Button>
          {/* 
          <Button
            className="dashboard-title-btn success_span_text rightSpace"
            onClick={() => {}}
            style={{ marginRight: '-1px' }}
          >
            Pay
          </Button> */}
        </>
      </PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3 className="hoverPointer" onClick={() => setTable('all_roles')}>
              All roles
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
        </Card>
        {renderTable()}
        {OpenAddRoleModal && (
          <Modal
            customModalBodyClass="paddingNone"
            width={750}
            closeModal={() => setOpenAddRoleModal(false)}
          >
            <div className="modal-header">
              <CustomText type="h3" size={15}>
                User Feedback
              </CustomText>
              <Height val={20} />
            </div>
            <Height val={8} />
            <div className="modal-sub-body bootstrap-wrapper">
              <div className="form-group">
                <h3>Name</h3>
                <Input className="modal-x-input" />
              </div>

              <div className="form-group">
                <h3>Description</h3>
                <textarea className="form-input modal-x-textarea"></textarea>
              </div>

              <div className="row">
                <div className="col-6 " style={{ padding: '0 15px 0 0' }}>
                  <Button className="btn-block center-container-btn danger-outline-btn">
                    Cancel
                  </Button>
                </div>
                <div className="col-6 " style={{ padding: '0 0 0 15px' }}>
                  <Button className="btn-block center-container-btn btn-success">Submit</Button>
                </div>
              </div>
            </div>
            <Height val={18} />
          </Modal>
        )}
      </section>
    </main>
  );
}

export default Roles;
