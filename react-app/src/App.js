import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './routes/Home/Home';
import { FetchData } from './routes/FetchData/FetchData';
import { Counter } from './routes/Counter/Counter';
import { AddProduct } from './routes/Product/AddProduct';
import RouteValue from './constants/RouteValue';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path={RouteValue.HOME.path} component={Home} />
        <Route exact path={RouteValue.COUNTER.path} component={Counter} />
        <Route exact path={RouteValue.FETCH_DATA.path} component={FetchData} />
        <Route exact path={RouteValue.ADD_PRODUCT.path} component={AddProduct} />
      </Layout>
    );
  }
}
