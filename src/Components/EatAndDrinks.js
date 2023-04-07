import React from 'react';
import "../Styles/eatanddrink.css"
import SportsBarOutlinedIcon from '@mui/icons-material/SportsBarOutlined';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';
import WineBarOutlinedIcon from '@mui/icons-material/WineBarOutlined';

function EatAndDrink() {
    return (
       
        <div className='gridItems' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0,5rem' }}>
            
            <div>
                <SportsBarOutlinedIcon />
                <h5>Foco menu</h5>
                <p>Lorem Ipsum is simply dummy<br></br> text of the printing and typesetting industry</p>
            </div>
            <div>
                <FoodBankOutlinedIcon />
                <h5>Foco menu</h5>
                <p>Lorem Ipsum is simply dummy<br></br> text of the printing and typesetting industry</p>
            </div>
            <div>
                <WineBarOutlinedIcon />
                <h5>Foco menu</h5>
                <p>Lorem Ipsum is simply dummy<br></br> text of the printing and typesetting industry</p>
            </div>

        </div>
    );
}
export default EatAndDrink