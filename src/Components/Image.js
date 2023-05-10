import React from 'react';
import myImage from '../img/padrao.avif'
import Card from './Card';
import "../Styles/card.css"


function ImageFragment() {
    const myImageElement = new Image();
    myImageElement.src = myImage;
    return (
        <div className='container' style={{ position: 'relative'}}>
            <img className="home-image" src={myImageElement.src} alt='My Image' style={{ width: '100%', height: '850px' }} />

           
            
        </div>
        
    );
}

export default ImageFragment;