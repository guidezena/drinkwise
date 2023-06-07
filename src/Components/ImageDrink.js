
//import myImage from '../img/bebidawpp.jpeg'
import "../Styles/card.css"
import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';


function ImageFragment() {


    const { dish_id } = useParams();
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [data, setData] = useState([]);


    useEffect(() => {

        if (!dish_id) return
        const fetchData = async () => {
            const response = await fetch(`https://mighty-lowlands-25016.herokuapp.com/dishes/${dish_id}`);
            const jsonData = await response.json();
            setName(jsonData.name);
            setDescription(jsonData.description);
            setData(jsonData);
            setImage(jsonData.image);
            
            
        };

        fetchData();
    }, [dish_id])

    

    return (
        <>

            <section>
                <h1 className='h1'>{name}</h1>
                <div class="content">
                    <p className='p'>{description}</p>
                </div>
                <div class="img"><img className='adjust_image' src={image} /></div>
            </section>



        </>

    );

}

export default ImageFragment;