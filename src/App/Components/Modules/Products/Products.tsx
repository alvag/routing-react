import React, { Component } from 'react';
import './Products.css';
import { IProduct } from '../../../Interfaces';
import { Product, SearchBar } from '../';

interface IProps {
    products: IProduct[];
    search: (searchTerm: string) => void;
}

class Products extends Component<IProps> {
    render() {
        return (
            <div className="productos">
                <h2>Nuestros Productos</h2>
                <SearchBar search={this.props.search} />
                <ul className="lista-productos">
                    {this.props.products.map((product, index) => (
                        <Product key={index} product={product} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default Products;
