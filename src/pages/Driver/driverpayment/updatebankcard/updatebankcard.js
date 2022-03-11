import React, { useRef, useState, useEffect } from 'react';
import PageTitle from '../../../../shared/components/pagetitle/pagetitle';
import Button from '../../../../shared/components/button/button';
import { colorScheme } from '../../../../default';
import Card from '../../../../shared/components/card/card';
import CustomSwitch from '../../../../shared/components/customswitch/customswitch';
import Height from '../../../../shared/components/height/height';
import CreditCard from '../../../../shared/components/creditcard/creditcard';
import './addcard.scss';
import Input from '../../../../shared/components/input/input';
import './addcard.scss';
import CustomReactSelect from '../../../../shared/components/customreactselect/customreactselect';
import visa from '../../../../assets/icons/custom/visa.svg';
import master from '../../../../assets/icons/custom/mastercard.svg';
const customHrStyle = {
  background: colorScheme.border2,
};

const customCardStyle = {
  marginBottom: '0px',
};

const iconStyle = {
  marginRight: '9px',
  marginBottom: '-2px',
};

const checkboxStyle = {
  marginLeft: '15px',
};

const imgStyle = {
  width: '45px',
  borderRadius: '50%',
};

const customColStyle = {
  paddingLeft: '9.5px',
  paddingRight: '9.5Spx',
};

const userOptions = [
  {
    value: 1,
    text: 'Up Arrow',
    icon: <img src={visa} height="35px" />,
  },
  {
    value: 2,
    text: 'Down Arrow',
    icon: <img src={master} height="35px" />,
  },
];

function CustomerUpdateBankCard() {
  const [openModal, setOpenModal] = useState(false);

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span>
            Payment <b>/ Update</b>
          </span>
        }
      ></PageTitle>
      <div className="row">
        <section className="col-12">
          <Card className="paddingNone" style={customCardStyle}>
            <div className="card-padded-title multiple">
              <h3 className="hoverPointer">Update Bank Card</h3>
            </div>
            <hr
              style={{
                background: colorScheme.gray,
                width: '117px',
                marginLeft: `8px`,
                height: '2.2px',
              }}
            />
            <hr style={customHrStyle} />
            <div className="mtop-2" style={{ padding: '20px' }}>
              <div className="row">
                <div className="col-5">
                  <div className="form-group" style={{ paddingLeft: '40px' }}>
                    <CreditCard
                      name="John Smith"
                      number="**** **** **** 1111"
                      expiry="10/20"
                      cvc="737"
                    />
                  </div>
                  <div className="row">
                    <div className="col-5">
                      <div
                        className="dflex jcc alc"
                        style={{ marginRight: '20px' }}
                      >
                        <span style={{ marginRight: '10px', fontSize: '13px' }}>
                          Status
                        </span>
                        <CustomSwitch defaultChecked={false} />
                      </div>
                    </div>
                    <div className="col-7">
                      <div
                        className="dflex jcc alc"
                        style={{ marginRight: '20px' }}
                      >
                        <span style={{ marginRight: '10px', fontSize: '13px' }}>
                          Make as default
                        </span>
                        <CustomSwitch defaultChecked={false} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <div className="card-field-wrapper">
                      <div className="row">
                        <div className="col-7">
                          <Input
                            type="text"
                            label={true}
                            labelname="Card Number"
                            placeholder="1233 4566 7899 2321"
                            style={{
                              width: '100%',
                              paddingLeft: '20px',
                              borderColor: 'grey',
                              marginTop: '10px',
                            }}
                          />
                        </div>
                        <div className="col-5">
                          <Height val={20} />
                          <CustomReactSelect
                            name="city"
                            options={userOptions}
                            placeholder="users"
                            getOptionLabel={e => (
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                {e.icon}
                              </div>
                            )}
                          />
                        </div>
                      </div>
                      <Height val={20} />

                      <div className="row">
                        <div className="col-12">
                          <Input
                            type="text"
                            label={true}
                            labelname="Card Holder Name"
                            placeholder="John Doe"
                            style={{
                              width: '100%',
                              paddingLeft: '20px',
                              borderColor: 'grey',
                              marginTop: '10px',
                            }}
                          />
                        </div>
                      </div>
                      <Height val={20} />
                      <div className="row">
                        <div className="col-4">
                          <Input
                            type="text"
                            label={true}
                            labelname="Expiry Data"
                            placeholder="12/24"
                            style={{
                              width: '100%',
                              paddingLeft: '20px',
                              borderColor: 'grey',
                              marginTop: '10px',
                            }}
                          />
                        </div>
                        <div className="col-3">
                          <Input
                            type="text"
                            label={true}
                            labelname="CVV"
                            placeholder="123"
                            style={{
                              width: '100%',
                              paddingLeft: '20px',
                              borderColor: 'grey',
                              marginTop: '10px',
                            }}
                          />
                        </div>
                      </div>
                      <Height val={40} />
                      <div className="row">
                        <div className="col-6">
                          <Button className="btn-block center-container-btn btn-success">
                            Save
                          </Button>
                        </div>
                        <div className="col-6">
                          <Button className="btn-block center-container-btn danger-outline-btn">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
              <div
                className="dflex  alc"
                style={{ width: '60%', paddingLeft: ' 20px ' }}
              ></div>
              <Height val={25} />
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
}

export default CustomerUpdateBankCard;
