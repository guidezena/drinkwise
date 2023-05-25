
import React, { useState } from 'react';
import "../Styles/adminDishFree.css"

function AdminDrinks() {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")


    async function handleSubmit() {
        try {
            const response = await fetch('https://mighty-lowlands-25016.herokuapp.com/drinks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, image, description })
            });

            if (response.status === 201) {
                alert('Cadastro de Bebidas feito com sucesso')
            } else {
                alert('Nao foi possivel efetuar o cadastro de bebida');
            }
        } catch (error) {
            // Erro ao chamar a API, exibir mensagem de erro
            console.log(error)
            alert('Erro ao fazer o cadastro');
        }
        
    }
   
    return (
        <div className='div_add_dish'>
            <div>
                <h1>Cadastro de bebidas</h1>
            </div>
            <div className="inputRegister">
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <label htmlFor="image">Imagem:</label>
                <input type="file" id="image" name="image" onChange={e => setImage(e.target.value)} />

                <label>
                    Descrição da da bebida
                    <input placeholder="Descrição Prato"
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </label>
            </div>
            <button className='buttonInput' type="submit" onClick={handleSubmit}>Salvar</button>
        </div>
    );

}
export default AdminDrinks;