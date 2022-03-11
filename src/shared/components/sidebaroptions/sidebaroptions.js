import React from 'react';
import { Link } from 'react-router-dom';
import './sidebaroptions.scss';

function SidebarOptions({ sidebarOptionsData, ...props }) {
  const customStyle = {
    top: `${sidebarOptionsData.size}px`,
  };

  return (
    <div className="sidebar-options" style={customStyle}>
      {sidebarOptionsData?.options?.map(option => (
        <Link to={option.path}>{option.label}</Link>
      ))}
    </div>
  );
}

export default SidebarOptions;
