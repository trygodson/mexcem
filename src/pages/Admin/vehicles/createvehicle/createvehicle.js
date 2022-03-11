import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../../../shared/components/pagetitle/pagetitle';
import Button from '../../../../shared/components/button/button';
import { Archive, Trash, Search, Pencil, XCircle, PersonPlus, Plus } from 'react-bootstrap-icons';
import { vendors } from '../../../../shared/hooks/api/testService.js';
import RippleTable from '../../../../shared/components/tables/table/TableCard';
import CustomText from '../../../../shared/components/customtext/customtext';
import { rootApp } from '../../../../routes';
import { colorScheme } from '../../../../default';
import Card from '../../../../shared/components/card/card';
import CustomSwitch from '../../../../shared/components/customswitch/customswitch';
import Ratings from '../../../../shared/components/ratings/ratings';
import Input from '../../../../shared/components/input/input';
import TabCard from '../../../../shared/components/smallcards/usercard/tabcard/tabcard';
import Height from '../../../../shared/components/height/height';
import Modal from '../../../../shared/components/modals';

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

const customColStyle = {
  paddingLeft: '9.5px',
  paddingRight: '9.5Spx',
};

function CreateVehicle() {
  const modalRef = useRef();

  const [table, setTable] = useState('all_vendors');
  const [openModal, setOpenModal] = useState(false);

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span>
            Vehicles <b>/ Create</b>
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
          {/* 
          <input placeholder="Search" className="search" style={{ width: '180px' }} />
          <Button className="search-btn" onClick={() => {}}>
            <Search size={15} style={iconStyle} />
          </Button>

          <Button
            className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
            onClick={() => {}}
          >
            <Plus size={12.5} />
            New vendor
          </Button> */}
        </>
      </PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3 className="hoverPointer" onClick={() => setTable('all_vehicles')}>
              Add new vehicle
            </h3>
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
          <div style={{ padding: '20px' }}>
            <div className="row">
              <div className="col-4">
                <div className="form-group">
                  <h4>Brand</h4>
                  <select>
                    <option>Audi</option>
                  </select>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <h4>Model</h4>
                  <select>
                    <option>R8 -- 2010</option>
                  </select>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <h4>Plate model</h4>
                  <select>
                    <option>12345sx</option>
                  </select>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <h4>Color</h4>
                  <select>
                    <option>Blue</option>
                  </select>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <h4>Tire size</h4>
                  <select>
                    <option>14 Inch</option>
                  </select>
                  <p>
                    <small>How do I check my tire size?</small>
                  </p>
                </div>
              </div>

              <div className="col-4">
                <div className="form-group">
                  <h4>User</h4>
                  <select>
                    <option>Stephen Jackson - Driver</option>
                  </select>
                </div>
              </div>
            </div>
            <TabCard title="Driver photo" handler={() => setOpenModal(true)} />
            <br />
            <TabCard title="Driver photo" />
            <br />
            <TabCard title="Driver photo" />
            <Height val={15} />
            <b>Status</b> <CustomSwitch defaultChecked={false} />
            &nbsp;&nbsp;<b>Make as default</b> <CustomSwitch defaultChecked={false} />
            <Height val={15} />
            <div className="row">
              <div className="col-sm-12 col-lg-3 offset-lg-6" style={customColStyle}>
                <Button className="btn-block center-container-btn btn-success">Save vehicle</Button>
                <Height val={13} className="show-on-med-and-down" />
              </div>
              <div className="col-sm-12 col-lg-3" style={customColStyle}>
                <Button className="btn-block center-container-btn danger-outline-btn">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {openModal && (
          <Modal
            customModalBodyClass="paddingNone"
            width={680}
            closeModal={() => setOpenModal(false)}
          >
            <div className="modal-header">
              <CustomText type="h3" size={15}>
                Upload document
              </CustomText>
              <Height val={20} />
            </div>
            <Height val={8} />
            <div className="modal-sub-body bootstrap-wrapper">
              <div className="row">
                <div className="col-8">
                  <div className="form-group">
                    <h4>Name</h4>
                    <Input className="modal-x-input" type="file" />
                  </div>
                </div>
                <div className="col-8">
                  <div className="form-group">
                    <h4>ID No</h4>
                    <Input className="modal-x-input" />
                  </div>
                </div>
              </div>

              <Height val={16} />
              <div className="row">
                <div className="col-6 ">
                  <Button className="btn-block center-container-btn danger-outline-btn">
                    Cancel
                  </Button>
                </div>
                <div className="col-6 ">
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

export default CreateVehicle;
