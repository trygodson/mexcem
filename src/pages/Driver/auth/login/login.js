import React from 'react';
import './login.scss';
import Image1 from '../../../../assets/img/Images.jpg';
import Image2 from '../../../../assets/img/driver background.jpg';
import Logo from '../../../../shared/components/logo/logo';
import Height from '../../../../shared/components/height/height';
import Input from '../../../../shared/components/input/input';

function Login() {
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
        <div className="bg-form dflex jcc alc flex-columm">
          <div className="inner">
            <h3>Welcome back to auXcar!</h3>
            <Height val={8} />
            <p>We'll text a code to verify your phone</p>
            <Height val={5} />
            <Input
              className="customer-input"
              placeholder="Enter phone number"
            />
            <Height val={10} />
            <input type="checkbox" />
            &nbsp;Keep me signed in
            <Height val={12} />
            <button>Proceed</button>
            <Height val={10} />
            <p className="textCenter">Changed your number? Find your account</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
