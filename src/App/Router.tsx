import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { About, NotFound, ProductDetails, Contact } from './Components/Pages';
import { Products } from './Components/Modules';
import { Header, Navigation } from './Components/Common';

import { IProduct } from './Interfaces';

import productsData from './data/data.json';

interface IAppState {
    products: IProduct[];
    searchTerm: string;
}

class Router extends Component<{}, IAppState> {

    state = {
        products: [],
        searchTerm: ''
    };

    componentDidMount() {
        this.setState({ products: productsData });
    }

    filter = (): IProduct[] => {
        let products = [...this.state.products] as IProduct[];

        if (this.state.searchTerm) {
            products = products.filter((product) => {
                return product.nombre.toUpperCase().includes(this.state.searchTerm.toUpperCase());
            });
        }

        return products;
    }

    render() {
        const products = this.filter();

        return (
            <BrowserRouter>
                <div className="contenedor">
                    <Header />
                    <Navigation />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <Products
                                    products={products}
                                    search={this.search}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/producto/:id"
                            render={(props) => {
                                const productId = Number(props.match.params.id);
                                const product = products.find((item) => item.id === productId);
                                if (product) {
                                    return (<ProductDetails product={product} />);
                                } else {
                                    return (<NotFound />);
                                }
                            }}
                        />
                        <Route
                            exact
                            path="/productos"
                            render={() => (
                                <Products
                                    products={products}
                                    search={this.search}
                                />
                            )}
                        />
                        <Route exact path="/nosotros" component={About} />
                        <Route exact path="/contacto" component={Contact} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }

    search = (searchTerm: string) => {
        this.setState({ searchTerm });
    }
}

export default Router;
