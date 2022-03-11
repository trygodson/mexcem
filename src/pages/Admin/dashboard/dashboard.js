import React, { useState } from 'react';
import './dashboard.scss';
import PageTitle from '../../../shared/components/pagetitle/pagetitle';
import Button from '../../../shared/components/button/button';
import Height from '../../../shared/components/height/height';
import Basic from './basic/basic';
import Advanced from './advanced/advanced';

function Dashboard({ ...props }) {
  const [basic, setBasic] = useState(true);

  return (
    <main>
      <PageTitle title={<b>Dashboard</b>}>
        <>
          <Button
            className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
            onClick={() => setBasic(true)}
          >
            Basic
          </Button>
          <Button
            className="dashboard-title-btn danger-dashboard-title-btn"
            onClick={() => setBasic(false)}
          >
            Advanced
          </Button>
        </>
      </PageTitle>
      <Height val={21} />
      {basic ? <Basic /> : <Advanced />}
    </main>
  );
}

export default Dashboard;
