import React from 'react';
import myImage from '../img/teste.png'
import Card from './Card';
import "../Styles/card.css"


function ImageFragment() {
    const myImageElement = new Image();
    myImageElement.src = myImage;
    return (
        <div className='container' style={{ position: 'relative'}}>
            <img className="home-image" src={myImageElement.src} alt='My Image' style={{ width: '100%', height: '750px' }} />

            <Card />
            
        </div>
        
    );
}

export default ImageFragment;