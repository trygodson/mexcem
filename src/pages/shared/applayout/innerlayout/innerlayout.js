import React, { useState } from 'react';
import Sidebar from '../../../../shared/components/sidebar/sidebar';
import Navbar from '../../../../shared/components/navbar/navbar';

function InnerLayout({ Component, ...props }) {
  const defaultCols = {
    sidebarCol: 'col-2half',
    mainCol: 'col-9half',
  };
  const [cols, setCols] = useState(defaultCols);

  const moreProps = {
    defaultCols,
    setCols,
  };

  return (
    <div className="row">
      <div className={cols.sidebarCol}>
        <Sidebar {...props} {...moreProps} />
      </div>
      <div className={cols.mainCol}>
        <Navbar {...props} />
        <Component {...props} />
      </div>
    </div>
  );
}

export default InnerLayout;
