import React from 'react';
import Logo from '../../../shared/components/logo/logo';
import CenterContainer from '../../../shared/components/centercontainer/centercontainer';
import { colorScheme } from '../../../default';
import IconInput from '../../../shared/components/iconinput/iconinput';
import Height from '../../../shared/components/height/height';
import { PersonFill, EyeSlashFill } from 'react-bootstrap-icons';
import Button from '../../../shared/components/button/button';
import CustomText from '../../../shared/components/customtext/customtext';
import { Link } from 'react-router-dom';
import style from './login.scss';

function Login({ ...props }) {
  document.body.style = `background: ${colorScheme.darkBackground};`;
  return (
    <div style={style}>
      <CenterContainer title={<Logo />} background={colorScheme.whiteBackground}>
        <h3>Welcome back to auXcar!</h3>
        <CustomText type="p" size={14.5}>
          Login as an Admin User
        </CustomText>
        <Height val={15} />
        <div className="row">
          <IconInput type="email" placeholder="Enter email" icon={PersonFill} />
          <Height val={10} />
          <IconInput type="password" placeholder="Enter password" icon={EyeSlashFill} />
        </div>
        <Height val={5} />
        <div className="row">
          <Button
            className="center-container-btn btn-primary btn-block"
            onClick={() => {
              props.history.push('/otp');
            }}
          >
            Login
          </Button>
        </div>
        <Height val={18.5} />
        <div className="row">
          <div className="col-12">
            <Link to="/forgot-password" className="link">
              <CustomText type="p" size={12.5} center={true}>
                Forgot your password?
              </CustomText>
            </Link>
          </div>
        </div>
      </CenterContainer>
    </div>
  );
}

export default Login;
