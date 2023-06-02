import React from "react";
import Navbar from "../Components/NavBar";
import ImageRestaurant from "../Components/ImageRestaurant";

import EatAndDrink from "../Components/EatAndDrinks";
import SugestionDrink from "../Components/SugestionDrinks";


function DrinkSuggestions() {
    return (
        <React.Fragment>
            <Navbar></Navbar>

            <div>
                <ImageRestaurant></ImageRestaurant>
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