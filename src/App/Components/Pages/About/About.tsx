import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="contenedor-nosotros">
            <div className="imagen">
                <img src="/assets/img/camisa_1.png" alt="Imagen nosotros" />
            </div>
            <div className="contenido">
                <h2>Sobre Nosotros</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis possimus ipsum non consequuntur atque obcaecati perferendis nihil, odio voluptatem labore deleniti eaque a veritatis necessitatibus sapiente sit voluptatibus dolorum sed.</p>
            </div>
        </div>
    );
};

export default About;
