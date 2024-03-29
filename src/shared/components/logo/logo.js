import React from 'react';
import logo from '../../../assets/img/Full Logo-white.svg'; // change to svg later
import './logo.scss';
function Logo({ ...props }) {
  const style = {
    width: props.width ? `${props.width}px` : '190px',
  };
  return (
    <div>
      <img src={logo} style={style} {...props} />
    </div>
  );
}

export default Logo;
