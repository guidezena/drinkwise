import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';

function AdminRestaurant() {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [address, setAddress] = useState("")
    const [base64Image, setBase64Image] = useState('');
    const [id_user, set_id_user] = useState('');
    const { id } = useParams();
    const [data, setData] = useState([]);
    

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
        let url = 'https://mighty-lowlands-25016.herokuapp.com/restaurants';
        let method = 'POST'
        if(id){
            method = 'PUT'
            url = url + `/${id}`
        }
        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, image: base64Image, description, address, id_user: user.user_id })
            });

            const data = await response.json();
            console.log(data)
            if (response.status === 201) {
                alert('Cadastro do restaurante feito com sucesso')
            } else if (response.status === 200) {
                alert('Restaurante atualizado com sucesso')
            }
            else {
                alert('Nao foi possivel efetuar o cadastro');
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
            const response = await fetch(`https://mighty-lowlands-25016.herokuapp.com/restaurants/${id}`);
            const jsonData = await response.json();
            setName(jsonData.name);
            setDescription(jsonData.description);
            setAddress(jsonData.address)
            setImage(jsonData.image);
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://mighty-lowlands-25016.herokuapp.com/restaurants");
            const jsonData = await response.json();
            setData(jsonData);
        };

        fetchData();
    }, []);

    async function handleDelete() {
        if (!id) return;
        try {
          const response = await fetch(
            `https://mighty-lowlands-25016.herokuapp.com/restaurants/${id}`,
            {
              method: "DELETE",
            }
          );
          const shouldDelete = window.confirm('Tem certeza que deseja excluir este item?');
          if (response.status === 200 && shouldDelete) {
            alert("Restaurante excluido com sucesso");
            window.location.href = `/restaurant/`
          } else {
            alert("Não foi possível excluir a categoria");
          }
        } catch (error) {
          console.log(error);
          alert("Erro ao excluir a categoria");
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
            <button type="submit" className="buttonInput" onClick={handleDelete}>Deletar</button>
        </div>
    );

}
export default AdminRestaurant;