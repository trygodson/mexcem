import React from 'react';
import Card from '../../../../../shared/components/card/card';
import CustomText from '../../../../../shared/components/customtext/customtext';
import Height from '../../../../../shared/components/height/height';
import Input from '../../../../../shared/components/input/input';
import PageTitle from '../../../../../shared/components/pagetitle/pagetitle';
import { colorScheme } from '../../../../../default';
import { Image, RecordCircleFill } from 'react-bootstrap-icons';
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

function Edit() {
  return (
    <main>
      <PageTitle
        title={
          <span>
            Configuration / Notification Events / <b>Edit</b>
          </span>
        }
      ></PageTitle>
      <section>
        <Card className="paddingNone">
          <div className="card-padded-title">
            <h3>Trigger</h3>
          </div>
          <hr style={{ background: colorScheme.gray, width: '150px', marginLeft: '11px' }} />
          <hr style={customHrStyle} />
          <div className="card-content">
            <div className="row">
              <div className="col-sm-12 col-lg-12">
                <div className="row">
                  <div className="col-6" style={{ padding: '0 15px 0 0' }}>
                    <div className="form-group">
                      <h4>Name</h4>
                      <Input type="date" className="modal-x-input" />
                    </div>
                  </div>
                  <div className="col-6" style={{ padding: '0 0 0 15px' }}>
                    <div className="form-group">
                      <h4>Event</h4>
                      <Input type="date" className="modal-x-input" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6" style={{ padding: '0 15px 0 0' }}>
                    <div className="form-group">
                      <h4>Pre-event sending date</h4>
                      <Input type="date" className="modal-x-input" />
                    </div>
                  </div>
                  <div className="col-6" style={{ padding: '0 0 0 15px' }}>
                    <div className="form-group">
                      <h4>Pre-event sending time</h4>
                      <Input type="date" className="modal-x-input" />
                    </div>
                  </div>
                </div>
                <h4>Region</h4>

                <div className="row">
                  <div className="col-4 paddingRight">
                    <div className="form-group">
                      <select>
                        <option>Phoenix</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="form-group">
                      <select>
                        <option>Arizona</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-4 paddingLeft">
                    <div className="form-group">
                      <select>
                        <option>United states</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-2">
                    <div className="form-group">
                      <h4>
                        All Driver <CustomSwitch defaulChecked={false} />
                      </h4>
                      <p>Send message to all drivers</p>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="form-group">
                      <h4>
                        All Customer <CustomSwitch defaulChecked={false} />
                      </h4>
                      <p>Send message to all customer</p>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="form-group">
                      <h4>
                        On working days <CustomSwitch defaulChecked={false} />
                      </h4>
                      <p>Monday - Friday</p>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="form-group">
                      <h4>
                        Status <CustomSwitch defaulChecked={false} />
                      </h4>
                      <p>On/Off</p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <h4>Email</h4>
                      <textarea className="modal-x-textarea"></textarea>
                      <div className="form-group">
                        <h4>
                          Allow Email <CustomSwitch defaulChecked={false} />
                        </h4>
                        <p>On/Off</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <h4>SMS</h4>
                      <textarea className="modal-x-textarea"></textarea>
                      <div className="form-group">
                        <h4>
                          Allow SMS <CustomSwitch defaulChecked={false} />
                        </h4>
                        <p>On/Off</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Height val={20} />
                <div className="row">
                  <div className="col-sm-12 col-lg-3 offset-lg-6" style={customColStyle}>
                    <Button className="btn-block center-container-btn danger-outline-btn">
                      Delete
                    </Button>
                  </div>
                  <div className="col-sm-12 col-lg-3 " style={customColStyle}>
                    <Button className="btn-block center-container-btn btn-success">Update</Button>
                    <Height val={13} className="show-on-med-and-down" />
                  </div>
                </div>
              </div>
            </div>
            <Height val={130} className="hide-on-med-and-down" />
            <Height val={20} className="show-on-med-and-down" />
          </div>
        </Card>
      </section>
    </main>
  );
}

export default Edit;
