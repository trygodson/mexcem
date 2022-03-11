import React from 'react';
import { Bell } from 'react-bootstrap-icons';
import './notification.scss';

function Notifications() {
  return (
    <div className="bell-wrapper hoverPointer">
      <Bell size={15} />
    </div>
  );
}

export default Notifications;
