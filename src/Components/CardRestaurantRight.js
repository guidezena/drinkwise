import React, { useState, useEffect } from "react";
import "../Styles/Restaurant.css"
import image from '../img/restaurante2.png'
import { ClassNames } from "@emotion/react";

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


        <div className="restaurant_adjust">
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

                                <div class="card__content">
                                   
                                    <h1 class="card__title"> {item.name}</h1>
                                    
                                    <h3>{item.address}</h3>
                                    
                                    <p>{item.description}</p>
                                </div>
                            </div>

                        </div>
                    </>
                })}
        </div>
    );

}
export default CardRestaurantRight