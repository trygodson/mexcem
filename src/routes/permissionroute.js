import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { sudoUserType } from '../default';

const PermissionRoute = ({ ...props }) => {
  let route;
  if (props.component) {
    route = <Route {...props} />;
  } else {
    route = <Route {...props}>{props.children}</Route>;
  }

  const redirect = <Redirect to="/error" />;

  if (props.permissions) {
    if (props.permissions.includes(sudoUserType)) {
      return route;
    } else {
      return redirect;
    }
  } else {
    return route;
  }
};

export default PermissionRoute;
