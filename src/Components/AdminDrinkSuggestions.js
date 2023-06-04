
import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';

function AdminDrinkSuggestions() {
    const [name, setName] = useState("")
    const [drinks, setDrinks] = useState([]);
    const [dish, setDish] = useState([]);
    const [image, setImage] = useState("")
    const { id } = useParams();
    
    const [base64Image, setBase64Image] = useState('');
    const [dish_id, setdishId] = useState('');
    const [drink_id, setdrinkID] = useState('');

    async function handleSubmit() {
        try {
            let url = 'https://mighty-lowlands-25016.herokuapp.com/drinksuggestions';
            let method = 'POST'
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    dish_id: dish_id,
                    drink_id: drink_id,
                    
                })
            });

            if (response.status === 201) {
                alert('inserção de Bebidas para os pratos feito com sucesso')
                window.location.href = `/drinkpartner/`
            } else if (response.status === 200) {
                alert('inserção de Bebidas para os pratos com sucesso');
                window.location.href = `/drinkpartner/`
            } else {
                alert("Não foi possivel efetuar o cadastro")
            }
        } catch (error) {
            // Erro ao chamar a API, exibir mensagem de erro
            console.log(error)
            alert('Erro ao fazer o cadastro');
        }

    }

    async function handleDelete() {
        if (!id) return;
        try {
            const response = await fetch(
                `https://mighty-lowlands-25016.herokuapp.com/drinksuggestions/${drink_id.ID}/${dish_id.ID}`,
                {
                    method: "DELETE",
                }

            );
            const shouldDelete = window.confirm('Tem certeza que deseja excluir este item?');
            if (response.status === 200 && shouldDelete) {
                alert("Item excluido com sucesso");
                window.location.href = `/dish/`
            } else {
                alert("Não foi possível excluir este item");
            }
        } catch (error) {
            console.log(error);
            alert("Erro ao excluir este item");
        }
    }

        
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://mighty-lowlands-25016.herokuapp.com/dishes");
            const jsonData = await response.json();
            setDish(jsonData.reverse());
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://mighty-lowlands-25016.herokuapp.com/drinks");
            const jsonData = await response.json();
            setDrinks(jsonData);
            //console.log(Restaurants)
        };

        fetchData();
    }, []);

    const handleDishChange = (event) => {
        const selectedDishId = parseInt(event.target.value);
        setdishId(selectedDishId);
        console.log(selectedDishId)
    };

    const handleDrinkChange = (event) => {
        const selectedDrinkId = parseInt(event.target.value);
        setdrinkID(selectedDrinkId);
        console.log(selectedDrinkId)

    };



    return (
        <div className='div_add_dish'>
            <div>
                <h1>Administrador bebidas aos pratos</h1>
            </div>
            <div className="inputRegister">
                <label>Pratos</label>
                <div>
                    <select name="select" className='select_register' onChange={handleDishChange}>
                        <option value="" selected disabled>Selecione um prato</option>
                        {dish.map((item) => (
                            <option key={item.ID} selected={item.ID == dish_id} value={item.ID}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <label>Bebidas</label>
                <select name="select" className='select_register' onChange={handleDrinkChange}>
                    <option value="" selected disabled>Selecione uma bebida</option>
                    {drinks.map((item) => (
                        <option key={item.ID} selected={item.ID == drink_id} value={item.ID}>{item.name}</option>
                    ))}
                </select>
                <button className="buttonInput" onClick={handleSubmit}>Salvar</button>

            </div>
        </div>
    );

}
export default AdminDrinkSuggestions;