import React from 'react';
import { pages, appPages, widgets } from './';
import { Link } from 'react-router-dom';
import { colorScheme } from '../default';
import Height from '../shared/components/height/height';
import { sudoUserType } from '../default';

const style = { padding: '10px' };

function view() {
  document.body.style = `background: ${colorScheme.whiteBackground};`;
  return (
    <div style={style}>
      <h1>{sudoUserType}</h1>
      <Height val={20} />
      <h3>Pages</h3>
      {pages.map((route, i) => {
        if (
          route?.permission?.includes(sudoUserType) ||
          route.permission === undefined ||
          route.permission === []
        ) {
          return (
            <div key={i}>
              <Link to={route.path}>{route.path}</Link>
            </div>
          );
        }
      })}
      <Height val={15} />
      <h3>App Pages</h3>
      {appPages.map((route, i) => {
        if (
          route?.permission?.includes(sudoUserType) ||
          route.permission === undefined ||
          route.permission === []
        ) {
          return (
            <div key={i}>
              <Link to={route.path}>{route.path}</Link>
            </div>
          );
        }
      })}
      <Height val={15} />

      <h3>Widgets</h3>
      {widgets.map((route, i) => (
        <div key={i}>
          <Link to={route.path}>{route.path}</Link>
        </div>
      ))}
    </div>
  );
}

export default view;
