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
    
    return (
        <div class="center">
            {data.map((item) => {
                return <div class="article-card" onClick={() => {
                    window.location.href = `/AdminCategory/${item.ID}`
                }}>
                    
                    {item.image == "" && (
                        <img src="https://goldlifesp.com.br/arquivos/produto_sem_foto.gif" />
                    )}
                    {item.image && (
                        <img src={`${item.image}`} alt="" />
                    )}
                    <div class="content">
                        <p class="title">{item.name}</p>
                    </div>
                </div>
            })}
        </div>
    );
}
export default Dish_Free