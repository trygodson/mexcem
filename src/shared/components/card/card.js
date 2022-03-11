import React from 'react';
import './card.scss';

function Card({ children, ...props }) {
  const newProps = {
    ...props,
    className: `card ${props.className}`,
  };
  return <div {...newProps}>{children}</div>;
}

export default Card;
