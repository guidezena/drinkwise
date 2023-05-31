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
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        const token = window.localStorage.getItem("token");
        const user = JSON.parse(atob(token.split('.')[1]))
        setIsAdmin(user.is_admin)

    }, [])


    return (
        <div className="restaurant_adjust">
            {data.map((item) => (
                <div class="container_restaurant">
                    <div class="card_restaurant" onClick={() => {
                        !isAdmin && (
                            window.location = `/dishes/restaurant/${item.ID}`
                        )
                        {
                            isAdmin && (
                                window.location.href = `/RegisterRestaurant/${item.ID}`
                            )
                        }
                    }}>
                        <div class="card__image-container">
                            {item.image == "" && (
                                <img src="https://goldlifesp.com.br/arquivos/produto_sem_foto.gif" />
                            )}
                            {item.image && (
                                <img src={`${item.image}`} alt="" />
                            )}
                        </div>
                        <hr></hr>
                        <div class="card__content">
                            <h1 class="card__title">{item.name}</h1>
                            <h3>{item.address}</h3>
                            <hr></hr>
                            <p>{item.description}</p>
                        </div>

                        {isAdmin && (
                            <button className="buttonPartnerDish" onClick={() => {
                                window.location.href = `/RegisterRestaurant/${item.ID}`
                            }}>Editar</button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardRestaurantRight;