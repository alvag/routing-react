import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { About, NotFound, ProductDetails } from './Components/Pages';
import { Products } from './Components/Modules';
import { Header } from './Components/Common';

import { IProduct } from './Interfaces';

import productsData from './data/data.json';

interface IAppState {
    products: IProduct[];
}

class Router extends Component<{}, IAppState> {

    state = {
        products: []
    };

    componentDidMount() {
        this.setState({ products: productsData });
    }

    render() {
        return (
            <BrowserRouter>
                <div className="contenedor">
                    <Header />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <Products products={this.state.products} />
                            )}
                        />
                        <Route
                            exact
                            path="/producto/:id"
                            render={(props) => {
                                const productId = Number(props.match.params.id);
                                const products = this.state.products as any[];
                                const product = products.find((item) => item.id === productId);
                                if (product) {
                                    return (<ProductDetails product={product} />);
                                } else {
                                    return (<NotFound />);
                                }
                            }}
                        />
                        <Route exact={true} path="/nosotros" component={About} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;
