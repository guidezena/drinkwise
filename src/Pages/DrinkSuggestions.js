import Navbar from "../Components/NavBar";
import ImageDrink from "../Components/ImageDrink";

import EatAndDrink from "../Components/EatAndDrinks";
import SugestionDrink from "../Components/SugestionDrinks";

import React, { useState, useEffect } from "react"
import "../Styles/adminDishFree.css"
import { useParams } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';


function DrinkSuggestions() {

   
    return (
        <React.Fragment>
            <Navbar></Navbar>

            <div>
                <ImageDrink></ImageDrink>
            </div>
            <div>
                <EatAndDrink></EatAndDrink>
            </div>
            <div>
                <SugestionDrink></SugestionDrink>
            </div>           
        </React.Fragment>
    );
}
export default DrinkSuggestions;