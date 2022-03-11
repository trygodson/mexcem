import React from 'react';
import './assistrequeststat.scss';

function AssistRequestStat({ ...props }) {
  return (
    <div className="assist-request-stat" style={{ ...props }}>
      <h1>{props.total}</h1>
      <p>{props.title}</p>
    </div>
  );
}

export default AssistRequestStat;
