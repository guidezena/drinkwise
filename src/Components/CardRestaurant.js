import React from 'react';
import "../Styles/Restaurant.css"
import image from '../img/img2.jpg'
function CardRestaurnt() {
    return (
        <div class="card_restaurant">
            <div class="header">
                <div class="image">
                    <img
                        src={image}
                        alt="Imagem "
                    />
                </div>
                <div>
                    <p class="name">John Doe</p>
                </div>
            </div>
            <p class="message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                voluptatem alias ut provident sapiente repellendus.
            </p>
        </div>
    );
}
export default CardRestaurnt