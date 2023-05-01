import React from 'react';
import "../Styles/Restaurant.css"
import image from '../img/restaurante1.png'

function CardRestaurantLeft() {
    return (
        <div className='card_left'>
            <img className='img_left'
                src={image}
                alt="Imagem " />
            <div className='text_card_left'>
                <h4>
                    Restaurante 2
                </h4>
                <p>Lorem Ipsum is simply dummy text of the printing<br></br> and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley <br></br>of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>



    );
}
export default CardRestaurantLeft