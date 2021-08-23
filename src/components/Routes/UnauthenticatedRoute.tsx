import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

// import { isAuthenticated } from '../helpers';
const isAuthenticated = false;

const RouteUnauthenticated = ({ component: Component, path, exact } : RouteProps) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return <Route exact={exact} component={Component} path={path} />;
};

export default RouteUnauthenticated;
