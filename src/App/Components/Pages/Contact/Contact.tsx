import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <form>
            <legend>Formulario de Contacto</legend>
            <div className="input-field">
                <label htmlFor="name">Nombre: </label>
                <input type="text" id="name" placeholder="Tu nombre" />
            </div>
            <div className="input-field">
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" placeholder="Tu Email" />
            </div>
            <div className="input-field">
                <label htmlFor="message">Mensaje: </label>
                <textarea id="message" placeholder="Tu mensaje" />
            </div>
            <div className="input-field enviar">
                <input type="submit" value="Enviar" />
            </div>
        </form>
    );
};

export default Contact;
