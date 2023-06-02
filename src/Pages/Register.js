import React, { useState } from 'react'
import "../Styles/register.css"
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import logoDrinkWise from '../img/logodw.png'


function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setConfirmationPassword] = useState("")
    const [show, setShow] = useState(false)


    async function handleRegister() {
        try {
            const response = await fetch('https://mighty-lowlands-25016.herokuapp.com/users',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password, password_confirmation })
            });
            const data = await response.json();
            if (response.status === 201) {
                // Login bem-sucedido, redirecionar para a página principal
                window.location.href = '/login';
                alert('Cadastro feito com sucesso')
            } else if (response.status === 401){
                // Login mal-sucedido, exibir mensagem de erro
                alert('Suas senhas estão diferentes!');
            }else if (response.status === 409){
                alert('O seu email ja esta em uso');
            }
        } catch (error) {
            // Erro ao chamar a API, exibir mensagem de erro
            console.log(error)
            alert('Erro ao fazer o cadastro');
        }
    }


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
                        value={password_confirmation}
                        onChange={e => setConfirmationPassword(e.target.value)}
                    />
                </div>
                <button onClick={handleRegister} type="submit">
                    Cadastrar
                </button>

            </div>

        </div>

    )
}

export default Register