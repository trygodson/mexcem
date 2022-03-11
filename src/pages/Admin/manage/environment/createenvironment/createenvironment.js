import React from 'react';
import Card from '../../../../../shared/components/card/card';
import CustomText from '../../../../../shared/components/customtext/customtext';
import Height from '../../../../../shared/components/height/height';
import Input from '../../../../../shared/components/input/input';
import PageTitle from '../../../../../shared/components/pagetitle/pagetitle';
import { colorScheme } from '../../../../../default';
import { Image } from 'react-bootstrap-icons';
import Button from '../../../../../shared/components/button/button';
import CustomSwitch from '../../../../../shared/components/customswitch/customswitch';

const customColStyle = {
  paddingLeft: '9.5px',
  paddingRight: '9.5Spx',
};

const customInputStyle = {
  border: `1px solid ${colorScheme.border2}`,
};

const customHrStyle = {
  background: colorScheme.border2,
};

function CreateEnvironment() {
  return (
    <main>
      <PageTitle
        title={
          <span>
            <b>Environment</b>
          </span>
        }
      ></PageTitle>
      <section>
        <Card className="paddingNone">
          <div className="card-padded-title">
            <h3>Create new environment</h3>
          </div>
          <hr style={{ background: colorScheme.gray, width: '150px', marginLeft: '11px' }} />
          <hr style={customHrStyle} />
          <div className="card-content">
            <div className="row">
              <div className="col-sm-12 col-lg-8">
                <div className="form-group">
                  <h4>Title</h4>
                  <input className="modal-x-input" />
                </div>
                <div className="form-group">
                  <h4>User type</h4>
                  <select>
                    <option>Select user type</option>
                  </select>
                </div>
                <div className="form-group">
                  <h4>Pop up (Alert)</h4>
                  <select>
                    <option>Select your pop up</option>
                  </select>
                </div>

                <div className="form-group">
                  <h4>Description</h4>
                  <textarea className="modal-x-textarea"></textarea>
                </div>

                <div className="row">
                  <div className="col-12">
                    Status <CustomSwitch defaultChecked={false} />
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12 col-lg-3  offset-lg-6" style={customColStyle}>
                    <Button className="btn-block center-container-btn danger-outline-btn">
                      Cancel
                    </Button>
                  </div>
                  <div className="col-sm-12 col-lg-3" style={customColStyle}>
                    <Button className="btn-block center-container-btn btn-success">Submit</Button>
                    <Height val={13} className="show-on-med-and-down" />
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-lg-4">
                {/* <div className="form-group">
                  <CustomText type="h4" size={14}>
                    Upload icon
                  </CustomText>
                  <div className="upload-space">
                    <div className="upload-space-text">
                      <Image size={50} color={colorScheme.border2} />
                      <h4>Click here to upload your image</h4>
                      <p>Supports: JPG, PNG, JPEG200</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <Height val={130} className="hide-on-med-and-down" />
            <Height val={20} className="show-on-med-and-down" />
            <Height val={16} />
          </div>
        </Card>
      </section>
    </main>
  );
}

export default CreateEnvironment;
