import React, { useState, useEffect } from "react";
import "../Styles/Drink.css"
import image from '../img/restaurante1.png'
import Loading from "./Loading";

function Drink() {

    const [removeLoading, setRemoveLoading] = useState(false)
    const [data, setData] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            const fetchData = async () => {
                const response = await fetch("https://mighty-lowlands-25016.herokuapp.com/drinks");
                const jsonData = await response.json();
                setData(jsonData.reverse());
                setRemoveLoading(true)
                setTimeout(() => {

                })
            };

            fetchData();
        }, 3000)
    }, []);

    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        const token = window.localStorage.getItem("token");
        const user = JSON.parse(atob(token.split('.')[1]))
        setIsAdmin(user.is_admin)

    }, [])


    return (

        <div class="main">
            <div>
                <div class="grid-cardPartnerDish">
                    {data.map((item) => (

                        <div class="cardPartnerDish" onClick={() => {
                            !isAdmin && (
                                window.location = `/dish`
                            )
                            {
                                isAdmin && (
                                    window.location.href = `/registerdrink/${item.ID}`
                                )
                            }
                        }}>

                            <img src={item.image} alt="Imagem 1" />
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </div>
                    ))}
                    {
                        !removeLoading && <Loading />
                    }
                </div>
            </div>
        </div>

    );
}
export default Drink