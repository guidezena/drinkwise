import React, { useState, useEffect } from "react"
import logoDrinkWise from '../img/logodw.png'
import "../Styles/contact.css"
import { useNavigate } from 'react-router-dom';

function Contato_partner() {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const [msg, setMsg] = useState("")
    function handleSubmit() {
        var myHeaders = new Headers();
        myHeaders.append("key", "TE%jee4PTHSxGyiW5Re");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "applicationToken": "b19kltvglf",
            "type": "EMAIL",
            "emailConfig": {
                "to": "drinkwise2023@gmail.com",
                "templateId": "d-acbd8c37496a4f559b2687f733c6ad45",
                "data": {
                    name: name,
                    email: email,
                    msg: msg
                }

            }
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://spiderman.mangue.tech/messages", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        alert("Email enviado com sucesso")
        navigate('/')
    }


    return (

        <div className="inputRegister_contact">
            <div className="contact">
                <h1>Entre em Contato</h1>

                <p>Nome:</p>
                <hr></hr>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <p> E-mail:</p>
                <hr></hr>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <hr></hr>
                <p>Mensagem:</p>
                <textarea
                    value={msg}
                    onChange={e => setMsg(e.target.value)}
                ></textarea>
                <hr>
                </hr>
                <button className='buttonInput_contact' type="submit" onClick={handleSubmit}>Salvar</button>
            </div>

        </div>


    );

}

export default Contato_partner;