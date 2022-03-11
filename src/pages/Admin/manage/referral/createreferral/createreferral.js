import React, { useState } from 'react';
import Card from '../../../../../shared/components/card/card';
import Height from '../../../../../shared/components/height/height';
import Input from '../../../../../shared/components/input/input';
import PageTitle from '../../../../../shared/components/pagetitle/pagetitle';
import { colorScheme } from '../../../../../default';
import { CurrencyDollar } from 'react-bootstrap-icons';
import Button from '../../../../../shared/components/button/button';
import IconInput from '../../../../../shared/components/iconinput/iconinput';

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

function CreateReferral() {
  const [checked, setChecked] = useState({
    fromuser: false,
    touser: false,
    both: false,
    refer: false,
  });

  const changeRadio = e => {
    setChecked(() => {
      return {
        fromuser: false,
        touser: false,
        both: false,
        refer: false,
        [e.target.name]: [e.target.value],
      };
    });
  };
  return (
    <main>
      <PageTitle
        title={
          <span>
            <b>Manage / Referral / Create</b>
          </span>
        }
      ></PageTitle>
      <section>
        <Card className="paddingNone">
          <div className="card-padded-title">
            <h3>Create new referral program</h3>
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
                  <Input className="modal-x-input" />
                </div>
                <div className="row">
                  <div className="col-6 paddingRight">
                    <div className="form-group">
                      <Input className="modal-x-input" type="date" />
                    </div>
                  </div>
                  <div className="col-6 paddingLeft">
                    <div className="form-group">
                      <Input className="modal-x-input" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <h4>Referral reward users</h4>
                  <div className="users_bub">
                    <input
                      type="radio"
                      name="fromuser"
                      onChange={changeRadio}
                      checked={checked.fromuser}
                    />{' '}
                    <span>From user</span>
                  </div>
                  <div className="users_bub">
                    <input
                      type="radio"
                      name="touser"
                      onChange={changeRadio}
                      checked={checked.touser}
                    />{' '}
                    <span>To user</span>
                  </div>
                  <div className="users_bub">
                    <input
                      type="radio"
                      name="both"
                      onChange={changeRadio}
                      checked={checked.both}
                    />{' '}
                    <span>Both</span>
                  </div>
                </div>

                <div className="form-group">
                  <h4>Referral condition</h4>
                  <div className="users_bub">
                    <input
                      type="radio"
                      name="refer"
                      onChange={changeRadio}
                      checked={checked.refer}
                    />{' '}
                    <span>Refer</span>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-lg-6">
                <div className="form-group">
                  <h4>Referral for</h4>
                  <select>
                    <option>- Select referral for -</option>
                  </select>
                </div>

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

            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <h4>Refer from reward type</h4>
                  <select>
                    <option>Cash</option>
                  </select>
                </div>
              </div>

              <div className="col-6">
                <div className="form-group">
                  <h4>Referral to reward type</h4>
                  <select>
                    <option>Cash</option>
                  </select>
                </div>
              </div>
            </div>

            <Height val={10} />
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <h4>Refer from value</h4>
                  <IconInput
                    colored={true}
                    type="email"
                    placeholder="Enter Refer from value"
                    icon={CurrencyDollar}
                    iconSize={15.8}
                    customIconDivClass="popupIconDiv"
                    customInputClass="popupInput"
                    customIconClass="popupInputIcon"
                    customInputBorderClass="popupModalInputBorder"
                  />
                </div>
                <div className="form-group">
                  <h4>Terms & conditions</h4>
                  <textarea className="modal-x-textarea"></textarea>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <h4>Refer to value</h4>
                  {/* <Input className="modal-x-input" /> */}
                  <IconInput
                    colored={true}
                    type="email"
                    placeholder="Enter Refer from value"
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
            <Height val={10} />
            <div className="row">
              <div
                className="col-sm-12 col-lg-3 offset-lg-6"
                style={customColStyle}
              >
                <Button className="btn-block center-container-btn danger-outline-btn">
                  Cancel
                </Button>
                <Height val={13} className="show-on-med-and-down" />
              </div>
              <div className="col-sm-12 col-lg-3" style={customColStyle}>
                <Button className="btn-block center-container-btn btn-success">
                  Submit
                </Button>
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

export default CreateReferral;
