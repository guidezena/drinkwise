import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import "../Styles/partner_dish.css"
import { useNavigate } from 'react-router-dom';
import Loading from "./Loading";

function DishAndCategory() {

    const navigate = useNavigate();
    const [removeLoading, setRemoveLoading] = useState(false)
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const { category_id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            if (!category_id) return
            const fetchData = async () => {
                const response = await fetch(`https://mighty-lowlands-25016.herokuapp.com/dishes?category_id=${category_id}`);
                const jsonData = await response.json();
                setName(jsonData.name);
                setImage(jsonData.image);
                setDescription(jsonData.description);
                setData(jsonData.reverse());
                console.log(jsonData)

            };
            fetchData();
        }, 3000)
    }, [category_id]);

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
                                    navigate(`/DrinkPartner`)
                                )
                            }
                        }}>Bebidas</button>
                    </div>
                ))}
                {
                    !removeLoading && <Loading />
                }
            </div>
        </div>
    );
}



export default DishAndCategory;