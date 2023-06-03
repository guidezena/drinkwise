import React from 'react';
import myImage from '../img/food-meal-restaurant-dish.jpg'
import "../Styles/card.css"


function ImageFragment() {
    return (
        <>
            <section>
                <h1 className='h1'>Drinkwise</h1>
                <div class="content">
                    <p className='p'>A drinkwise veio para auxiliar pessoas a escolherem a bebida ideal para acompanhar seus pratos em diferentes restaurantes ou até mesmo em casa, oferecendo-lhes uma experiência personalizada e informativa.</p><a href="/dishes">Ver pratos</a>
                </div>
                <div class="img"><img className='adjust_image' src = {myImage}/></div>
            </section>

        </>

    );

}

export default ImageFragment;