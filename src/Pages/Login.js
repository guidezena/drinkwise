import React, { useState } from 'react'
import "../Styles/login.css"
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import logoDrinkWise from '../img/logodw.png'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)
 
    const handleClick = (e) => {
       e.preventDefault()
       setShow(!show);
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
             <h1>Acessar App</h1>
 
             <div className="login-loginInputEmail">
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
                <div className="login-eye">
                   {show ? (
                      <VisibilityIcon
                         size={20}
                         onClick={handleClick}
                      />
                   ) : (
                         <VisibilityOffIcon
                            size={20}
                            onClick={handleClick}
                         />
                      )}
                </div>
             </div>
 
             <button type="submit">
                Entrar
             </button>
 
             <h4>Não tenho conta!</h4>
 
             <button type="submit">
                Cadastrar
             </button>
          </div>
       </div>
    )
 }
 
 export default Login