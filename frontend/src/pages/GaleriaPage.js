import React from 'react';

import { useState, useEffect } from 'react';
import axios from 'axios';
import GaleriaItem from '../components/galeria/GaleriaItem';

import '../styles/components/pages/GaleriaPage.css'

const GaleriaPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [galeria, setGaleria] = useState([]);

    const [count, setCount] = useState(0);

  /*  const cargarGaleria = async () => {
        setLoading(true);
        console.log(`ESTO DEBERIA SER TRUE ${loading}`)
        const response = await axios.get('http://localhost:3000/api/galeria');
        setGaleria([1,2,3]);
        console.log(response.data)
        console.log("ESTO ES LA GALERIA")
        console.log(galeria)
        setLoading(false);
    };
*/
    useEffect(() => {
        setCount(25);
      }, []);

    return (
        <main>
            <h2>Galería</h2>
            <p>{count}</p>

        </main>
    )
};

/*
     {
                loading ? (<p>Cargando...</p>) :
                (galeria.map(item => <GaleriaItem title={item.titulo} imagen={item.img_id} />)
            )
        }*/ 
export default GaleriaPage;
