import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import myImage from '../img/restaurante3.png'
import "../Styles/card.css"


function ImageFragment() {
    const { restaurant_id } = useParams();
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [data, setData] = useState([]);


    useEffect(() => {

        if (!restaurant_id) return
        const fetchData = async () => {
            const response = await fetch(`https://mighty-lowlands-25016.herokuapp.com/restaurants/${restaurant_id}`);
            const jsonData = await response.json();
            setName(jsonData.name);
            setDescription(jsonData.description);
            setData(jsonData);
            setImage(jsonData.image);


        };

        fetchData();
    }, [restaurant_id])
    return (
        <>
            <section>
                <h1 className='h1'>{name}</h1>
                {name == "" && (
                    <h1 className='h1'>Restaurantes</h1>
                )}
                <h1 className='h1'>{name}</h1>


                <div class="content">

                    {description == "" && (
                        <p className='p'>Seja bem vindo a nossa pagina de restaurantes, aqui tem alguns restaurantes parceiros para que você possa verificar os pratos e as sugestão de bebidas.</p>
                    )}
                    <p className='p'>{description}</p>
                </div>


                <div class="img">
                    {image == "" && (
                        <img className='adjust_image' src={myImage} />
                    )}
                    {image && <img className='adjust_image' src={`${image}`} alt="" />}
                </div>
            </section>

        </>

    );

}

export default ImageFragment;