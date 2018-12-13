import React, { Component } from 'react';
import './ProductDetails.css';
import { IProduct } from '../../../Interfaces';

interface IProps {
    product: IProduct;
}

class ProductDetails extends Component<IProps> {
    render() {
        console.log(this.props.product);
        return (
            <div>

            </div>
        );
    }
}

export default ProductDetails;
