import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'


const ListItemLink = ({ to, name, ...rest }) => (
  <Route path={to} children={({ match }) => (
    <li className={match ? 'active' : ''}>
      <Link to={to} {...rest}>{name}</Link>
    </li>
  )}/>
)

const Home = () => (
  <div>
    <h2>Welcome to the homepage</h2>
  </div>
)

const About = () => (
  <div>
    <h2>Welcome to the about page</h2>
  </div>
)

const Routes = () => (
  <BrowserRouter>
    <div>
      <ul>
       <ListItemLink to="/" name="Home"/>
       <ListItemLink to="/about" name="About"/>
      </ul> 

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </BrowserRouter>
)

export default Routes;