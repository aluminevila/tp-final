import React from 'react';

import '../styles/components/pages/ContactoPage.css'
import { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        mensaje: '',
        fechaingreso: '',
        cantidadpersonas: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value // forma dinámica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (!response.data.error) {
            setFormData(initialForm)
        }
    }





    return (
        <main>
        <div className="datos-de-contacto">
            <div>
                <p><i className="fa-solid fa-location-dot"></i>C. Lavalle 5102, Córdoba</p>
                <p><i className="fa-solid fa-phone"></i>+54 9 11 1234 5678</p>
                <p><i className="fa-solid fa-envelope"></i>cabañaslassierras@gmail.com</p>
            </div>
            <div className="redes">
                <p><i className="fa-brands fa-instagram"></i>@cabaniaslassierras</p>
                <p><i className="fa-brands fa-facebook"></i>@cabaniaslassierras</p>
            </div>            
        </div>
        <div className="formulario-contacto"></div> 
        <div className="formulario-de-contacto">
            <h4>Dejanos tu consulta:</h4>

            <form action="/contacto" method='post' onSubmit={handleSubmit}>
                <p><label htmlFor="nombre">Nombre:</label>
                    <input type="text" name='nombre' value={formData.nombre} onChange={handleChange} required /></p>

                <p><label htmlFor="apellido">Apellido:</label>
                    <input type="text" required name='apellido' value={formData.apellido} onChange={handleChange}/></p>

                <p><label htmlFor="telefono">Teléfono:</label>
                    <input type="number" required name='telefono' value={formData.telefono} onChange={handleChange}/></p>

                <p><label htmlFor="email">Email:</label>
                    <input type="email" required name='email' value={formData.email} onChange={handleChange}/></p>

                <p><label htmlFor="fechaingreso">Fecha aprox. de ingreso:</label>
                    <input type="number" name='fechaingreso' value={formData.fechaingreso} onChange={handleChange} required /></p>

                <p><label htmlFor="cantidadpersonas">Cantidad de personas:</label>
                    <input type="number" name='cantidadpersonas' value={formData.cantidadpersonas} onChange={handleChange} required /></p>
                    
                <p><label htmlFor="mensaje">Tu consulta:</label></p>      
                <textarea cols="30" rows="10" required name='mensaje' value={formData.mensaje} onChange={handleChange}></textarea>
                <button type='submit' className="btn">Enviar</button>

                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}
            </form>
        </div>      
    </main>
    );
}

export default ContactoPage;