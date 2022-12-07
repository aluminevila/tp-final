import { useState, useEffect } from 'react';
import axios from 'axios';
import GaleriaItem from '../components/galeria/GaleriaItem';

import '../styles/components/pages/GaleriaPage.css' //?

const GaleriaPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [fotos, setFotos] = useState([]); //fotos

    useEffect(() => {
        const cargarFotos = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/fotos');
            setFotos(response.data);
            setLoading(false);
        };

        cargarFotos();
    }, []);

    return ( //main o section
        <main> 
            <h2>Galería</h2>
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    fotos.map(item => <GaleriaItem key={item.id}
                        title={item.titulo} photo={item.imagen} />)
                    
                ) 
                
            }
        
        </main>
    )
};
export default GaleriaPage;
