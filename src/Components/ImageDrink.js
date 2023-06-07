import React from 'react';
import myImage from '../img/bebidawpp.jpeg'
import "../Styles/card.css"


function ImageFragment() {

    /*
    TESTES 


    const { id } = useParams();
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [data, setData] = useState([]);


    useEffect(() => {

        if (!id) return
        const fetchData = async () => {
            const response = await fetch(`https://mighty-lowlands-25016.herokuapp.com/dishes/${id}`);
            const jsonData = await response.json();
            setName(jsonData.name);
            setDescription(jsonData.description);
            setData(jsonData);
            setImage(jsonData.image);
            console.log(jsonData)
        };

        fetchData();
    }, [id])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://mighty-lowlands-25016.herokuapp.com/dishes`);
            const jsonData = await response.json();
            setData(jsonData);
            
        };

        fetchData();
    }, []);


    */
    return (
        <>
            <section>
                <h1 className='h1'>Drinkwise</h1>
                <div class="content">
                    <p className='p'>Bem-vindo à nossa página de drinks disponíveis! Aqui você encontrará uma seleção incrível de drinks cuidadosamente elaborados para satisfazer seu paladar e proporcionar uma experiência única.

                        Em nossa página, exibimos uma variedade de drinks, desde clássicos renomados até criações exclusivas dos nossos talentosos mixologistas. Cada drink é preparado com ingredientes de qualidade e técnicas de mixologia refinadas, garantindo sabores autênticos e agradáveis.</p>
                </div>
                <div class="img"><img className='adjust_image' src={myImage} /></div>
            </section>

        </>

    );

}

export default ImageFragment;