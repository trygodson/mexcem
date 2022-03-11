import React from 'react';
import './error.scss';

function error({ code = 404 }) {
  return <div>Error {code}</div>;
}

export default error;
