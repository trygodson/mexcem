import React from 'react';
import { ChevronRight } from 'react-bootstrap-icons';
import { colorScheme } from '../../../../../default';

function TabCard({ ...props }) {
  return (
    <div
      className="small-hash-card hoverPointer"
      style={{ border: 'none', height: '80px' }}
      onClick={props.handler}
    >
      <div className="innner-hash-card">
        <div className="image">
          <div
            style={{
              border: 'none',
              width: '40px',
              height: '40px',
              borderRadius: '5px',
              background: colorScheme.primary,
            }}
          ></div>
        </div>
        <div className="data">
          <h4 style={{ marginTop: '8px', fontWeight: '500', fontSize: '15px' }}>
            {props.title}
          </h4>
        </div>
        <ChevronRight size={17} className="right-icon" />
      </div>
    </div>
  );
}

export default TabCard;
