import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { About, NotFound } from './Components/Pages';
import { Products } from './Components/Modules';

import { IProduct } from './Interfaces';

import products from './data/data.json';

interface IAppState {
    products: IProduct[];
}

class Router extends Component<{}, IAppState> {

    state = {
        products: []
    };

    componentDidMount() {
        this.setState({ products });
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <Products products={this.state.products} />
                        )}
                    />
                    <Route exact={true} path="/nosotros" component={About} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
