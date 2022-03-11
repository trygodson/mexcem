import Height from '../../../shared/components/height/height';
import PageTitle from '../../../shared/components/pagetitle/pagetitle';
import ProfileImage from '../../../shared/components/profileimage/profileimage';
import Input from '../../../shared/components/input/input';

import './customerProfile.scss';
import CustomSwitch from '../../../shared/components/customswitch/customswitch';
import { StarFill } from 'react-bootstrap-icons';

const DriverProfile = () => {
  return (
    <main>
      <PageTitle
        title={
          <span>
            <b>Profile</b>
          </span>
        }
      ></PageTitle>
      <Height val={10} />

      <div className="row">
        <div className="col-lg-5">
          <div className="profile" style={{ height: '410px' }}>
            <div className="image-wrapper">
              <ProfileImage width={150} className="round rounded-border" />
              <h5>Stephen Jackson</h5>
            </div>
            <div className="row boxes-wrapper">
              <div className="boxes success_span_text">
                <h5 className="success_span_text">1000</h5>
                <p className="success_span_text">Total assits</p>
              </div>
              <div className="boxes danger_span_text">
                <h5 className="danger_span_text">5</h5>
                <p className="danger_span_text">Vehicle</p>
              </div>
              <div className="boxes primary_span_text">
                <h5 className="primary_span_text">3.0</h5>
                <p className="primary_span_text">Years</p>
              </div>
            </div>
            <p className="badge">Your Badges</p>
            <div className="badge-wrapper dflex jcc">
              <div className="badge-inner dflex jcb alc">
                <div className="dflex flex-columm jcc alc">
                  <StarFill size={22} color="black" />
                  <span style={{ fontSize: '12px' }}>auxCar Pro</span>
                </div>
                <div className="dflex flex-columm jcc alc">
                  <StarFill size={22} color="blue" />
                  <span style={{ fontSize: '12px' }}>auxCar Fleet</span>
                </div>
              </div>
            </div>
          </div>

          {/*The switches area */}
          <div className="profile-switch-option dflex jcb alc">
            <div className="option-detail">
              <p>Auto Start</p>
              <span>automatically navigate to locations</span>
            </div>
            <div>
              <CustomSwitch defaultChecked={false} />
            </div>
          </div>
          <div className="profile-switch-option dflex jcb alc">
            <div className="option-detail">
              <p>Auto Accept</p>
              <span>automatically accept orders</span>
            </div>
            <div>
              <CustomSwitch defaultChecked={false} />
            </div>
          </div>
          <div className="profile-switch-option dflex jcb alc">
            <div className="option-detail">
              <p>Map Dark mode</p>
              <span>save energy consumption</span>
            </div>
            <div>
              <CustomSwitch defaultChecked={false} />
            </div>
          </div>
          <div className="profile-switch-option dflex jcb alc">
            <div className="option-detail">
              <p>Real time traffic</p>
              <span>get update on road conjestion</span>
            </div>
            <div>
              <CustomSwitch defaultChecked={false} />
            </div>
          </div>
          <div className="profile-switch-option dflex jcb alc">
            <div className="option-detail">
              <p>Accept high risk assist</p>
              <span>
                automatically accept high risk assist that are in high risk
                environment e.g High way
              </span>
            </div>
            <div>
              <CustomSwitch defaultChecked={false} />
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="profile-detail-wrapper">
            <div className="top-holder">
              <h4>Details</h4>
            </div>
            <div className="fields-wrapper">
              <div className="row">
                <div className="col-lg-6 inp">
                  <div className="input-wrapper">
                    <label>First name</label>
                    <Input className="customer-input" placeholder="" />
                  </div>
                </div>
                <div className="col-lg-6 inp">
                  <div className="input-wrapper">
                    <label>Last name</label>
                    <Input className="customer-input" placeholder="" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 inp">
                  <div className="input-wrapper">
                    <label>Email address</label>
                    <Input className="customer-input" placeholder="" />
                  </div>
                </div>
                <div className="col-lg-6 inp">
                  <div className="input-wrapper">
                    <label>Phone</label>
                    <Input
                      className="customer-input"
                      placeholder=""
                      type="phone"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 inp">
                  <div className="input-wrapper">
                    <label>Date of Birth</label>
                    <Input
                      className="customer-input"
                      placeholder=""
                      type="date"
                    />
                  </div>
                </div>
              </div>
              <div className="row pref">
                <h4>Preferences</h4>
                <h5>Language</h5>
                <p>This will affect Language setting of email and app push</p>
              </div>
              <div className="row">
                <div className="col-lg-6 inp">
                  <select
                    className="select-first"
                    style={{ width: '220px', marginRight: '10px' }}
                  >
                    <option value="active">-Select your language-</option>
                    <option value="processing">-English-</option>
                    <option value="disabled">-French-</option>
                    <option value="disabled">-Spanish-</option>
                  </select>
                </div>
                <div className="col-lg-6 inp">
                  <div className="input-wrapper">
                    <div className="communication">
                      <div>
                        <h5>Communication</h5>
                        <p>
                          Auxcar will send promotional infomation related to
                          marketing activities via email from time to time
                        </p>
                      </div>
                      <CustomSwitch defaultChecked={false} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="profile-submit-button">Update</button>
        </div>
      </div>
    </main>
  );
};

export default DriverProfile;
