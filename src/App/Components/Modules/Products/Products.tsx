import React, { Component } from 'react';
import './Products.css';
import { IProduct } from '../../../Interfaces';

interface IProps {
    products: IProduct[];
}

class Products extends Component<IProps> {
    render() {
        return (
            <div className="productos">
                <h2>Nuestros Productos</h2>

                <ul className="lista-productos">

                </ul>
            </div>
        );
    }
}

export default Products;
