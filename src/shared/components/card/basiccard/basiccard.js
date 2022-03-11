import React from 'react';
import Height from '../../height/height';
import Card from '../card';

function BasicCard({ ...props }) {
  return (
    <Card className="basic-card bootstrap-wrapper">
      <div className="card-title">{props.title}</div>
      <hr className="title-underline" style={{ backgroundColor: props.theme.color }} />
      <div className="card-body">
        <div className="row">
          <div className="col-2 paddingNone">
            <div className="icon-wrapper" style={props.theme}>
              {props.icon}
            </div>
          </div>
          <div className="col-2 paddingNone total-wrapper">
            <h1>{props.total}</h1>
          </div>
        </div>
      </div>
      <Height val={20} />
      <div className="card-footer">
        <div className="row">
          <div className="col-4">
            <div className="row">{props.data1.value}</div>
            <div className="row">{props.data1.title}</div>
          </div>
          <div className="col-4">
            <div className="row">{props.data2.value}</div>
            <div className="row">{props.data2.title}</div>
          </div>
          <div className="col-4">
            <div className="row">{props.data3.value}</div>
            <div className="row">{props.data3.title}</div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default BasicCard;
