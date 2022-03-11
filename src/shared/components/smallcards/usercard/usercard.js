import React from 'react';
import ProfileImage from '../../profileimage/profileimage';
import './usercard.scss';
import { ChevronRight, Check2Circle, PeopleFill } from 'react-bootstrap-icons';

const customImageStyle = {
  width: '40px',
  borderRadius: '50%',
};

function UserCard({ ...props }) {
  return (
    <div className="small-hash-card">
      <div className="innner-hash-card">
        <div className="image">
          <ProfileImage style={customImageStyle} />
        </div>
        <div className="data">
          <h5>{props.title}</h5>
          <p>
            <span className="status">
              <Check2Circle className="info-icon success first" />
              <span className="info-text success">{props.status}</span>
            </span>{' '}
            <span className="num">
              {props.membersNum && (
                <>
                  <PeopleFill className="info-icon  primary" />
                  <span className="info-text primary">{props.membersNum}</span>
                </>
              )}
            </span>
          </p>
        </div>
        <ChevronRight size={17} className="right-icon" />
      </div>
    </div>
  );
}

export default UserCard;
