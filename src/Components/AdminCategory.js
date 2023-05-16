
import React, { useState } from 'react';

function AdminCategory() {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")


    async function handleSubmit() {
        try {
            const response = await fetch('https://mighty-lowlands-25016.herokuapp.com/category', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, image })
            });

            if (response.status === 201) {
                alert('Cadastro de categoria feito com sucesso')
            } else {
                alert('Nao foi possivel efetuar o cadastro de categoria');
            }
        } catch (error) {
            // Erro ao chamar a API, exibir mensagem de erro
            console.log(error)
            alert('Erro ao fazer o cadastro');
        }
    }
    return (
        <div>
            <label htmlFor="name">Nome da Categoria:</label>
            <input
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <label htmlFor="image">Imagem:</label>
            <input type="file" id="image" name="image" onChange={e => setImage(e.target.value)} />

            <button type="submit" onClick={handleSubmit}>Salvar</button>
        </div>
    );

}
export default AdminCategory;