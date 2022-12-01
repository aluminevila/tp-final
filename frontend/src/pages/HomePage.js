/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return (
        <main className="paginicio">      
        <div className="sobrenosotros">
            <h2>Sobre Nosotros</h2>
            <p>Somos una familia... Tempora dolores necessitatibus ut ea totam amet! Necessitatibus sint aperiam ab doloribus impedit? Ut, excepturi velit ex saepe facilis atque laudantium nesciunt!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim hic illo repellat voluptates maiores impedit ullam, sequi aliquam iure et? Placeat quis minus id voluptatum iste modi eum fuga fugiat?</p>
        </div>
        <div className="ubicacion">
            <h2>Ubicación</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.606623179252!2d-64.34721003196717!3d-31.342235316487688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d82ca29202eef%3A0x3c5a301edbb0eb6c!2sSierras%20de%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1669322980597!5m2!1ses!2sar"></iframe>
        </div>
        <div className="mediosdepago">
            <h2>Medios de pago</h2>
            <img src="img/1.inicio/medios-de-pago.png" alt=""/>
        </div>
        <div className="disponibilidad">
            <h2>Consultá disponibilidad</h2>
            <div className="fechas">
                <div>
                    <p className="ingreso">Ingreso</p>
                    <input type="date" name="" id=""/>
                </div>
                <div>
                    <p className="ingreso">Egreso</p>
                    <input type="date" name="" id=""/>
                </div>                                 
            </div>
            
                <div className="boton">
                    <p>Buscar</p>
                </div>
                
        </div>
    </main>
    );
}

export default HomePage;