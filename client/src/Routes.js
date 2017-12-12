import React from 'react';
import WeatherApp from './App';
import About from './common/About';
import Page404 from './common/404';
import {Switch, Route} from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route name="home" exact path='/' component={WeatherApp} />
    <Route name="about" exact path='/about' component={About} />
    <Route path="*" component={Page404}/>
  </Switch>
)

export default Routes;