import React, { useState } from 'react'
import "../Styles/register.css"
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import logoDrinkWise from '../img/logodw.png'
import RegisterInput from '../Components/InputRestaurant'

function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)


    return (
        <div className="login">
            <div className="login-logo">
                <img
                    src={logoDrinkWise}
                    alt="Imagem "
                />
            </div>

            <div className="login-right">
                <h1>Registre-se</h1>

                <div className="login-loginInputPassword">
                    <PersonIcon />
                    <input
                        type="text"
                        placeholder="Digite seu nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="login-loginInputPassword">
                    <EmailIcon />
                    <input
                        type="email"
                        placeholder="Digite um email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="login-loginInputPassword">
                    <KeyIcon />
                    <input
                        placeholder="Digite sua senha"
                        type={show ? "text" : "password"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="login-loginInputPassword">
                    <KeyIcon />
                    <input
                        placeholder="Confirme sua senha"
                        type={show ? "text" : "password"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>


                
                <button type="submit">
                    Cadastrar
                </button>
                <div>
                    <RegisterInput></RegisterInput>
                </div>
            </div>
            
        </div>

    )
}

export default Register