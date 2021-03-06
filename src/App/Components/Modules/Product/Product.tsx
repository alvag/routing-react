import React from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from '../../../Interfaces';

interface IProps {
    product: IProduct;
}

const Product = (props: IProps) => {
    return (
        <li>
            <img src={`assets/img/${props.product.imagen}.png`} alt={props.product.nombre} title={props.product.nombre} />
            <p>{props.product.nombre} <span>$ {props.product.precio}</span></p>
            <Link to={`producto/${props.product.id}`}>Más información</Link>
        </li>
    );
};

export default Product;
