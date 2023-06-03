import React from 'react';
import "../Styles/eatanddrink.css"
import SportsBarOutlinedIcon from '@mui/icons-material/SportsBarOutlined';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';
import WineBarOutlinedIcon from '@mui/icons-material/WineBarOutlined';

function EatAndDrink() {

    return (
        <div className='gridItems'>
            <div className='itens-center'>
                <h4>COMIDAS E BEBIDAS</h4>
                <hr></hr>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0,5rem' }}>

                <div>
                    <FoodBankOutlinedIcon style={{ fontSize: 60 }} />
                    <h5>MENU</h5>
                    <p>A drinkwise trabalha<br></br> com refeições de diversos tipos de culinaria<br></br>para facilitar você a escolher o prato</p>
                </div>

                <div>
                    <SportsBarOutlinedIcon style={{ fontSize: 60 }} />

                    <h5>CERVEJA</h5>
                    <p>Nossa taplist está sempre mudando<br></br> por que somos apaixonados por fornecer a melhor<br></br> cerveja artesanal que o mercado tem a oferecer.<br></br></p>
                </div>
                <div>
                    <WineBarOutlinedIcon style={{ fontSize: 60 }} />
                    <h5>VINHOS</h5>
                    <p>Estamos sempre explorando<br></br> vinhos independentes e destilados artesanais.<br></br> Nossa lista de vinhos e destilados muda regularmente.</p>
                </div>

            </div>
        </div>

    );
}
export default EatAndDrink