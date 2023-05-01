import React from 'react';
import "../Styles/dish_free.css"
import image_type from '../img/img1.jpg'


function Dish_Free() {
    return (
        <div className='all_card_dish'>
            <div class="card_dish_free">
                <img src={image_type} alt="Carne bovina" />
                    <h4>Carne Bovina </h4>
                    <p><button>Buscar</button></p>
            </div>
            <div class="card_dish_free">
                <img src={image_type} alt="Carne bovina" />
                    <h4>Carne Bovina </h4>
                    <p><button>Buscar</button></p>
            </div>
            <div class="card_dish_free">
                <img src={image_type} alt="Carne bovina" />
                    <h4>Carne Bovina </h4>
                    <p><button>Buscar</button></p>
            </div>
            <div class="card_dish_free">
                <img src={image_type} alt="Carne bovina" />
                    <h4>Carne Bovina </h4>
                    <p><button>Buscar</button></p>
            </div>
            <div class="card_dish_free">
                <img src={image_type} alt="Carne bovina" />
                    <h4>Carne Bovina </h4>
                    <p><button>Buscar</button></p>
            </div>
        </div>

    );
}
export default Dish_Free