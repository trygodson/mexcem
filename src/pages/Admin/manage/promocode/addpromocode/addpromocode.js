import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../../../../shared/components/pagetitle/pagetitle';
import {
  RadioGroup,
  RadioButton,
  ReversedRadioButton,
} from 'react-radio-buttons';
import Button from '../../../../../shared/components/button/button';
import {
  Archive,
  Trash,
  Search,
  Pencil,
  XCircle,
  PersonPlus,
  Plus,
  Record,
  RecordCircleFill,
  CurrencyDollar,
} from 'react-bootstrap-icons';
import { colorScheme } from '../../../../../default';
import Card from '../../../../../shared/components/card/card';
import Input from '../../../../../shared/components/input/input';
import './addpromocode.scss';
import Height from '../../../../../shared/components/height/height';
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

function AddPromocode() {
  const modalRef = useRef();
  const [selectedUserType, setSelectedUserType] = useState();

  const handleChange = event => {
    setSelectedUserType(event.target.value);
  };
  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span>
            Manage / <b>Promo code</b>
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

          <Button
            className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
            onClick={() => {}}
          >
            <Plus size={12.5} />
            Add new
          </Button>
        </>
      </PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3 className="hoverPointer">Add new promo codes</h3>
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
              <div className="col-6">
                <div className="form-group">
                  <h4>Title</h4>
                  <Input
                    className="modal-x-input"
                    placeholder="Enter referral title"
                  />
                </div>
                <div className="row">
                  <div className="col-6" style={{ padding: '0 15px 0 0' }}>
                    <div className="form-group">
                      <h4>Code start date</h4>
                      <Input
                        className="modal-x-input"
                        placeholder="Enter referral title"
                        type="date"
                      />
                    </div>
                  </div>
                  <div className="col-6" style={{ padding: '0 0 0 15px' }}>
                    <div className="form-group">
                      <h4>Code start date</h4>
                      <Input
                        className="modal-x-input"
                        placeholder="Enter referral title"
                        type="date"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 paddingNone">
                    <div className="form-group">
                      <h4>Users</h4>
                      <div
                        className={`users_bub ${
                          selectedUserType === 'fromuser' && 'true-check'
                        }`}
                      >
                        <input
                          type="radio"
                          value="fromuser"
                          checked={selectedUserType === 'fromuser'}
                          onChange={handleChange}
                        />
                        <span>From user</span>
                      </div>
                      <div
                        className={`users_bub ${
                          selectedUserType === 'touser' && 'true-check'
                        }`}
                      >
                        <input
                          type="radio"
                          value="touser"
                          checked={selectedUserType === 'touser'}
                          onChange={handleChange}
                        />
                        <span>To user</span>
                      </div>
                      <div
                        className={`users_bub ${
                          selectedUserType === 'both' && 'true-check'
                        }`}
                      >
                        <input
                          type="radio"
                          value="both"
                          checked={selectedUserType === 'both'}
                          onChange={handleChange}
                        />
                        <span>Both</span>
                      </div>
                      <div
                        className={`users_bub ${
                          selectedUserType === 'newuser' && 'true-check'
                        }`}
                      >
                        <input
                          type="radio"
                          value="newuser"
                          checked={selectedUserType === 'newuser'}
                          onChange={handleChange}
                        />
                        <span>New users</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <h4>Code</h4>
                  <Input
                    className="modal-x-input"
                    placeholder="Enter referral title"
                  />
                </div>
                <div className="form-group">
                  <h4>Number of time</h4>
                  <Input
                    className="modal-x-input"
                    placeholder="Enter referral title"
                  />
                </div>
              </div>
            </div>
            <Height val={15} />
            <div className="row">
              <div className="col-12">
                <h4>Conditions</h4>
              </div>
            </div>
            <Height val={15} />
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <h4>Action</h4>
                  <select>
                    <option>Select vehicle type</option>
                  </select>
                </div>
                <div className="form-group">
                  <h4>Payment type</h4>
                  <select>
                    <option>Cash</option>
                  </select>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <h4>Min amount</h4>
                  <IconInput
                    colored={true}
                    type="email"
                    placeholder="Enter amount"
                    icon={CurrencyDollar}
                    iconSize={15.8}
                    customIconDivClass="popupIconDiv"
                    customInputClass="popupInput"
                    customIconClass="popupInputIcon"
                    customInputBorderClass="popupModalInputBorder"
                  />
                </div>
              </div>
            </div>
            <Height val={15} />
            <div className="row">
              <div className="col-12">
                <h4>Benefit</h4>
              </div>
            </div>
            <Height val={15} />
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <h4>Users</h4>
                  <div
                    className={`users_bub ${
                      selectedUserType === 'bboth' && 'true-check'
                    }`}
                  >
                    <input
                      type="radio"
                      value="bboth"
                      checked={selectedUserType === 'bboth'}
                      onChange={handleChange}
                    />
                    <span>Both</span>
                  </div>

                  <div
                    className={`users_bub ${
                      selectedUserType === 'nnew' && 'true-check'
                    }`}
                  >
                    <input
                      type="radio"
                      value="nnew"
                      checked={selectedUserType === 'nnew'}
                      onChange={handleChange}
                    />
                    <span>New users</span>
                  </div>
                </div>
                <div className="form-group">
                  <Input
                    placeholder="Enter amount / percentage"
                    className="modal-x-input"
                  />
                </div>
              </div>
              <div className="col-6">
                <Height val={75} />
                <div className="form-group">
                  <h4>Min amount</h4>
                  <IconInput
                    colored={true}
                    type="email"
                    placeholder="Enter amount"
                    icon={CurrencyDollar}
                    iconSize={15.8}
                    customIconDivClass="popupIconDiv"
                    customInputClass="popupInput"
                    customIconClass="popupInputIcon"
                    customInputBorderClass="popupModalInputBorder"
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}

export default AddPromocode;
