import React from 'react';

import '../styles/components/pages/ServiciosPage.css'

const ServiciosPage = (props) => {
    return (
        <main>
        <div class="nuestrascabañas">
            <h2>Nuestras cabañas</h2>
            <div class="cabañas">
                {/* <a href=""> */}
                    <div class="cabaña1">
                        <img src="img/2. servicios/cabaña1.jpg" alt="cabaña1" />
                        <p>hasta 2 personas</p>
                    </div>
                {/* </a> */}
                {/* <a href=""> */}
                    <div class="cabaña2">
                        <img src="img/2. servicios/cabaña2.jpg" alt="cabaña2" />
                        <p>hasta 4 personas</p>
                    </div>
                {/* </a> */}
                {/* <a href=""> */}
                    <div class="cabaña3">
                        <img src="img/2. servicios/cabaña3.jpg" alt="cabaña3" />
                        <p>hasta 6 personas</p>
                    </div>
                {/* </a>             */}
            </div>
        </div>
        <div class="servicios">
            <h2>Servicios</h2>
            <div class="cuadroservicios">                
                <p><i class="fa-solid fa-wifi"></i> Wifi</p>
                <p><i class="fa-solid fa-car"></i> Cochera</p>
                <p><i class="fa-solid fa-bacon"></i> Parrilla</p>
                <p><i class="fa-solid fa-water"></i>Pileta y solarium</p>
                <p><i class="fa-solid fa-paw"></i> Aceptamos mascotas</p>
                <p><i class="fa-solid fa-soap"></i> Servicio de limpieza y lavandería</p>
                <p><i class="fa-solid fa-bed"></i> Ropa de cama y de blanco</p>
                <p><i class="fa-solid fa-wind"></i> Climatización</p>           
                
                
            </div>
        </div>
    </main>
    );
}

export default ServiciosPage;