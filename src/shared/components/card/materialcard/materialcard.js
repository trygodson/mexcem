import React from 'react';
import Card from '../card';
import { colorScheme } from '../../../../default';

function MaterialCard({ ...props }) {
  const customCardStyle = {
    background: colorScheme.faintPrimary4,
    color: colorScheme.white,
    boxShadow: `0px 3px 6px ${colorScheme.border3}`,
  };
  return (
    <Card className="basic-card bootstrap-wrapper" style={customCardStyle}>
      <div className="card-title">{props.title} </div>
      <hr className="title-underline" style={{ backgroundColor: props.theme.background }} />
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
    </Card>
  );
}

export default MaterialCard;
