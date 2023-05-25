import React, { useState, useEffect } from "react"
import "../Styles/adminDishFree.css"
import { useParams } from 'react-router-dom';

function InputDishFree() {
    const [data, setData] = useState([]);
    const [Restaurants, setRestaurants] = useState([]);
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [address, setAddress] = useState("")
    const [id_user, set_id_user] = useState('');
    const [category_id, set_category_id] = useState('');
    const [restaurant_id, set_restaurant_id] = useState('');
    const { id } = useParams();


    async function handleSubmit() {
        //const token = window.localStorage.getItem("token");
        //const user = JSON.parse(atob(token.split('.')[1]))
        let url = 'https://mighty-lowlands-25016.herokuapp.com/dishes';
        let method = 'POST'
        if(id){
            method = 'PUT'
            url = url + `/${id}`
        }
        try {
            const response = await fetch(url, {
                method:method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    image,
                    description,
                    category_id: category_id,
                    restaurant_id: restaurant_id,
                })
            });


            //console.log(category_id)
            const data = await response.json();
            //console.log(data)
            if (response.status === 201) {
                alert('Cadastro do prato feito com sucesso')
            }else if(response.status === 200){
                alert('Prato atualizado com sucesso')
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
            const response = await fetch(`https://mighty-lowlands-25016.herokuapp.com/dishes/${id}`);
            const jsonData = await response.json();
            setName(jsonData.name);
            setDescription(jsonData.description);
            set_category_id(jsonData.category_id);
            set_restaurant_id(jsonData.restaurant_id);
            setImage(jsonData.image);
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://mighty-lowlands-25016.herokuapp.com/categories");
            const jsonData = await response.json();
            setData(jsonData);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://mighty-lowlands-25016.herokuapp.com/restaurants");
            const jsonData = await response.json();
            setRestaurants(jsonData);
            //console.log(Restaurants)
        };

        fetchData();
    }, []);

    const handleCategoryChange = (event) => {
        const selectedCategoryId = parseInt(event.target.value);
        set_category_id(selectedCategoryId);
        console.log(selectedCategoryId)
    };

    const handleRestaurantChange = (event) => {
        const selectedRestaurantId = parseInt(event.target.value);
        set_restaurant_id(selectedRestaurantId);

    };
    


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
            `https://mighty-lowlands-25016.herokuapp.com/dishes/${id}`,
            {
              method: "DELETE",
            }
          );
          if (response.status === 200) {
            alert("Prato excluido com sucesso");
            window.location.href = `/dishes/`
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
                <h1>Cadastro de pratos</h1>
            </div>
            <div className="inputRegister">
                <input  
                    type="text"
                    placeholder="Digite nome do prato"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Digite descrição do prato"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <label>Categoria prato</label>
                <div>
                    <select name="select" className='select_register' onChange={handleCategoryChange}>
                        <option value="" selected disabled>Selecione uma categoria</option>
                        {data.map((item) => (
                            <option key={item.ID} selected={item.ID == category_id} value={item.ID}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <label>Restaurante</label>
                <select name="select" className='select_register' onChange={handleRestaurantChange}>
                    <option value="" selected disabled>Selecione um restaurante</option>
                    {Restaurants.map((item) => (
                        <option key={item.ID} selected={item.ID == restaurant_id} value={item.ID}>{item.name}</option>
                    ))}
                </select>
                <label>Imagem Prato
                    <input type="file" name="myImage" accept="image/*" onChange={handleFileChange} />
                </label>
                <button className="buttonInput" onClick={handleSubmit}>Salvar</button>
                <button className="buttonInput" onClick={handleDelete}>Deletar</button>
            </div>
        </div>
    );
}
export default InputDishFree;