import React from 'react';

import { useState, useEffect } from 'react';
import axios from 'axios';
import GaleriaItem from '../components/galeria/GaleriaItem';

import '../styles/components/pages/GaleriaPage.css'

const GaleriaPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [galeria, setGaleria] = useState([]);

    const [count, setCount] = useState(0);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                const response = await axios.get('http://localhost:3000/api/galeria');
                const galeria = response.data
                const fotos = galeria.map(hola => hola.img_id)
                setGaleria(fotos)
                setLoading(false)
            } catch (e) {
                console.error(e);
            }
        };

        fetchData();
    }, []);

    return (
        <main>
            <h2>Galería</h2>
            { loading ? (<p>Cargando...</p>) : (<GaleriaItem title="galeria" image={galeria[0]} />) }

        </main>
    )
};

export default GaleriaPage;
