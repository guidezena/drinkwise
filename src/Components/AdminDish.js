import React, { useState, useEffect } from "react"
import "../Styles/adminDishFree.css"

function InputDishFree() {
    const [data, setData] = useState([]);
    const [Restaurant, setRestaurant] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://mighty-lowlands-25016.herokuapp.com/category");
            const jsonData = await response.json();
            setData(jsonData);
        };

        fetchData();
    }, []);



    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://mighty-lowlands-25016.herokuapp.com/restaurant");
            const jsonData = await response.json();
            setRestaurant(jsonData);
        };

        fetchData();
    }, []);

    function teste() {
        alert('teste')
    }
    const [base64Image, setBase64Image] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const base64 = e.target.result;
            setBase64Image(base64);
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className='div_add_dish'>
            <div>
                <h1>Cadastro de pratos</h1>
            </div>
            <div className="inputRegister">
                <input placeholder="Nome Prato" type="text" value="" />
                <input placeholder="Descrição Prato" type="text" value="" />
                <label>Categoria prato</label>
                <div>
                    <select name="select" className='select_register'>
                        {data.map((item) => (
                            <option value={item.name}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <label>Restaurante</label>
                <select name="select" className='select_register'>
                    {Restaurant.map((item) => (
                        <option value={item.name}>{item.name}</option>
                    ))}
                </select>
                <label>Imagem Prato
                    <input type="file" name="myImage" accept="image/*" onChange={handleFileChange} />
                    {base64Image && <img src={base64Image} alt="Imagem" />}
                </label>
                <button className="buttonInput" onClick={teste}>Salvar</button>
            </div>
        </div>
    );

}
export default InputDishFree;