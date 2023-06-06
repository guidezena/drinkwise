
import React, { useState, useEffect } from "react"
import "../Styles/adminDishFree.css"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function AdminDrinks() {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const { id } = useParams();
    const navigate = useNavigate();

    async function handleSubmit() {


        let url = 'https://mighty-lowlands-25016.herokuapp.com/drinks';
        let method = 'POST'
        if (id) {
            method = 'PUT'
            url = url + `/${id}`
        }
        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, image: base64Image, description })
            });

            if (response.status === 201) {
                alert('Cadastro de Bebidas feito com sucesso')
                navigate(`/drinkpartner/`)
            } else if (response.status === 200) {
                alert('Bebida atualizada com sucesso');
                navigate(`/drinkpartner/`)

            } else {
                alert("Não foi possivel efetuar o cadastro")
            }
        } catch (error) {
            // Erro ao chamar a API, exibir mensagem de erro
            console.log(error)
            alert('Erro ao fazer o cadastro');
        }

    }
    useEffect(() => {
        if (!id) return

        const fetchData = async () => {
            const response = await fetch(`https://mighty-lowlands-25016.herokuapp.com/drinks/${id}`);
            const jsonData = await response.json();
            setName(jsonData.name);
            setDescription(jsonData.description);
            setImage(jsonData.image);
        };

        fetchData();
    }, [id]);


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
    async function handleDelete() {
        if (!id) return;
        try {
            const response = await fetch(
                `https://mighty-lowlands-25016.herokuapp.com/drinks/${id}`,
                {
                    method: "DELETE",
                }

            );
            const shouldDelete = window.confirm('Tem certeza que deseja excluir este item?');
            if (response.status === 200 && shouldDelete) {
                alert("bebida excluido com sucesso");
                navigate(`/drinkpartner/`)
            } else {
                alert("Não foi possível excluir a bebida");
            }
        } catch (error) {
            console.log(error);
            alert("Erro ao excluir a bebida");
        }
    }
    return (
        <div className='div_add_dish'>
            <div>
                <h1>Administrador de bebidas</h1>
            </div>
            <div className="inputRegister">
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <label htmlFor="image">Imagem:</label>
                <input type="file" id="image" name="image" onChange={handleFileChange} />

                <label>
                    Descrição da bebida
                    <input placeholder="Descrição da bebida"
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </label>
            </div>
            <button className='buttonInput' type="submit" onClick={handleSubmit}>Salvar</button>
            <button className="buttonInput" onClick={handleDelete}>Deletar</button>
        </div>
    );

}
export default AdminDrinks;