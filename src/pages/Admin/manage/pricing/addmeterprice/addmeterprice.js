import React from 'react';
import Card from '../../../../../shared/components/card/card';
import Height from '../../../../../shared/components/height/height';
import Input from '../../../../../shared/components/input/input';
import PageTitle from '../../../../../shared/components/pagetitle/pagetitle';
import { colorScheme } from '../../../../../default';
import Button from '../../../../../shared/components/button/button';
import { Plus, X } from 'react-bootstrap-icons';

const customColStyle = {
  paddingLeft: '9.5px',
  paddingRight: '9.5Spx',
};

const customHrStyle = {
  background: colorScheme.border2,
};

function AddMeterPrice() {
  return (
    <main>
      <PageTitle
        title={
          <span>
            Pricing / <b>Meter price</b>
          </span>
        }
      ></PageTitle>
      <section>
        <Card className="paddingNone">
          <div className="card-padded-title">
            <h3>Create new meter price</h3>
          </div>
          <hr style={{ background: colorScheme.gray, width: '150px', marginLeft: '11px' }} />
          <hr style={customHrStyle} />
          <div className="card-content">
            <div className="row">
              <div className="col-sm-12 col-lg-9">
                <h3>Basic fare</h3>
                <div style={{ padding: '20px 30px', border: '1px solid #ccc', borderRadius: '5px', marginTop: '20px', marginBottom: '40px' }}>

                  <div className="row">
                    <div className="col-6 paddingRight">
                      <div className="form-group">
                        <h4>Title</h4>
                        <Input className="modal-x-input" />
                      </div>
                    </div>
                    <div className="col-6 paddingLeft">
                      <div className="form-group">
                        <h4>Base fare</h4>
                        <Input className="modal-x-input" />
                      </div>
                    </div>
                  </div>
                </div>

                <Height val={10} />
                <h3>Distance</h3>

                <div className='' style={{ padding: '20px 30px', border: '1px solid #ccc', borderRadius: '5px', marginTop: '20px', marginBottom: '40px' }}>
                  <div className='dflex jcb alc'>

                    <div className="row" style={{ width: '90%' }}>

                      <div className="col-4 paddingRight">
                        <div className="form-group">
                          <h4>Minimum distance</h4>
                          <Input className="modal-x-input" />
                        </div>
                      </div>
                      <div className="col-4 paddingLeft">
                        <div className="form-group">
                          <h4>Minimum distance</h4>
                          <Input className="modal-x-input" />
                        </div>
                      </div>
                      <div className="col-4 paddingLeft">
                        <div className="form-group">
                          <h4>Amount</h4>
                          <Input className="modal-x-input" />
                        </div>
                      </div>
                    </div>
                    <div style={{ width: '10%', marginTop: '10px', marginLeft: '10px' }}>
                      <Button className="btn-block center-container-btn danger danger_span_text" style={{ width: '40px', height: '40px' }}><X size={20} /></Button>
                    </div>
                  </div>
                  <div className='row'>
                    <Button className="btn-block center-container-btn success success_span_text jflex jcc alc" style={{ width: '100px' }}><Plus size={15} /> Add more</Button>
                    <div className='col-4'>
                    </div>
                  </div>
                </div>

                <div className="row ">
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

export default AddMeterPrice;
