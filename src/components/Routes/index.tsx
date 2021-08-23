import React from 'react';
import {
  BrowserRouter as Router, Redirect, Switch, Route,
} from 'react-router-dom';
import RouteAuthenticated from './AuthenticatedRoute';
import RouteUnauthenticated from './UnauthenticatedRoute';

import Home from '../Home';
import NotFound from '../common/NotFound';
import NavBar from '../common/NavBar';
import Login from '../Authentication/Login';
import Register from '../Authentication/Register';

const isAuthenticated = false;
// const fallbackUri = `${isAuthenticated ? '/dashboard' : '/login'}`;

const App = () => (
  <Router>
    <NavBar />
    <Switch>
      <RouteUnauthenticated exact path="/" component={Home} />
      <RouteUnauthenticated exact path="/signup" component={Register} />
      <RouteUnauthenticated exact path="/login" component={Login} />
      <Route component={NotFound} />
      ;
      {/* <Redirect to={fallbackUri} /> */}
    </Switch>
  </Router>
);

export default App;
