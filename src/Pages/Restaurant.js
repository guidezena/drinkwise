import React from "react";
import Navbar from "../Components/NavBar";
import ImageRestaurant from "../Components/ImageRestaurant";
import CardRestaurantRight from "../Components/CardRestaurantRight";
import EatAndDrink from "../Components/EatAndDrinks";


function Restaurant() {
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
                <CardRestaurantRight></CardRestaurantRight>
            </div>
           
        </React.Fragment>
    );
}
export default Restaurant;