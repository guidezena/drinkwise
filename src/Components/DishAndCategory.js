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
                setRemoveLoading(true)
                console.log(jsonData)

            };
            fetchData();
        }, 2000)
    }, [category_id]);

    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        const token = window.localStorage.getItem("token");
        const user = JSON.parse(atob(token.split('.')[1]))
        setIsAdmin(user.is_admin)

    }, [])
    const redirectToDrinkSuggestions = (dishID) => {
        navigate(`/drinksuggestions/${dishID}`)
    };


    return (
        <div>
            <div class="grid-cardPartnerDish">
                {data.map((item) => (
                    <div class="cardPartnerDish">
                        <div onClick={() => { isAdmin && redirectToDrinkSuggestions(item.ID) }}>
                            <img src={item.image} alt="Imagem 1" />
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </div>

                        <button className="buttonPartnerDish" onClick={() => {
                            {
                                !isAdmin && (
                                    redirectToDrinkSuggestions(item.ID)
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