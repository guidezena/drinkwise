import React, { useState, useEffect } from "react";
import "../Styles/Restaurant.css"
import { useParams } from 'react-router-dom';

function SugestionDrink() {
    const { dish_id } = useParams();
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [data, setData] = useState([]);
    
    useEffect(() => {
        if (!dish_id) return
        const fetchData = async () => {
            const response = await fetch(`https://mighty-lowlands-25016.herokuapp.com/drinksuggestions/${dish_id}`);
            const jsonData = await response.json();
            setName(jsonData.name);
            setImage(jsonData.image);
            setDescription(jsonData.description);
            setData(jsonData.reverse());
            console.log(jsonData)

        };
        fetchData();
    }, [dish_id]);

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
                    <div class="card_restaurant">
                        <div class="card__image-container">
                            {item.Drink.image == "" && (
                                <img src="https://goldlifesp.com.br/arquivos/produto_sem_foto.gif" />
                            )}
                            {item.Drink.image && (
                                <img src={`${item.Drink.image}`} alt="" />
                            )}
                        </div>
                        <hr></hr>
                        <div class="card__content">
                            <h1 class="card__title">{item.Drink.name}</h1>
                            <hr></hr>
                            <p>{item.Drink.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SugestionDrink;