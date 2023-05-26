import React from 'react';
import "../Styles/eatanddrink.css"
import SportsBarOutlinedIcon from '@mui/icons-material/SportsBarOutlined';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';
import WineBarOutlinedIcon from '@mui/icons-material/WineBarOutlined';

function EatAndDrink() {
    return (
        <div className='gridItems'>
            <div className='itens-center'>
                <h4>EAT AND DRINK</h4>
                <hr></hr>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0,5rem' }}>

                <div>
                    <SportsBarOutlinedIcon style={{ fontSize: 60 }} />
                    <h5>Foco menu</h5>
                    <p>Lorem Ipsum is simply dummy<br></br> text of the printing and <br></br>typesetting industry</p>
                </div>

                <div>
                    <FoodBankOutlinedIcon style={{ fontSize: 60 }} />
                    <h5>Foco menu</h5>
                    <p>Lorem Ipsum is simply dummy<br></br> text of the printing and <br></br>typesetting industry</p>
                </div>
                <div>
                    <WineBarOutlinedIcon style={{ fontSize: 60 }} />
                    <h5>Foco menu</h5>
                    <p>Lorem Ipsum is simply dummy<br></br> text of the printing and <br></br>typesetting industry</p>
                </div>

            </div>
        </div>

    );
}
export default EatAndDrink