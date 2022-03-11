import React from 'react';
import Card from '../../../shared/components/card/card';
import CustomText from '../../../shared/components/customtext/customtext';
import Height from '../../../shared/components/height/height';
import Input from '../../../shared/components/input/input';
import PageTitle from '../../../shared/components/pagetitle/pagetitle';
import './adduser.scss';
import { colorScheme } from '../../../default';
import { Image } from 'react-bootstrap-icons';
import Button from '../../../shared/components/button/button';

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

function AddUser() {
  return (
    <main>
      <PageTitle
        title={
          <span>
            User <b>/ Create</b>
          </span>
        }
      ></PageTitle>
      <section>
        <Card className="paddingNone">
          <div className="card-padded-title">
            <h3>Add a new user</h3>
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
              <div className="col-sm-12 col-lg-4">
                <div className="row">
                  <div className="col-6" style={customColStyle}>
                    <div className="form-group">
                      <CustomText type="h4" size={14}>
                        First name
                      </CustomText>
                      <Height val={8} />
                      <Input
                        placeholder="First name"
                        className="fullWidth input-padding-left"
                        style={customInputStyle}
                      />
                    </div>
                  </div>
                  <div className="col-6" style={customColStyle}>
                    <div className="form-group">
                      <CustomText type="h4" size={14}>
                        Last name
                      </CustomText>
                      <Height val={8} />
                      <Input
                        placeholder="Last name"
                        className="fullWidth input-padding-left"
                        style={customInputStyle}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12" style={customColStyle}>
                    <div className="form-group">
                      <CustomText type="h4" size={14}>
                        Phone
                      </CustomText>
                      <Height val={8} />
                      <Input
                        placeholder="Phone"
                        className="fullWidth input-padding-left"
                        style={customInputStyle}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12" style={customColStyle}>
                    <div className="form-group">
                      <CustomText type="h4" size={14}>
                        Email
                      </CustomText>
                      <Height val={8} />
                      <Input
                        placeholder="Email"
                        className="fullWidth input-padding-left"
                        style={customInputStyle}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-4">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <CustomText type="h4" size={14}>
                        User type
                      </CustomText>
                      <Height val={8} />
                      <select name="user_type" className="fullWidth ">
                        <option>Customer</option>
                        <option>Driver</option>
                        <option>Manager</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <CustomText type="h4" size={14}>
                        Status
                      </CustomText>
                      <Height val={8} />
                      <select name="user_type" className="fullWidth ">
                        <option>Active</option>
                        <option>Disabled</option>
                        <option>Inactive</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-4 uploader">
                <div className="form-group">
                  <CustomText type="h4" size={14}>
                    Upload icon
                  </CustomText>
                  <div
                    className="upload-space"
                    style={{ position: 'relative', cursor: 'pointer' }}
                  >
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
              </div>
            </div>
            <Height val={130} className="hide-on-med-and-down" />
            <Height val={20} className="show-on-med-and-down" />
            <div className="row">
              <div
                className="col-sm-12 col-lg-3 offset-lg-6"
                style={customColStyle}
              >
                <Button className="btn-block center-container-btn btn-success">
                  Save user
                </Button>
                <Height val={13} className="show-on-med-and-down" />
              </div>
              <div className="col-sm-12 col-lg-3" style={customColStyle}>
                <Button className="btn-block center-container-btn danger-outline-btn">
                  Cancel
                </Button>
              </div>
            </div>
            <Height val={16} />
          </div>
        </Card>
      </section>
    </main>
  );
}

export default AddUser;
