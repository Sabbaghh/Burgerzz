import React from 'react';
import Layout from './components/layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Orders from './containers/Orders/Orders';
import CheckOut from './containers/CheckOut/CheckOut'
import Auth from './containers/Auth/Auth'
import { Route } from 'react-router-dom';
//test remote orgin

function App() {
  return (
    <div className="App">
      <Layout >
        <Route path="/" exact >
          <BurgerBuilder />
        </Route>
        <Route path="https://sabbaghh.github.io/Burgerzz/checkout">
          <CheckOut />
        </Route>
        <Route path="https://sabbaghh.github.io/Burgerzz/orders">
          <Orders />
        </Route>
        <Route path="https://sabbaghh.github.io/Burgerzz/Auth">
          <Auth />
        </Route>
      </Layout>
    </div>
  );
}

export default App;