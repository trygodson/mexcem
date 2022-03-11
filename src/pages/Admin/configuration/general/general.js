import React from 'react';
import Card from '../../../../shared/components/card/card';
import CustomText from '../../../../shared/components/customtext/customtext';
import Height from '../../../../shared/components/height/height';
import Input from '../../../../shared/components/input/input';
import PageTitle from '../../../../shared/components/pagetitle/pagetitle';
import { colorScheme } from '../../../../default';
import { Image, Percent } from 'react-bootstrap-icons';
import Button from '../../../../shared/components/button/button';
import IconInput from '../../../../shared/components/iconinput/iconinput';
import CustomSwitch from '../../../../shared/components/customswitch/customswitch';

const customColStyle = {
  paddingLeft: '9.5px',
  paddingRight: '9.5Spx',
};

const customHrStyle = {
  background: colorScheme.border2,
};

function General() {
  return (
    <main>
      <PageTitle
        title={
          <span>
            Configuration / <b>General</b>
          </span>
        }
      ></PageTitle>
      <section>
        <Card className="paddingNone">
          <div className="card-padded-title">
            <h3>Service Config</h3>
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
              <div className="col-sm-12 col-lg-9">
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <h4>Radius to show Car on Map to passenger in Mi</h4>
                      <Input className="modal-x-input" />
                      <p>
                        <small>
                          This will show all the near by assist to driver while
                          on home screen within the radius of defined value.
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <div className="form-group">
                        <h4>Android Customer App Version</h4>
                        <Input className="modal-x-input" />
                        <p>
                          <small>
                            The Latest version code for the build that is
                            currently live on Playstore. It should be updated on
                            each build upload on store.
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <h4>Android Driver App Version</h4>
                      <Input className="modal-x-input" />
                      <p>
                        <small>
                          The Latest version code for the build that is
                          currently live on Playstore. It should be updated on
                          each build upload on store.
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <div className="form-group">
                        <h4>iOS Customer App Version</h4>
                        <Input className="modal-x-input" />
                        <p>
                          <small>
                            The Latest version code for the build that is
                            currently live on Apple store. It should be updated
                            on each build upload on store.
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <h4>iOS Driver App Version</h4>
                      <Input className="modal-x-input" />
                      <p>
                        <small>
                          The Latest version code for the build that is
                          currently live on Apple store. It should be updated on
                          each build upload on store.
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <div className="form-group">
                        <h4>Maximum Request Routed to Number of Driver</h4>
                        <Input className="modal-x-input" />
                        <p>
                          <small>
                            To How many drivers, request will be routed within
                            radius, if it is rejected
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <h4>Max Login/OTP attempt</h4>
                      <Input className="modal-x-input" />
                      <p>
                        <small>
                          Maximum attempt permitted for login and OTP
                          verification. On max attempt exceed, User will be
                          blocked for an hour
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <div className="form-group">
                        <h4>OTP Resend Timeout in Seconds</h4>
                        <Input className="modal-x-input" />
                        <p>
                          <small>OTP Resend Timeout in Seconds</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <h4>Distance Unit</h4>
                      <select>
                        <option>KM</option>
                      </select>
                      <p>
                        <small>
                          The unit in which distance is calculated in app
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <div className="form-group">
                        <h4>Driver Acceptance Timeout</h4>
                        <Input className="modal-x-input" />
                        <p>
                          <small>
                            How long the driver has to accept a request in
                            Seconds
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <h4>Distance (free)</h4>
                      <Input className="modal-x-input" />
                      <p>
                        <small>
                          The total distance free before app changes for
                          distance
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <div className="form-group">
                        <h4>Driver / $</h4>
                        <Input className="modal-x-input" />
                        <p>
                          <small>Price per distance</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <h4>Waiting Time Out</h4>
                      <Input className="modal-x-input" />
                      <p>
                        <small>
                          Time driver is to wait at a location incase customer
                          isn't found
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <div className="form-group">
                        <h4>Assist Cancellation Time</h4>
                        <Input className="modal-x-input" />
                        <p>
                          <small>
                            How long it takes cancellation to be effective
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <h4>Assist Cancellation Charges ($)</h4>
                      <Input className="modal-x-input" />
                      <p>
                        <small>
                          How much user will be charged for cancellation
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <div className="form-group">
                        <h4>Emergency Number</h4>
                        <Input className="modal-x-input" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <h4>Contact Email</h4>
                      <Input className="modal-x-input" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <div className="form-group">
                        <h4>Contact Number</h4>
                        <Input className="modal-x-input" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <h4>Support Email</h4>
                      <Input className="modal-x-input" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <div className="form-group">
                        <h4>Copyright Number</h4>
                        <Input className="modal-x-input" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <h4>Chat</h4>
                      <select>
                        <option>Enable</option>
                      </select>
                      <p>
                        <small>
                          When enabled user will be able to chat via contact
                          option
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <div className="form-group">
                        <h4>Social Login</h4>
                        <select>
                          <option>Enable</option>
                        </select>
                        <p>
                          <small>
                            When enabled user will be able sign with social
                            media
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <h4>Chat</h4>
                      <select>
                        <option>Enable</option>
                      </select>
                      <p>
                        <small>
                          When enabled user will be able to chat via contact
                          option
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <div className="form-group">
                        <h4>Social Login</h4>
                        <select>
                          <option>Enable</option>
                        </select>
                        <p>
                          <small>
                            When enabled user will be able sign with social
                            media
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <span className="right">
                        <CustomSwitch defaultChecked={false} />
                      </span>
                      <h4>Display Location Address</h4>

                      <p>
                        <small>Show location address on request screen</small>
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <div className="form-group">
                        <span className="right">
                          <CustomSwitch defaultChecked={false} />
                        </span>
                        <h4>Display Estimated Amount</h4>
                        <p>
                          <small>
                            Show estimated fare on Request screen to driver
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <span className="right">
                        <CustomSwitch defaultChecked={false} />
                      </span>
                      <h4>Android Customer App Force update</h4>

                      <p>
                        <small>
                          It will make sure app user update first the app with
                          latest version set for app, in order to access app.
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <div className="form-group">
                        <span className="right">
                          <CustomSwitch defaultChecked={false} />
                        </span>
                        <h4>Android Driver App Force update</h4>
                        <p>
                          <small>
                            It will make sure app user update first the app with
                            latest version set for app, in order to access app.
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <span className="right">
                        <CustomSwitch defaultChecked={false} />
                      </span>
                      <h4>iOS Customer App Force update</h4>

                      <p>
                        <small>
                          It will make sure app user update first the app with
                          latest version set for app, in order to access app.
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <div className="form-group">
                        <span className="right">
                          <CustomSwitch defaultChecked={false} />
                        </span>
                        <h4>iOS Customer App Force update</h4>
                        <p>
                          <small>
                            It will make sure app user update first the app with
                            latest version set for app, in order to access app.
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <span className="right">
                        <CustomSwitch defaultChecked={false} />
                      </span>
                      <h4>Generate Random OTP</h4>

                      <p>
                        <small>
                          Turning it ON will always generate 4 digit random OTP.
                          If it is OFF then it will be always 1234
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <div className="form-group">
                        <h4>Round amount with fraction</h4>
                        <Input className="modal-x-input" />
                        <p>
                          <small>
                            Round amount with how many number after fraction
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-lg-3">
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

export default General;
