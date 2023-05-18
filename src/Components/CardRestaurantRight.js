import React, { useState, useEffect } from "react";
import "../Styles/Restaurant.css"
import image from '../img/restaurante2.png'

function CardRestaurantRight() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://mighty-lowlands-25016.herokuapp.com/restaurant");
            const jsonData = await response.json();
            setData(jsonData.reverse());
        };

        fetchData();
    }, []);


    return (
        /* {data.map((item) => (
            <div class="card_dish_free">
                <h4>{item.name}</h4>
                <img src={`${item.image}`} alt="Carne bovina" />

                <p><button className='buttonCard_dish_free'>Buscar</button></p>
            </div>*/


        <>
           
            {
                data.map((item) => (
                    <div className='card_rigth'>

                        <div className='text_card_rigth'>
                            <img className='img_rigth'
                                src={item.image}
                                alt="Imagem " />
                            <h4>
                                {item.name}
                            </h4>
                            <p>{item.description}</p>
                            <p>{item.address}</p>
                        </div>
                    </div>
                ))
            }


        </>
    );



}
export default CardRestaurantRight