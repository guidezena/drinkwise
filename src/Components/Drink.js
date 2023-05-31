import React, { useState, useEffect } from "react";
import "../Styles/Drink.css"
import image from '../img/restaurante1.png'

function Drink() {

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
        <div class="main">
            <div class="cards_drinks">
                    <div class="card_image_drink">
                        <img src="https://goldlifesp.com.br/arquivos/produto_sem_foto.gif" />
                    </div>
                    <div class="card_content_drink">
                        <h2 class="card_title_drink"></h2>
                        <div class="card_text_drink">
                        </div>
                    </div>
            </div>
        </div>

    );
}
export default Drink