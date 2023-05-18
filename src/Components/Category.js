import React, { useState, useEffect } from "react";
import "../Styles/dish_free.css"



function Dish_Free() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://mighty-lowlands-25016.herokuapp.com/categories");
            const jsonData = await response.json();
            setData(jsonData.reverse());
        };

        fetchData();
    }, []);
    /** <div className='all_card_dish'>
                {data.map((item) => (
                    <div class="card_dish_free">
                        <h4>{item.name}</h4>
                        <img src={`${item.image}`} alt="Carne bovina" />
    
                        <p><button className='buttonCard_dish_free'>Buscar</button></p>
                    </div>
                ))}
            </div> */
    return (
        <div class="center">
            {data.map((item) => (
                <div class="article-card">
                    <div class="content">
                        <p class="title">{item.name}</p>
                    </div>
                    <img src={`${item.image}`} alt="" />
                </div>
            ))}
        </div>



    );
}
export default Dish_Free