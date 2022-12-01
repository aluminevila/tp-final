import React from 'react';

import '../../styles/components/layout/Header.css'

const Header = (props) => {
    return (
        <header>
            <div className='opacidad'>
            <div className='holder'>
            <img className='logo' src='img/logo.png' width="100" alt="Cabañas" />
            <h1>Cabañas Las Sierras</h1>
            </div>
            </div>
            
            {/* <img className="fondodeheader" src="img/1.inicio/fondo.jpg" alt="" /> */}
        
        </header>
    );
}

export default Header;