import React, { Component } from 'react';
import { Route } from 'react-router';
import { Home } from './components/Home';
import { Sessions } from './components/Sessions';
import {Layout} from './components/Layout';

export default class App extends Component {
  static displayName = App.name;


  render () {
      return (
          <Layout>
        <Route exact path='/' component={Home} />
              <Route path='/sessions' component={Sessions} />
             </Layout>
    );
  }
}
