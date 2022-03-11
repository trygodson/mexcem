import React from 'react';
import Card from '../card';

const adjustments = {
  title: {
    fontWeight: 'normal',
  },
  total: {
    marginLeft: '8px',
    marginTop: '1px',
    fontSize: '29px',
  },
};
function AdvancedCard({ ...props }) {
  return (
    <Card className="advanced-card bootstrap-wrapper">
      <div className="card-title" style={adjustments.title}>
        {props.title}
      </div>
      <hr className="title-underline" style={{ backgroundColor: props.theme.color }} />
      <div className="card-body">
        <div className="row">
          <div className="col-2 paddingNone">
            <div className="icon-wrapper" style={props.theme}>
              {props.icon}
            </div>
          </div>
          <div className="col-2 paddingNone total-wrapper">
            <h1 style={adjustments.total}>{props.total}</h1>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default AdvancedCard;
