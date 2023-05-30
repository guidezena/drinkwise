import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import "../Styles/partner_dish.css"
import imageCardPartnerDish from '../img/img2.jpg'

function DishAndCategory() {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const { category_id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
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
    }, [category_id]);


    return (
        <div>
            <div class="grid-cardPartnerDish">
                {data.map((item) => (
                    <div class="cardPartnerDish">
                        <img src={item.image} alt="Imagem 1" />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <button className='buttonPartnerDish'>Bebidas</button>
                    </div>
                ))}
            </div>
        </div>
    );
}



export default DishAndCategory;