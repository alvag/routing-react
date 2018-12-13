import React, { Component } from 'react';
import './ProductDetails.css';
import { IProduct } from '../../../Interfaces';

interface IProps {
    product: IProduct;
}

const ProductDetails = (props: IProps) => {
    return (
        <div className="info-producto">
            <div className="imagen">
                <img src={`/assets/img/${props.product.imagen}.png`} alt={props.product.nombre} title={props.product.nombre} />
            </div>

            <div className="info">
                <h2>{props.product.nombre}</h2>
                <p className="precio">$ {props.product.precio}</p>
                <p>{props.product.descripcion}</p>
            </div>
        </div>
    );
};

export default ProductDetails;
