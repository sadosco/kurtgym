import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/home" component={Home} isPrivate />
    </Switch>
  );
}
