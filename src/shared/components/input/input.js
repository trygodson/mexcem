import React from 'react';
import './input.scss';

function Input({ ...props }) {
  const { labelname, label = false } = props;
  const newProps = {
    ...props,
    className: `form-input ${props.className} `,
  };
  return (
    <>
      {label ? (
        <>
          <label className="label-name">{labelname}</label>
          <input {...newProps} />
        </>
      ) : (
        <input {...newProps} />
      )}
    </>
  );
}

export default Input;
