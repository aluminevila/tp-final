import React from 'react';

import './GaleriaItems.css'

const GaleriaItem = (props) => {
    const { photo, title } = props;

    return (
        <div className='galeria'>
        <div className='foto'>
            <img  src={photo} alt={title}></img>
            {/* <img src='https://res.cloudinary.com/drrobighe/image/upload/v1670204400/dxfrggoacsqjqqx1qzea.jpg' alt=''></img> */}
            {/* <p>{title}</p> */}
            {/* <hr /> */}
        </div>
        </div>
    );
}

export default GaleriaItem;