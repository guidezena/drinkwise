import React, { useState, useEffect } from "react";
import "../Styles/Restaurant.css"
import image from '../img/restaurante2.png'

function CardRestaurantRight() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://mighty-lowlands-25016.herokuapp.com/restaurants");
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
                data.map((item) => {
                    return <>
                        <div class="container_restaurant">
                            <div class="card_restaurant" onClick={() => {
                                window.location = `/registerRestaurant/${item.ID}`
                            }}>
                                <div class="card__image-container">
                                    {item.image == "" && (
                                        <img src="https://goldlifesp.com.br/arquivos/produto_sem_foto.gif" />
                                    )}
                                    {item.image && (
                                        <img src={`${item.image}`} alt="" />
                                    )}
                                </div>

                                <svg class="card__svg" viewBox="0 0 800 500">

                                    <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
                                    <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent" />
                                </svg>

                                <div class="card__content">
                                    <h1 class="card__title">{item.name}</h1>
                                    <h5>{item.description}</h5>
                                    <p>{item.address}</p>
                                </div>
                            </div>

                        </div>
                    </>
                })}
        </>
    );

}
export default CardRestaurantRight