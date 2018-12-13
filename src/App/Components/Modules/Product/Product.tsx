import React, { Component } from 'react';
import './Product.css';
import { IProduct } from '../../../Interfaces';

interface IProps {
    product: IProduct;
}

class Product extends Component<IProps> {
    render() {
        return (
            <li>Producto</li>
        );
    }
}

export default Product;
