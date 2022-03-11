import React from 'react';
import Card from '../../../../../shared/components/card/card';
import CustomText from '../../../../../shared/components/customtext/customtext';
import Height from '../../../../../shared/components/height/height';
import Input from '../../../../../shared/components/input/input';
import PageTitle from '../../../../../shared/components/pagetitle/pagetitle';
import { colorScheme } from '../../../../../default';
import { Image, Percent } from 'react-bootstrap-icons';
import Button from '../../../../../shared/components/button/button';
import IconInput from '../../../../../shared/components/iconinput/iconinput';

const customColStyle = {
  paddingLeft: '9.5px',
  paddingRight: '9.5Spx',
};

const customHrStyle = {
  background: colorScheme.border2,
};

function CreateTax() {
  return (
    <main>
      <PageTitle
        title={
          <span>
            Pricing / <b>Tax</b>
          </span>
        }
      ></PageTitle>
      <section>
        <Card className="paddingNone">
          <div className="card-padded-title">
            <h3>Create new tax</h3>
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
              <div className="col-sm-12 col-lg-8">
                <div className="form-group">
                  <h4>Tax name</h4>
                  <Input
                    placeholder="Cancellation & reason title"
                    className="modal-x-input"
                    style={{ marginTop: '0px' }}
                  />
                </div>
                <div className="row">
                  <div className="col-6" style={{ padding: '0 0 15px 0' }}>
                    <div className="form-group">
                      <h4>Country</h4>
                      <select>
                        <option>United states</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6" style={{ padding: '0 0 0 15px' }}>
                    <div className="form-group">
                      <h4>State</h4>
                      <select>
                        <option>Arizona</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6" style={{ padding: '0 0 15px 0' }}>
                    <div className="form-group">
                      <h4>Tax Amount</h4>
                      <IconInput
                        colored={true}
                        type="email"
                        placeholder=""
                        icon={Percent}
                        iconSize={15.8}
                        customIconDivClass="popupIconDiv"
                        customInputClass="popupInput"
                        customIconClass="popupInputIcon"
                        customInputBorderClass="popupModalInputBorder"
                      />
                    </div>
                  </div>
                  <div className="col-6" style={{ padding: '0 0 0 15px' }}>
                    <div className="form-group">
                      <h4>Status</h4>
                      <select>
                        <option>Active</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div
                    className="col-sm-12 col-lg-3 offset-lg-6"
                    style={customColStyle}
                  >
                    <Button className="btn-block center-container-btn danger-outline-btn">
                      Cancel
                    </Button>
                  </div>
                  <div className="col-sm-12 col-lg-3 " style={customColStyle}>
                    <Button className="btn-block center-container-btn btn-success">
                      Submit
                    </Button>
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

export default CreateTax;
