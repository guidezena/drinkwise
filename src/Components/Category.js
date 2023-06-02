import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


import "../Styles/dish_free.css"



function Dish_Free() {
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://mighty-lowlands-25016.herokuapp.com/categories");
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
        <div className="adjust_padding">
            <div class="center">
                {data.map((item) => {
                    return <div class="article-card" onClick={() => {
                        {
                            isAdmin && (
                                navigate(`/AdminCategory`) 
                            )
                        }
                        {
                            !isAdmin && (
                                navigate(`/dishes/category/${item.ID}`)
                            )
                        }

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
        </div>

    );
}
export default Dish_Free