import React from 'react';
import Card from '../../../../../shared/components/card/card';
import CustomText from '../../../../../shared/components/customtext/customtext';
import Height from '../../../../../shared/components/height/height';
import Input from '../../../../../shared/components/input/input';
import PageTitle from '../../../../../shared/components/pagetitle/pagetitle';
import { colorScheme } from '../../../../../default';
import { CurrencyDollar, Image, Percent } from 'react-bootstrap-icons';
import Button from '../../../../../shared/components/button/button';
import IconInput from '../../../../../shared/components/iconinput/iconinput';
import CustomSwitch from '../../../../../shared/components/customswitch/customswitch';
import './addmeter.scss';

const customColStyle = {
  paddingLeft: '9.5px',
  paddingRight: '9.5Spx',
};

const customHrStyle = {
  background: colorScheme.border2,
};

function AddRateGroup() {
  return (
    <main className="add-rate-group">
      <PageTitle
        title={
          <span>
            Pricing / <b>Rate groups</b>
          </span>
        }
      ></PageTitle>
      <section>
        <Card className="paddingNone">
          <div className="card-padded-title">
            <h3>Create new rate group</h3>
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
              <div className="col-sm-12 col-lg-6 ">
                <h3 style={{ marginBottom: '20px' }}>Basic fare</h3>

                <div className="row outside-border-line">
                  <div className="col-sm-12 col-lg-6 paddingRightOnlyLg">
                    <div className="form-group">
                      <h5>Title</h5>
                      <Input className="modal-x-input mt-0" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-6 paddingLeftOnlyLg">
                    <div className="form-group">
                      <h5>Base fare</h5>
                      <IconInput
                        colored={true}
                        type="text"
                        placeholder=""
                        icon={CurrencyDollar}
                        iconSize={15.8}
                        customIconDivClass="popupIconDiv"
                        customInputClass="popupInput _length"
                        customIconClass="popupInputIcon"
                        customInputBorderClass="popupModalInputBorder"
                      />
                      <p>
                        <small>This fare will be taken as base amount</small>
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-6  paddingRight">
                    <div className="form-group">
                      <h5>Minimum fare</h5>
                      <IconInput
                        colored={true}
                        type="text"
                        placeholder=""
                        icon={CurrencyDollar}
                        iconSize={15.8}
                        customIconDivClass="popupIconDiv"
                        customInputClass="popupInput _length"
                        customIconClass="popupInputIcon"
                        customInputBorderClass="popupModalInputBorder"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-6  paddingLeft">
                    <div className="form-group">
                      <h5>Base KM</h5>
                      <Input className="modal-x-input mt-0" />
                      <p>
                        <small>This KM will be taken as base KM</small>
                      </p>
                    </div>
                  </div>
                  <div className="col-6 paddingRight">
                    <div className="form-group">
                      <h5>Minimum fare</h5>
                      <IconInput
                        colored={true}
                        type="text"
                        placeholder=""
                        icon={CurrencyDollar}
                        iconSize={15.8}
                        customIconDivClass="popupIconDiv"
                        customInputClass="popupInput _length"
                        customIconClass="popupInputIcon"
                        customInputBorderClass="popupModalInputBorder"
                      />
                      <p>
                        <small>Per KM Traveled after certain KM</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6 ">
                <h3 style={{ marginBottom: '20px' }}>Time charges</h3>
                <div className="row outside-border-line">
                  <div className="col-8 paddingRight">
                    <div className="form-group">
                      <h5>Waiting time charge</h5>
                      <IconInput
                        colored={true}
                        type="text"
                        placeholder=""
                        icon={CurrencyDollar}
                        iconSize={15.8}
                        customIconDivClass="popupIconDiv"
                        customInputClass="popupInput _length"
                        customIconClass="popupInputIcon"
                        customInputBorderClass="popupModalInputBorder"
                      />
                      <p>
                        <small>
                          Charges to be taken per min before assist get started
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="col-8 paddingRight">
                    <div className="form-group">
                      <h5>Assist time charge</h5>
                      <IconInput
                        colored={true}
                        type="text"
                        placeholder=""
                        icon={CurrencyDollar}
                        iconSize={15.8}
                        customIconDivClass="popupIconDiv"
                        customInputClass="popupInput _length"
                        customIconClass="popupInputIcon"
                        customInputBorderClass="popupModalInputBorder"
                      />
                      <p>
                        <small>
                          Charges to be taken per min after ride get started
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mtop-2 mbottom-2">
              <div className="col-lg-6">
                <h3>Cancellation charge</h3>
                <Height val={20} />

                <div className="row outside-border-line">
                  <div className="col-8 paddingRight">
                    <div className="form-group">
                      <h5>Driver cancellation charge</h5>
                      <IconInput
                        colored={true}
                        type="text"
                        placeholder=""
                        icon={CurrencyDollar}
                        iconSize={15.8}
                        customIconDivClass="popupIconDiv"
                        customInputClass="popupInput _length"
                        customIconClass="popupInputIcon"
                        customInputBorderClass="popupModalInputBorder"
                      />
                      <p>
                        <small>
                          Charges to be taken once he cancel assist after
                          acceptance{' '}
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="col-8 paddingRight">
                    <div className="form-group">
                      <h5>Customer cancellation charge</h5>
                      <IconInput
                        colored={true}
                        type="text"
                        placeholder=""
                        icon={CurrencyDollar}
                        iconSize={15.8}
                        customIconDivClass="popupIconDiv"
                        customInputClass="popupInput _length"
                        customIconClass="popupInputIcon"
                        customInputBorderClass="popupModalInputBorder"
                      />
                      <p>
                        <small>
                          Charges to be taken from customer once he cancel
                          assist after acceptance
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h3>Other charges</h3>
                <Height val={20} />

                <div className="row outside-border-line">
                  <div className="col-8 paddingRight">
                    <div className="form-group">
                      <h5>
                        Apply acceptance charge?{' '}
                        <CustomSwitch defaultChecked={false} />{' '}
                      </h5>
                      <Height val={5} />
                      <h5>Apply acceptance charge</h5>
                      <IconInput
                        colored={true}
                        type="text"
                        placeholder=""
                        icon={CurrencyDollar}
                        iconSize={15.8}
                        customIconDivClass="popupIconDiv"
                        customInputClass="popupInput _length"
                        customIconClass="popupInputIcon"
                        customInputBorderClass="popupModalInputBorder"
                      />
                      <p>
                        <small>
                          Charges to be taken from driver once he accepts an
                          assist
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row" style={{ marginTop: '50px' }}>
              <div
                className="col-sm-12 col-lg-3 offset-lg-6"
                style={customColStyle}
              >
                <Button className="btn-block center-container-btn dark-primary-border">
                  Cancel
                </Button>
                <Height val={13} className="show-on-med-and-down" />
              </div>
              <div className="col-sm-12 col-lg-3" style={customColStyle}>
                <Button className="btn-block center-container-btn dark-primary">
                  Create group
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}

export default AddRateGroup;
