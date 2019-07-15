import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/afdfad">No Match</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};

const Home = () => <h2>home</h2>;
const Products = () => <h2>Products</h2>;
const NoMatch = () => <h2>No match</h2>;

export default App;
