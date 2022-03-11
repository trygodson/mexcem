import React, { useRef, useState, useEffect } from 'react';
import PageTitle from '../../../../shared/components/pagetitle/pagetitle';
import Button from '../../../../shared/components/button/button';
import { colorScheme } from '../../../../default';
import Card from '../../../../shared/components/card/card';
import CustomSwitch from '../../../../shared/components/customswitch/customswitch';
import Height from '../../../../shared/components/height/height';

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

function DriverEditVehicle() {
  const [openModal, setOpenModal] = useState(false);

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span>
            Vehicles <b>/ Edit</b>
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
      <div className="row">
        <section className="col-8">
          <Card className="paddingNone" style={customCardStyle}>
            <div className="card-padded-title multiple">
              <h3 className="hoverPointer">Modify vehicle</h3>
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
                    <h4>Brand</h4>
                    <select>
                      <option>Audi</option>
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <h4>Model</h4>
                    <select>
                      <option>R8 -- 2010</option>
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <h4>Color</h4>
                    <select>
                      <option>Blue</option>
                    </select>
                  </div>
                </div>
                <div className="col-6">
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
                <div className="col-6">
                  <div className="form-group">
                    <h4>Plate model</h4>
                    <select>
                      <option>12345sx</option>
                    </select>
                  </div>
                </div>
              </div>
              <Height val={8} />
              <div></div>
              <div
                className="dflex  alc"
                style={{ width: '60%', paddingLeft: ' 20px ' }}
              >
                <div className="dflex jcb alc" style={{ marginRight: '20px' }}>
                  <span style={{ marginRight: '10px', fontSize: '13px' }}>
                    Status
                  </span>
                  <CustomSwitch defaultChecked={false} />
                </div>
                <div className="dflex jcb alc">
                  <span style={{ marginRight: '10px', fontSize: '13px' }}>
                    Make as default
                  </span>
                  <CustomSwitch defaultChecked={false} />
                </div>
              </div>
              <Height val={25} />
              <div className="row">
                <div
                  className="col-sm-12 col-lg-3 offset-lg-6"
                  style={customColStyle}
                >
                  <Button className="btn-block center-container-btn btn-success">
                    Update vehicle
                  </Button>
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
        </section>
      </div>
    </main>
  );
}

export default DriverEditVehicle;
