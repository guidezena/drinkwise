import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Loading from "./Loading";

import "../Styles/card.css";

function GetDishes() {
  const [removeLoading, setRemoveLoading] = useState(false)
  const navigate = useNavigate();
  const [data, setData] = useState([]);




  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        const response = await fetch("https://mighty-lowlands-25016.herokuapp.com/dishes");
        const jsonData = await response.json();
        setData(jsonData.reverse());
        setRemoveLoading(true)
        setTimeout(() => {

        })
      };

      fetchData();
    }, 2000)
  }, []);

  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const user = JSON.parse(atob(token.split(".")[1]));
    setIsAdmin(user.is_admin);
  }, []);

  const redirectToAdminDishFree = (dishID) => {
    navigate(`/AdminDishFree/${dishID}`)
  };

  const redirectToDrinkSuggestions = (dishID) => {
    navigate(`/drinksuggestions/${dishID}`)
  };

  return (
    <div>
      <div class="grid-cardPartnerDish">
        {data.map((item) => (
          <div class="cardPartnerDish"  >
            <div onClick={() => { isAdmin && redirectToDrinkSuggestions(item.ID) }}>
              {item.image == "" && (
                <img src="https://goldlifesp.com.br/arquivos/produto_sem_foto.gif" />
              )}
              {item.image && <img src={`${item.image}`} alt="" />}
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
            {isAdmin && (
              <button className="buttonPartnerDish" onClick={() => {
                redirectToAdminDishFree(item.ID)
              }}>Editar</button>

            )}  {!isAdmin && (
              <button className="buttonPartnerDish" onClick={() => {
                redirectToDrinkSuggestions(item.ID)
              }}>Bebidas</button>

            )}
          </div>
        ))}
        {
          !removeLoading && <Loading />
        }
      </div>
    </div >
  );
}

export default GetDishes;