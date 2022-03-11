import Height from "../../../shared/components/height/height";
import PageTitle from "../../../shared/components/pagetitle/pagetitle";
import ProfileImage from "../../../shared/components/profileimage/profileimage";
import Input from '../../../shared/components/input/input'

import './customerProfile.scss';
import CustomSwitch from "../../../shared/components/customswitch/customswitch";


const CustomerProfile = () => {
  return (
    <main>
      <PageTitle
        title={
          <span>
            <b>Profile</b>
          </span>
        }
      >
      </PageTitle>
      <Height val={10} />

      <div className="row">
        <div className="col-lg-5">
          <div className="profile">
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
                    <Input className="customer-input" placeholder="" type="phone" />
                  </div>
                </div>

              </div>
              <div className="row">
                <div className="col-lg-6 inp">
                  <div className="input-wrapper">
                    <label>Date of Birth</label>
                    <Input className="customer-input" placeholder="" type="date" />
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
                  <select className="select-first" style={{ width: '220px', marginRight: '10px' }}>
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
                        <p>Auxcar will send promotional infomation related to marketing activities via email from time to time</p>
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
}

export default CustomerProfile;