import React, { useState, useEffect } from "react";
import "../Styles/dish_free.css"
import image_type from '../img/img1.jpg'


function Dish_Free() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://mighty-lowlands-25016.herokuapp.com/category");
            const jsonData = await response.json();
            setData(jsonData);
        };

        fetchData();
    }, []);

    return (
        
        <div className='all_card_dish'>
            {data.map((item) => (
            <div class="card_dish_free">
                <img src={item.image} alt="Carne bovina" />
                <h4>{item.name}</h4>
                <p><button className='buttonCard_dish_free'>Buscar</button></p>
            </div>
            ))}
        </div>


    );
}
export default Dish_Free