import React from 'react';

const GaleriaItem = (props) => {
    const { title, image } = props;
    console.log(`ESTA ES LA IMAGEN: ${image}` )

    return (
        <div className='galeria-item'>
            <img src={image} alt={title}/>
            {/* <div dangerouslySetInnerHTML={{ __html: body}}></div> */}
            <hr />
        </div>
    );
}

export default GaleriaItem;