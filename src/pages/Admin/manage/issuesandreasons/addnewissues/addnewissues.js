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

function AddNewIssues() {
  return (
    <main>
      <PageTitle
        title={
          <span>
            <b>Issues & reasons</b>
          </span>
        }
      >
        <Button className="dashboard-title-btn primary-dashboard-title-btn rightSpace">
          View all
        </Button>{' '}
      </PageTitle>
      <section>
        <Card className="paddingNone">
          <div className="card-padded-title">
            <h3>Add new</h3>
          </div>
          <hr style={{ background: colorScheme.gray, width: '150px', marginLeft: '11px' }} />
          <hr style={customHrStyle} />
          <div className="row">
            <div className="col-sm-12 col-lg-7">
              <div className="card-content">
                <div className="form-group">
                  <h4>User type</h4>
                  <select>
                    <option>Select user type</option>
                  </select>
                </div>
                <div className="form-group">
                  <h4>Assist status</h4>
                  <select>
                    <option>Select assist status</option>
                  </select>
                </div>
                <div className="form-group">
                  <h4>Assist status</h4>
                  <Input className="modal-x-input" type="text" />
                </div>
                <div className="form-group">
                  <h4>Description</h4>
                  <textarea className="modal-x-textarea"></textarea>
                </div>
                <div className="row">
                  <div className="col-6 ">
                    <Button className="btn-block center-container-btn danger-outline-btn">
                      Cancel
                    </Button>
                  </div>
                  <div className="col-6 ">
                    <Button className="btn-block center-container-btn btn-success">
                      Create Issues & Reasons
                    </Button>
                  </div>
                </div>
                <Height val={130} className="hide-on-med-and-down" />
                <Height val={20} className="show-on-med-and-down" />
                <Height val={16} />
              </div>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}

export default AddNewIssues;
