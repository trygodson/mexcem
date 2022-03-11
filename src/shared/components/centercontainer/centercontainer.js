import React from 'react';
import { colorScheme } from '../../../default';
import './centercontainer.scss';
import Height from '../height/height';

function centercontainer({ ...props }) {
  return (
    <div className="center-of-page">
      {props.title && <div className="title">{props.title}</div>}
      <Height val={15} />
      <div className="row">
        <div className="col-12">
          <div
            className="center-container"
            style={{
              background: props.background ? props.background : colorScheme.whiteBackground,
            }}
          >
            <div className="container">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default centercontainer;
