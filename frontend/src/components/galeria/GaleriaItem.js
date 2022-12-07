import React from 'react';

const GaleriaItem = (props) => {
    const { photo, title } = props;

    return (
        <div className='fotos'>
            <img  src={photo} alt={title}></img>
            {/* <img src='https://res.cloudinary.com/drrobighe/image/upload/v1670204400/dxfrggoacsqjqqx1qzea.jpg' alt=''></img> */}
            {/* <p>{title}</p> */}
            <hr />
        </div>
    );
}

export default GaleriaItem;