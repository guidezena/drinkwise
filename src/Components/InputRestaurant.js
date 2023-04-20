import React, { useState } from 'react';
import "../Styles/register.css"

function InputRestaurant() {
    const [mostrarInput, setMostrarInput] = useState(false);

    const handleClickSim = () => {
        setMostrarInput(true);
    }

    return (

        <div>
            <div>
                <button onClick={handleClickSim}>Sim</button>
                <button>Não</button>
            </div>
            {mostrarInput &&
                <input type="text" placeholder="Digite alguma coisa" />

            }
            <div className='login-loginInputPassword'>
                <input type="text" placeholder="Digite alguma coisa" />
                <input type="text" placeholder="Digite alguma coisa" />
                <input type="text" placeholder="Digite alguma coisa" />
            </div>
        </div>
    );

}
export default InputRestaurant;