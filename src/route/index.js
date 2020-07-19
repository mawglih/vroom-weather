import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Forecast from '../components/Forecast';
import Home from '../components/Home';

const index = () => (
  <Switch>
    <Route 
      exact path='/forecast'
      component={Forecast}
    />
    <Route 
      exact path='/'
      component={Home}
    />
  </Switch>
);

export default index;
