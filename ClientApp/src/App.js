import React, { Component } from 'react';
import { Route } from 'react-router';
import { Home } from './components/Home';
import { NewSession } from './components/NewSession';
import { Layout } from './components/Layout';
import { ViewPackages } from './components/ViewPackages';
import { Login } from './components/Login';

export default class App extends Component {
    static displayName = App.name;


    render () {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/newSession' component={NewSession} />
                <Route path='/login' component={Login} />
                <Route path='/viewPackages' component={ViewPackages} />
            </Layout>
        );
    }
}
