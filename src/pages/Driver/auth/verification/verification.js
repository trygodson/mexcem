import React from 'react';
import Image1 from '../../../../assets/img/Images.jpg';
import Image2 from '../../../../assets/img/driver background.jpg';
import Logo from '../../../../shared/components/logo/logo';
import Height from '../../../../shared/components/height/height';
import { ArrowLeft } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';

const userOptions = [
  { value: '1', label: 'Michael' },
  { value: '2', label: 'John' },
  { value: '3', label: 'Steven' },
];

function DriverVerification() {
  const { push } = useHistory();

  return (
    <div className="row">
      <div className="col-6 login-left" style={{ height: 'auto' }}>
        <div className="logo-div _border">
          <Logo className="" />
        </div>
        <div className="image-cluster _border">
          <img src={Image1} className="image-1" />
          <img src={Image2} className="image-2" />
          <h2>Help Is On</h2>
          <h2>The Way.</h2>
          <p>Over 116,543+ Satisfied Customers.</p>
        </div>
      </div>
      <div
        className="col-6 login-right dflex jcc alc"
        style={{ height: 'auto' }}
      >
        <div
          className="bg-form dflex jcc alc flex-columm"
          style={{ width: '500px' }}
        >
          <div className="inner">
            <ArrowLeft size={22} className="left-icon" />
            <h3>Verification</h3>
            <Height val={5} />
            <div className="form-info">
              <p style={{ fontSize: '12px' }}>
                To ensure smooth operation with auxcar at assistants are
                required to go through a training guide, once we've verified
                your details you will receive a verification email and you will
                begin training. Thank You!
              </p>
            </div>

            <Height val={25} />
            <p className="field-label-title">Status</p>
            <Height val={3} />
            <input
              className="customer-input mtop-1"
              placeholder="Account verified"
              disabled
              style={{ backgroundColor: 'white', paddingLeft: '10px' }}
            />

            <Height val={60} />
            <button onClick={() => push('/')}>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverVerification;
