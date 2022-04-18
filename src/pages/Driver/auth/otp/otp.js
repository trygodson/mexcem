import React from 'react';
import './otp.scss';
import Image1 from '../../../../assets/img/Images.jpg';
import Image2 from '../../../../assets/img/driver background.jpg';
import Logo from '../../../../shared/components/logo/logo';
import Height from '../../../../shared/components/height/height';
import { ArrowLeft } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';

function Otp() {
  const { push } = useHistory();
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
      <div className="col-6 login-right  dflex jcc alc">
        <div className="bg-form dflex jcc alc flex-columm">
          <div className="inner">
            <ArrowLeft size={22} className="left-icon" />
            <h3>What's the code?</h3>
            <Height val={8} />
            <p>We'll text a code sent to +1 -855</p>
            <Height val={5} />
            <input className="customer-input" placeholder="Enter code" />
            <Height val={7} />
            <button onClick={() => push('/vehicle_detail')}>Proceed</button>
            <Height val={5} />
            <p className="textCenter">Problems receiving the code?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otp;
