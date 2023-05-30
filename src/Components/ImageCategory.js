import React from 'react';
import myImage from '../img/categoria2.jpg'
import "../Styles/card.css"


function ImageFragment() {
    return (
        <>
            <section>
                <h1 className='h1'>Drinkwise</h1>
                <div class="content">
                    <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, laborum suscipit doloremque, expedita voluptatum maiores corporis modi assumenda esse consectetur error nulla, vero alias.</p><a href="/dishes">Ver pratos</a>
                </div>
                <div class="img"><img className='adjust_image' src = {myImage}/></div>
            </section>

        </>

    );

}

export default ImageFragment;