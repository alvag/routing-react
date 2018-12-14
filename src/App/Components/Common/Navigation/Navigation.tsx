import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navegacion">
            <Link to={'/nosotros'}>Nosotros</Link>
            <Link to={'/productos'}>Productos</Link>
            <Link to={'/contacto'}>Contacto</Link>
        </nav>
    );
};

export default Navigation;
