
import React, { useState } from 'react';

function AdminRestaurant() {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [address, setAddress] = useState("")

    async function handleSubmit() {
        try {
            const response = await fetch('https://mighty-lowlands-25016.herokuapp.com/restaurant', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, image, description, address })
            });

            if (response.status === 201) {
                alert('Cadastro do restaurante feito com sucesso')
            } else {
                alert('Nao foi possivel efetuar o cadastro');
            }   a
        } catch (error) {
            // Erro ao chamar a API, exibir mensagem de erro
            console.log(error)
            alert('Erro ao fazer o cadastro');
        }
    }
    return (
        <div>
            <label htmlFor="name">Nome Restaurant</label>
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
            <input type="file" id="image" name="image" onChange={e => setImage(e.target.value)} />
            <label>
                Descrição do restaurant
                <textarea name="postContent" rows={4} cols={40} 
                onChange={e => setDescription(e.target.value)} />
            </label>
            <button type="submit" onClick={handleSubmit}>Salvar</button>
        </div>
    );

}
export default AdminRestaurant;