import React, { useState, useEffect } from 'react';
import Logo from '../../../shared/components/logo/logo';
import CenterContainer from '../../../shared/components/centercontainer/centercontainer';
import { colorScheme } from '../../../default';
import IconInput from '../../../shared/components/iconinput/iconinput';
import Height from '../../../shared/components/height/height';
import { PersonFill, EyeSlashFill } from 'react-bootstrap-icons';
import Button from '../../../shared/components/button/button';
import CustomText from '../../../shared/components/customtext/customtext';
import { Link } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import style from './otp.scss';

function Otp({ ...props }) {
  document.body.style = `background: ${colorScheme.darkBackground};`;

  const [otp, setOtp] = useState('');

  const handleChange = val => {
    setOtp(val);
  };

  // useEffect(() => {
  //   if (otp.length >= 6) {
  //     handleSubmit();
  //   }
  // }, [otp]);

  async function handleSubmit() {
    // alert(otp);
    props.history.push('/app/dashboard');
  }

  return (
    <div style={style}>
      <CenterContainer title={<Logo />} background={colorScheme.whiteBackground}>
        <CustomText type="h3" center={true}>
          OTP Verification
        </CustomText>
        <Height val={10} />
        <CustomText type="p" size={14.5}>
          Enter 6 digits verification code sent to your number that ends with <b>584</b>
        </CustomText>
        <Height val={25} />
        <div className="row">
          <div className="otp-wrapper">
            <OtpInput
              shouldAutoFocus={true}
              inputStyle="otp-input-style"
              value={otp}
              onChange={handleChange}
              numInputs={6}
              separator={<span></span>}
            />
          </div>
        </div>
        <Height val={24.5} />
        <div className="row">
          <Button className="center-container-btn btn-primary btn-block" onClick={handleSubmit}>
            Verify
          </Button>
        </div>
        <Height val={18.5} />
        <div className="row">
          <div className="col-12">
            <Link to="/forgot-password" className="link">
              <CustomText type="p" size={12.5} center={true}>
                Not received your code? Resend code
              </CustomText>
            </Link>
          </div>
        </div>
      </CenterContainer>
    </div>
  );
}

export default Otp;
