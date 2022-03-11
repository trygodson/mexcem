import React from 'react';
import './pagetitle.scss';

function PageTitle({ ...props }) {
  return (
    <div className="bootstrap-wrapper page-title">
      <div className="row">
        <div className="col-12">
          <span className="title">{props.title}</span>
          <span className="right">{props.children}</span>
        </div>
      </div>
    </div>
  );
}

export default PageTitle;
