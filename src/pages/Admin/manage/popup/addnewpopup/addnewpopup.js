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
import './addnewpopup.scss';

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

function AddNewPopup() {
  return (
    <main>
      <PageTitle
        title={
          <span>
            <b>Popup</b>
          </span>
        }
      ></PageTitle>
      <section>
        <Card className="paddingNone">
          <div className="card-padded-title">
            <h3>Create new popup</h3>
          </div>
          <hr
            style={{
              background: colorScheme.gray,
              width: '150px',
              marginLeft: '11px',
            }}
          />
          <hr style={customHrStyle} />
          <div className="card-content">
            <div className="row">
              <div className="col-sm-12 col-lg-6">
                <div className="form-group">
                  <h4>Title</h4>
                  <Input
                    className="modal-x-input"
                    style={{ marginTop: '0px' }}
                  />
                </div>
                <div className="row">
                  <div className="col-6" style={{ padding: '0 15px 0 0' }}>
                    <div className="form-group">
                      <h4>User type</h4>
                      <select>
                        <option>Select user</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6" style={{ padding: '0 0 0 15px' }}>
                    <div className="form-group">
                      <h4>Status</h4>
                      <select>
                        <option>Select user</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6" style={{ padding: '0 15px 0 0' }}>
                    <div className="form-group">
                      <h4>Option A</h4>
                      <Input
                        className="modal-x-input"
                        style={{ marginTop: '0px' }}
                      />
                    </div>
                  </div>
                  <div className="col-6" style={{ padding: '0 0 0 15px' }}>
                    <div className="form-group">
                      <h4>Option B</h4>
                      <Input
                        className="modal-x-input"
                        style={{ marginTop: '0px' }}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <h4>Description</h4>
                  <textarea
                    className="modal-x-textarea"
                    style={{ height: '112px' }}
                  ></textarea>
                </div>
                <div className="form-group">
                  <h4>Extra note</h4>
                  <textarea className="modal-x-textarea"></textarea>
                </div>
              </div>

              <div className="col-sm-12 col-lg-6">
                <div className="form-group">
                  <div className="row">
                    <div className="col-6" style={{ padding: '0 15px 0 0' }}>
                      <div className="form-group">
                        <h4>Type</h4>
                        <select>
                          <option>Select pop up type</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-6" style={{ padding: '0 0 0 15px' }}>
                      <div className="form-group">
                        <h4>Attach to assist</h4>
                        <select>
                          <option>Tire change</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6" style={{ padding: '0 15px 0 0' }}>
                      <div className="form-group">
                        <h4>Event type</h4>
                        <select>
                          <option>one time</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-6" style={{ padding: '0 0 0 15px' }}>
                      <div className="form-group">
                        <h4>Color Code</h4>
                        <Input
                          className="modal-x-input"
                          style={{ marginTop: '0px' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group uploader">
                    <CustomText type="h4" size={14}>
                      Upload icon
                    </CustomText>
                    <div className="upload-space">
                      <div className="upload-space-text">
                        <input
                          type="file"
                          id="file"
                          accept="image/*, image/heic, image/heif"
                        />

                        <Image size={50} color={colorScheme.border2} />
                        <h4>Click here to upload your image</h4>
                        <p>Supports: JPG, PNG, JPEG200</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <b>Push notification</b>{' '}
                      <CustomSwitch defaultChecked={false} />
                      <p>On/Off</p>
                    </div>
                    <div className="col-6">
                      <b>Sound</b> <CustomSwitch defaultChecked={false} />
                      <p>On/Off</p>
                    </div>
                  </div>

                  <Height val={30} />

                  <div className="row">
                    <div className="col-6 " style={{ padding: '0 15px 0 0px' }}>
                      <Button className="btn-block center-container-btn btn-success">
                        Submit
                      </Button>
                    </div>
                    <div className="col-6 " style={{ padding: '0 0 0 15px ' }}>
                      <Button className="btn-block center-container-btn danger-outline-btn">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
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

export default AddNewPopup;
