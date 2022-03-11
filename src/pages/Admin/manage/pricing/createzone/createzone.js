import React from 'react';
import Card from '../../../../../shared/components/card/card';
import CustomText from '../../../../../shared/components/customtext/customtext';
import Height from '../../../../../shared/components/height/height';
import Input from '../../../../../shared/components/input/input';
import PageTitle from '../../../../../shared/components/pagetitle/pagetitle';
import { colorScheme } from '../../../../../default';
import { Image, Plus, X } from 'react-bootstrap-icons';
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

function CreateZone() {
  return (
    <main>
      <PageTitle
        title={
          <span>
            Pricing<b>/ Zone</b>
          </span>
        }
      ></PageTitle>
      <section>
        <Card className="paddingNone">
          <div className="card-padded-title">
            <h3>Create zone price</h3>
          </div>
          <hr style={{ background: colorScheme.gray, width: '150px', marginLeft: '11px' }} />
          <hr style={customHrStyle} />
          <div className="card-content">
            <div className="row">

              <div className="col-sm-12 col-lg-6">
                <h3>Basic Details</h3>
                <div style={{ padding: '20px 30px', border: '1px solid #ccc', borderRadius: '5px', marginTop: '20px', marginBottom: '40px' }}>
                  <div className="form-group">
                    <h5>Title</h5>
                    <input className="modal-x-input" />
                  </div>
                  <div className="form-group">
                    <h5>From zone</h5>
                    <select>
                      <option>From zone</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <h5>To zone</h5>
                    <select>
                      <option>To zone</option>
                    </select>
                  </div>

                  {/* <div className="form-group">
                  <h5>Description</h5>
                  <textarea className="modal-x-textarea"></textarea>
                </div> */}

                  {/* <div className="row">
                    <div className="col-12">
                      Status <CustomSwitch defaultChecked={false} />
                    </div>
                  </div> */}

                  {/* <div className="row">
                  <div className="col-sm-12 col-lg-3  offset-lg-6" style={customColStyle}>
                    <Button className="btn-block center-container-btn danger-outline-btn">
                      Cancel
                    </Button>
                  </div>
                  <div className="col-sm-12 col-lg-3" style={customColStyle}>
                    <Button className="btn-block center-container-btn btn-success">Submit</Button>
                    <Height val={13} className="show-on-med-and-down" />
                  </div>
                </div> */}
                </div>
              </div>

              <div className="col-sm-12 col-lg-6">
                <h3>Assisting</h3>

                <div style={{ padding: '20px 17px', border: '1px solid #ccc', borderRadius: '5px', marginTop: '20px', marginBottom: '40px' }}>
                  <div className='dflex jcb alc'>

                    <div className="row" style={{ width: '90%' }}>

                      <div className="row">
                        <div className="col-6 paddingRight">
                          <div className="form-group">
                            <h6>Vehicle type</h6>
                            <Input className="modal-x-input" />
                          </div>
                        </div>
                        <div className="col-6 paddingLeft">
                          <div className="form-group">
                            <h6>Flat rate /Rate group /Meter</h6>
                            <Input className="modal-x-input" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{ width: '10%', marginLeft: '10px' }}>
                      <Button className="btn-block center-container-btn danger danger_span_text" style={{ width: '40px', height: '40px' }}><X size={20} /></Button>
                    </div>

                  </div>
                  <div className='row'>
                    <Button className="btn-block center-container-btn success success_span_text dflex jcc alc" style={{ width: '100px' }}><Plus size={15} /> Add more</Button>
                    <div className='col-4'>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-lg-3 offset-lg-6" style={customColStyle}>
                <Button className="btn-block center-container-btn danger-outline-btn">
                  Cancel
                </Button>
              </div>
              <div className="col-sm-12 col-lg-3 " style={customColStyle}>
                <Button className="btn-block center-container-btn btn-success">Submit</Button>
                <Height val={13} className="show-on-med-and-down" />
              </div>
            </div>
            <Height val={130} className="hide-on-med-and-down" />
            <Height val={20} className="show-on-med-and-down" />
            <Height val={16} />
          </div>
        </Card>
      </section>
    </main >
  );
}

export default CreateZone;
