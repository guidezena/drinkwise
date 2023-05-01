import React from 'react';
import "../Styles/Restaurant.css"
import image from '../img/restaurante1.png'

function Drink2() {
    return (
        <div className='card_drink2'>
            <img className='img_drink2'
                src={image}
                alt="Imagem " />
            <div className='text_card_drink2'>
                <h4>
                    Bebiba 2
                </h4>
                <p>Lorem Ipsum is simply dummy text of the printing<br></br> and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley <br></br>of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>



    );
}
export default Drink2