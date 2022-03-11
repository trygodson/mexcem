import React from 'react';
import Input from '../input/input';
import './iconinput.scss';

function IconInput({ ...props }) {
  if (props.colored) {
    return (
      <div className={`icon-border-2 ${props.customInputBorderClass}`}>
        <div className={`icon-wrapper ${props.customIconDivClass}`}>
          {' '}
          <props.icon
            size={props.iconSize || 20}
            className={`input-icon ${props.customIconClass}`}
          />
        </div>
        <div className="input-wrapper">
          {' '}
          <Input {...props} className={`borderNone icon-input ${props.customInputClass}`} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={`icon-border ${props.customInputBorderClass}`}>
        <props.icon size={props.iconSize || 20} className={`input-icon ${props.customIconClass}`} />
        <Input {...props} className={`borderNone icon-input ${props.customInputClass}`} />
      </div>
    );
  }
}

export default IconInput;
