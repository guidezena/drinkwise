
import React, { useState } from 'react';

function AdminCategory() {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [base64Image, setBase64Image] = useState('');

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
        try {
            const response = await fetch('https://mighty-lowlands-25016.herokuapp.com/category', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, image: base64Image })

            });
            
            if (response.status === 201) {
                console.log(image)
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
        <div className='div_add_dish'>
            <div>
                <h1>Cadastro de categorias</h1>
            </div>
            <div className='inputRegister' >
                <label htmlFor="name">Nome da Categoria:</label>
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="image">Imagem:</label>
                <input type="file" id="image" name="image" src='' onChange={handleFileChange} />
            </div>
            <button type="submit" className="buttonInput" onClick={handleSubmit}>Salvar</button>
        </div>
    );

}
export default AdminCategory;