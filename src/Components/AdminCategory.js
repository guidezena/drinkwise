
import React, { useState, useEffect } from "react"
import {useParams } from 'react-router-dom';

function AdminCategory() {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const { id } = useParams();
    const [data, setData] = useState([]);

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
    async function handleSubmit() {
        //const token = window.localStorage.getItem("token");
        //const user = JSON.parse(atob(token.split('.')[1]))
        let url = 'https://mighty-lowlands-25016.herokuapp.com/categories';
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
                body: JSON.stringify({
                    name,
                    image:base64Image,
                })

            });
            const data = await response.json();
            if (response.status === 201) {
                alert('Cadastro de categoria feito com sucesso')
            }else if(response.status === 200){
                alert('Categoria atualizada com sucesso')
            } 
            else {
                alert('Nao foi possivel efetuar o cadastro');
            }
        } catch (error) {
            // Erro ao chamar a API, exibir mensagem de erro
            
            alert('Erro ao fazer o cadastro');
        }
    }

    async function handleDelete() {
        if (!id) return;
        try {
          const response = await fetch(
            `https://mighty-lowlands-25016.herokuapp.com/categories/`,
            {
              method: "DELETE",
            }
          );
          const shouldDelete = window.confirm('Tem certeza que deseja excluir este item?');
          if (response.status === 200 && shouldDelete ) {
            alert("Categoria excluída com sucesso");
            // Redirecionar ou atualizar a lista de categorias após a exclusão
            window.location.href = `/category/`
          } else {
            alert("Não foi possível excluir a categoria");
          }
        } catch (error) {
          console.log(error);
          alert("Erro ao excluir a categoria");
        }
      }


      useEffect(() => {
        
        if (!id) return
        const fetchData = async () => {
            const response = await fetch(`https://mighty-lowlands-25016.herokuapp.com/categories/${id}`);
            const jsonData = await response.json();
            setName(jsonData.name);
            setData(jsonData);
            setImage(jsonData.image);
            console.log(setName)
        };

        fetchData();
    }, [id])
    ; 
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://mighty-lowlands-25016.herokuapp.com/categories/`);
            const jsonData = await response.json();
            setData(jsonData);
            
        };

        fetchData();
    }, []);

    return (
        <div className='div_add_dish'>
            <div>
                <h1>Administrador de categorias</h1>
            </div>
            <div className='inputRegister' >
            <input  
                    type="text"
                    placeholder="Digite nome da categoria"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label>Imagem categoria
                    <input type="file" name="myImage" accept="image/*" onChange={handleFileChange} />
                </label>
            </div>
            <button type="submit" className="buttonInput" onClick={handleSubmit}>Salvar</button>
            <button type="submit" className="buttonInput" onClick={handleDelete}>Deletar</button>
        </div>
    );

}
export default AdminCategory;