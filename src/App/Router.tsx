import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About, Home, NotFound } from './Components/Pages';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route exact={true} path="/nosotros" component={About} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
