import React, { useContext } from 'react';
import {
  BrowserRouter as Router, Switch, Route,
  // Redirect,
} from 'react-router-dom';
import { StoreContext } from 'globalStore';
import { isEmpty } from 'lodash';
import Dragonary from 'components/Apps/Dragonary';
import NotFound from 'components/common/NotFound';
import NavBar from 'components/common/NavBar';
import Footer from 'components/common/Footer';
// import RouteAuthenticated from './AuthenticatedRoute';
import Home from 'components/Home';
import RouteUnauthenticated from './UnauthenticatedRoute';

// const isAuthenticated = false;
// const fallbackUri = `${isAuthenticated ? '/dashboard' : '/login'}`;
const App = ({ toggleTheme }: { toggleTheme: () => void }) => {
  const { banner } = useContext(StoreContext);
  return (
    <Router>
      <NavBar toggleTheme={toggleTheme} />
      {!isEmpty(banner) && (
      <img
        src={banner}
        alt="banner"
        style={{ width: '100%', objectFit: 'cover', marginBottom: '2em' }}
      />
      )}
      <Switch>
        <RouteUnauthenticated exact path="/" component={Home} />
        <RouteUnauthenticated exact path="/dragonary" component={Dragonary} />
        <Route component={NotFound} />
        {/* <Redirect to={fallbackUri} /> */}
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
