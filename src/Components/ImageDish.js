import React from 'react';
import myImage from '../img/dishes.webp'
import "../Styles/card.css"


function ImageFragment() {
    return (
        <>
            <section>
                <h1 className='h1'>Pratos</h1>
                <div class="content">
                    <p className='p'>Bem-vindo à página de pratos! Aqui você encontrará uma variedade de pratos deliciosos para satisfazer seu paladar. Para facilitar sua busca, oferecemos a opção de filtrar os pratos por categoria.</p>
                </div>
                <div class="img"><img className='adjust_image' src={myImage} /></div>
            </section>

        </>

    );

}

export default ImageFragment;