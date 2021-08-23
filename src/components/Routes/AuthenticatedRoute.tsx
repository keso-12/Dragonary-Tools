import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

// import { isAuthenticated } from '../helpers';

const isAuthenticated = false;

const RouteAuthenticated = ({ component: Component, path, exact }: RouteProps) => {
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return <Route exact={exact} component={Component} path={path} />;
};

export default RouteAuthenticated;