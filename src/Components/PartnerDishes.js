import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "../Styles/partner_dish.css";
import imageCardPartnerDish from '../img/img2.jpg';
import Loading from "./Loading";
import { useNavigate } from 'react-router-dom';

function PartnerDishes() {
  const navigate = useNavigate();
  const { restaurant_id } = useParams();
  const [data, setData] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!restaurant_id) return;

      try {
        const response = await fetch(`https://mighty-lowlands-25016.herokuapp.com/dishes?restaurant_id=${restaurant_id}`);
        const jsonData = await response.json();
        setName(jsonData.name);
        setAddress(jsonData.address);
        setImage(jsonData.image);
        setData(jsonData.reverse());
        setRemoveLoading(true);
      } catch (error) {
        console.error("Error fetching dishes:", error);
        setRemoveLoading(true);
      }
    };

    fetchData();
  }, [restaurant_id]);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const user = JSON.parse(atob(token.split('.')[1]));
    setIsAdmin(user.is_admin);
  }, []);

  const redirectToDrinkSuggestions = (dishID) => {
    navigate(`/drinksuggestions/${dishID}`);
  };

  return (
    <div>
      <div class="grid-cardPartnerDish">
        {data.map((item) => (
          <div class="cardPartnerDish">
            <img src={item.image} alt="Imagem 1" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <button className="buttonPartnerDish" onClick={() => {
              !isAdmin && redirectToDrinkSuggestions(item.ID);
            }}>
              Bebidas
            </button>
          </div>
        ))}
        {
          !removeLoading && <Loading />
        }
      </div>
    </div>
  );
}

export default PartnerDishes;