import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const Home = () => <div>Home page</div>;
const Cxc = () => <div>Sanya hui sosi</div>;
const NoMatch = () => <div>Not found</div>

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cxc">CXC page</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cxc" component={Cxc} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
