
import React, { useState } from 'react';

function AdminRestaurant() {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [address, setAddress] = useState("")
    const [base64Image, setBase64Image] = useState('');
    const [id_user, set_id_user] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const base64 = reader.result;
            setBase64Image(base64);
        };

        reader.readAsDataURL(file);
    };

    async function handleSubmit() {
        const token = window.localStorage.getItem("token");
        const user = JSON.parse(atob(token.split('.')[1]))

        
        try {
            const response = await fetch('https://mighty-lowlands-25016.herokuapp.com/restaurant', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, image:base64Image, description, address, id_user:user.user_id })
            });
           
            const data = await response.json();
            console.log(data)
            if (response.status === 201) {
                
                alert('Cadastro do restaurante feito com sucesso')
            } else {
                alert('Nao foi possivel efetuar o cadastro');
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
                <h1>
                    Cadastro restaurante
                </h1>
            </div>
            <div className='inputRegister'>
                <label htmlFor="name">Nome Restaurante</label>
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="address">Endereço Restaurant</label>
                <input
                    type="text"
                    placeholder="Digite o endereço"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
                <label htmlFor="image">Imagem Restaurante</label>
                <input type="file" id="image" name="image" src='' onChange={handleFileChange} />
                <label>
                    Descrição do Restaurante
                    <input
                    type="text"
                    placeholder="Digite a descrição do restaurante"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                </label>
            </div>

            <button type="submit" className="buttonInput" onClick={handleSubmit}>Salvar</button>
        </div>
    );

}
export default AdminRestaurant;