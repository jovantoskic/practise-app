import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Login from '../components/pages/Login';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} exact path="/login" />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default Routes;
