import React, { useState, useEffect } from "react";
import "../Styles/card.css"



function getDishes() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://mighty-lowlands-25016.herokuapp.com/dishes");
            const jsonData = await response.json();
            setData(jsonData.reverse());
        };

        fetchData();
    }, []);
    /*
           <div className='all_card_dish'>
                {data.map((item) => (
                    <div class="card_dish_free">
                        <h4>{item.name}</h4>
                        <img src={`${item.image}`} alt="Carne bovina" />
    
                        <p><button className='buttonCard_dish_free'>Buscar</button></p>
                    </div>
                ))}
            </div> 
    */
  
    return (
        <div class="main">
            {data.map((item) => (
                <ul class="cards">
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image">
                                <img src={`${item.image}`} alt="" />
                                <span class="card_price"><span>$</span>9</span>
                            </div>
                            <div class="card_content">
                                <h2 class="card_title">{item.name}</h2>
                                <div class="card_text">
                                    <p>{
                                        item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            ))}
        </div>



    );
}
export default getDishes