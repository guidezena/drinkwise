import React from 'react';
import "../Styles/Restaurant.css"
import image from '../img/restaurante1.png'

function Drink() {
    return (
        <div className='modelDish'>
            <div className='card_drink'>
                <div>
                    <img className='img_drink'
                        src={image}
                        alt="Imagem " />
                    <h4>
                        Bebiba 1
                    </h4>
                    <p>Lorem Ipsum is simply dummy text of the printing<br></br> and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley <br></br>of type and scrambled it to make a type specimen book.</p>
                </div>

            </div>
        </div>

    );
}
export default Drink