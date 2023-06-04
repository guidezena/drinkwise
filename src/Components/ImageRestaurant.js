import React from 'react';
import myImage from '../img/restaurante3.png'
import "../Styles/card.css"


function ImageFragment() {
    return (
        <>
            <section>
                <h1 className='h1'>Restaurantes</h1>
                <div class="content">
                    <p className='p'>Explore nossos restaurantes parceiros e mergulhe em uma experiência gastronômica única. Temos parcerias com os melhores estabelecimentos, cada um com sua própria essência culinária e seleção de pratos incríveis.


                    </p>
                </div>
                <div class="img"><img className='adjust_image' src={myImage} /></div>
            </section>

        </>

    );

}

export default ImageFragment;