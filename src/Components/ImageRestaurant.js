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

                        Clique no card de cada restaurante para obter mais informações e descobrir todos os pratos deliciosos que eles têm a oferecer. Deixe-se levar pelos sabores autênticos e descubra novas combinações de pratos e bebidas que irão surpreender seu paladar.

                    </p>
                </div>
                <div class="img"><img className='adjust_image' src={myImage} /></div>
            </section>

        </>

    );

}

export default ImageFragment;