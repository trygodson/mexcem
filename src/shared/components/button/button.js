import React from 'react';
import './button.scss';

function Button({ children, ...props }) {
  const newProps = {
    ...props,
    className: `${props.className} hoverPointer`,
  };
  return <button {...newProps}>{children}</button>;
}

export default Button;
