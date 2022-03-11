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

function CreateModel() {
  return (
    <main>
      <PageTitle
        title={
          <span>
            Vehicles / Model / <b>Create</b>
          </span>
        }
      ></PageTitle>
      <section>
        <Card className="paddingNone">
          <div className="card-padded-title">
            <h3>Add new model</h3>
          </div>
          <hr style={{ background: colorScheme.gray, width: '150px', marginLeft: '11px' }} />
          <hr style={customHrStyle} />
          <div className="card-content">
            <div className="row">
              <div className="col-sm-12 col-lg-12">
                <div className="row">
                  <div className="col-4">
                    <div className="form-group">
                      <h4>Brand</h4>
                      <select>
                        <option>Audi</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="form-group">
                      <h4>Model</h4>
                      <Input placeholder="" className="modal-x-input" />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="form-group">
                      <h4>Year</h4>
                      <select>
                        <option>2020</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="form-group">
                      <h4>Type</h4>
                      <select>
                        <option>SUV</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-4">
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
              <div className="col-sm-12 col-lg-3  offset-lg-6" style={customColStyle}>
                <Button className="btn-block center-container-btn btn-success">Save model</Button>
                <Height val={13} className="show-on-med-and-down" />
              </div>
              <div className="col-sm-12 col-lg-3" style={customColStyle}>
                <Button className="btn-block center-container-btn danger-outline-btn">
                  Cancel
                </Button>
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

export default CreateModel;
