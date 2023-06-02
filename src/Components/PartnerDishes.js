import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import "../Styles/partner_dish.css"
import imageCardPartnerDish from '../img/img2.jpg'

function PartnerDishes() {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [address, setAddress] = useState("")
    const { restaurant_id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!restaurant_id) return
        const fetchData = async () => {
            const response = await fetch(`https://mighty-lowlands-25016.herokuapp.com/dishes?restaurant_id=${restaurant_id}`);
            const jsonData = await response.json();
            setName(jsonData.name);
            setAddress(jsonData.address)
            setImage(jsonData.image);
            setData(jsonData.reverse());
            console.log(jsonData)
        };

        fetchData();
    }, [restaurant_id]);
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        const token = window.localStorage.getItem("token");
        const user = JSON.parse(atob(token.split('.')[1]))
        setIsAdmin(user.is_admin)

    }, [])

    return (
        <div>
            <div class="grid-cardPartnerDish">
                {data.map((item) => (
                    <div class="cardPartnerDish">
                        <img src={item.image} alt="Imagem 1" />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <button className="buttonPartnerDish" onClick={() => {
                            {
                                !isAdmin && (
                                    window.location.href = `/DrinkPartner`
                                )
                            }
                        }}>Bebidas</button>
                    </div>
                ))}
            </div>
        </div>
    );
}



export default PartnerDishes;