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
  QuestionCircle,
} from 'react-bootstrap-icons';
import { vendors } from '../../../../shared/hooks/api/testService.js';
import RippleTable from '../../../../shared/components/tables/table/TableCard';
import CustomText from '../../../../shared/components/customtext/customtext';
import { rootApp } from '../../../../routes';
import { colorScheme } from '../../../../default';
import Card from '../../../../shared/components/card/card';
import Height from '../../../../shared/components/height/height';
import ProfileImage from '../../../../shared/components/profileimage/profileimage';
import Input from '../../../../shared/components/input/input';

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

function Submissions() {
  const modalRef = useRef();

  const [table, setTable] = useState('all_vendors');

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span>
            Services / Submissions / <b>Stephen Jackson</b>
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

          {/* <input placeholder="Search" className="search" style={{ width: '180px' }} />
          <Button className="search-btn" onClick={() => {}}>
            <Search size={15} style={iconStyle} />
          </Button> */}

          <Button
            className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
            onClick={() => { }}
          >
            <QuestionCircle size={12.5} />
            Query
          </Button>
        </>
      </PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3 className="hoverPointer" onClick={() => setTable('all_vehicles')}>
              Verification
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
          <Height val={10} />
          <div className="card-info" style={{ padding: '18px' }}>
            <div className="row">
              <div className="col-6">
                <div className="row">
                  <div className="col-6">
                    <ProfileImage style={{ width: '100%' }} />

                    <Height val={45} />
                  </div>
                  <div className="col-6">
                    <h4>Stephen Jackson</h4>
                    <p>Full name</p>
                    <br />
                    <h4>+1 415552671</h4>
                    <p>Phone</p>
                    <br />
                    <h4>sj@auxcar.co</h4>
                    <p>Email</p>
                    <br />
                    <h4>10/05/2021 05:15PM</h4>
                    <p>Date & Time</p>
                  </div>
                  <div className='col-12'>
                    <b>View upload</b>
                    <br />
                    <ProfileImage style={{ height: '160px' }} />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <h3>Assist</h3>
                  <select>
                    <option>Active</option>
                  </select>
                </div>
                <div className="form-group">
                  <h3>Status</h3>
                  <select>
                    <option>Active</option>
                  </select>
                </div>
                <div className="form-group">
                  <h3>Plate number</h3>
                  <Input className="modal-x-input" />
                </div>
                <div className="form-group">
                  <h3>Status</h3>
                  <textarea className="modal-x-textarea"></textarea>
                </div>
                <div className="row">
                  <div className="col-6 " style={{ padding: '0 15px 0 0' }}>
                    <Button className="btn-block center-container-btn danger-outline-btn">
                      Cancel
                    </Button>
                  </div>
                  <div className="col-6 " style={{ padding: '0 0 0 15px' }}>
                    <Button className="btn-block center-container-btn btn-success">Update</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Height val={10} />
        </Card>
      </section>
    </main>
  );
}

export default Submissions;
