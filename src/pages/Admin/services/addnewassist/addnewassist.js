import React from 'react';
import Card from '../../../../shared/components/card/card';
import CustomText from '../../../../shared/components/customtext/customtext';
import Height from '../../../../shared/components/height/height';
import Input from '../../../../shared/components/input/input';
import PageTitle from '../../../../shared/components/pagetitle/pagetitle';
import { colorScheme } from '../../../../default';
import { Image } from 'react-bootstrap-icons';
import Button from '../../../../shared/components/button/button';
import './addnewassist.scss';
import MultiSelect from '../../../../shared/components/multipleSelect/multiselect';

const customColStyle = {
  paddingLeft: '9.5px',
  paddingRight: '9.5Spx',
};

const customHrStyle = {
  background: colorScheme.border2,
};

const userOptions = [
  { value: '1', label: 'Michael' },
  { value: '2', label: 'John' },
  { value: '3', label: 'Steven' },
];

function AddNewAssist() {
  return (
    <main>
      <PageTitle
        title={
          <span>
            Services <b> / Create</b>
          </span>
        }
      ></PageTitle>
      <section>
        <Card className="paddingNone">
          <div className="card-padded-title">
            <h3>Add a new assist</h3>
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
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <h4>Name</h4>
                      <Input
                        className="modal-x-input"
                        style={{ marginTop: '0px' }}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <h4>Category</h4>
                      <select>
                        <option>Tire</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <div className="form-group">
                        <h4>Tools</h4>
                        <MultiSelect options={userOptions} />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-6" style={{ padding: '0 5px 0 0' }}>
                        <div className="form-group">
                          <h4>Activation</h4>
                          <select>
                            <option>Admin</option>
                          </select>{' '}
                        </div>
                      </div>
                      <div className="col-6" style={{ padding: '0 0 0 5px' }}>
                        <div className="form-group">
                          <h4>Status</h4>
                          <select>
                            <option>Active</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6" style={{ padding: '0 0 0 15px' }}>
                    <div className="row">
                      <div className="col-6" style={{ padding: '0 5px 0 0' }}>
                        <div className="form-group">
                          <h4>Type</h4>
                          <select>
                            <option>Primary</option>
                          </select>{' '}
                        </div>
                      </div>
                      <div className="col-6" style={{ padding: '0 0 0 5px' }}>
                        <div className="form-group">
                          <h4>Parent category</h4>
                          <select>
                            <option>None</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-6" style={{ padding: '0 5px 0 0' }}>
                        <div className="form-group">
                          <h4>Requires</h4>
                          <select>
                            <option>Driver</option>
                          </select>{' '}
                        </div>
                      </div>
                      <div className="col-6" style={{ padding: '0 0px 0 5px' }}>
                        <div className="form-group">
                          <h4>Price</h4>
                          <Input
                            className="modal-x-input"
                            style={{ marginTop: '0px', width: '100%' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 ">
                    <div className="form-group">
                      <h4>Vendors</h4>
                      <select>
                        <option>Active</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <h4>Video url</h4>
                      <Input
                        className="modal-x-input"
                        style={{ marginTop: '0px' }}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <h4>Status</h4>
                      <select>
                        <option>Active</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <h4>Note</h4>
                      <textarea className="modal-x-textarea"></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div className="uploader col-sm-12 col-lg-4 dflex flex-columm jcb">
                <div className="form-group">
                  <CustomText type="h4" size={14}>
                    Upload icon
                  </CustomText>

                  <div className="upload-space dflex jcc alc">
                    <div className="upload-space-text dflex flex-columm jcc alc">
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
                  <div className="col-sm-12 col-lg-6" style={null}>
                    <Button className="btn-block center-container-btn btn-success">
                      Save product
                    </Button>
                    <Height val={13} className="show-on-med-and-down" />
                  </div>
                  <div className="col-sm-12 col-lg-6" style={null}>
                    <Button className="btn-block center-container-btn danger-outline-btn">
                      Cancel
                    </Button>
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

export default AddNewAssist;
