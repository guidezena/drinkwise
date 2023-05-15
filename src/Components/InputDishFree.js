import React, { useState, useEffect } from "react"
import "../Styles/adminDishFree.css"

function InputDishFree() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://mighty-lowlands-25016.herokuapp.com/category");
            const jsonData = await response.json();
            setData(jsonData);
        };

        fetchData();
    }, []);



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
                    <option value="valor1">Selecionar</option>
                    <option value="valor1">Restaurante 1</option>
                    <option value="valor2">Restaurante 2</option>
                    <option value="valor3">Restaurante 3</option>
                </select>
                <label>Imagem Prato
                    <input type="file" name="myImage" accept="image/*" />
                </label>
            </div>
        </div>
    );

}
export default InputDishFree;