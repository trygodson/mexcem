import React from 'react';
import Image1 from '../../../../assets/img/Images.jpg';
import Image2 from '../../../../assets/img/driver background.jpg';
import Logo from '../../../../shared/components/logo/logo';
import Height from '../../../../shared/components/height/height';
import { ArrowLeft } from 'react-bootstrap-icons';

function DriverSignup() {
  return (
    <div className="row">
      <div className="col-6 login-left">
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
      <div className="col-6 login-right dflex jcc alc">
        <div
          className="bg-form dflex jcc alc flex-columm"
          style={{ width: '500px' }}
        >
          <div className="inner">
            <ArrowLeft size={22} className="left-icon" />
            <h3>What's the name?</h3>
            <p>So drivers will confirm it's you at arrival</p>
            <Height val={5} />
            <div className="row">
              <div className="col-6 paddingNone">
                <input className="customer-input" placeholder="First name" />
              </div>
              <div className="col-6 paddingNone">
                <input className="customer-input" placeholder="Last name" />
              </div>
            </div>
            <Height val={10} />
            <h3>What's your email?</h3>
            <p>This where we'll send your receipts</p>
            <Height val={8} />
            <input className="customer-input" placeholder="Enter email" />
            <Height val={5} />
            <input type="checkbox" />
            &nbsp;Legal notice
            <Height val={7} />
            <div className="form-info" style={{ fontSize: '12px' }}>
              <p style={{ fontSize: '12px' }}>
                By signing up, you are agreeing to our Terms and conditions.
              </p>
              <p style={{ fontSize: '12px' }}>
                By signing up, you are certifying that you are 16 years of age
                or older.
              </p>
              <p style={{ fontSize: '12px' }}>
                For information on data privacy see our Privacy Policy
              </p>
            </div>
            <button>Next</button>
            <Height val={5} />
            <p className="textCenter">Problems receiving the code?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverSignup;
