import React from "react";
import Navbar from "../Components/NavBar";
import ImageRestaurant from "../Components/ImageRestaurant";
import PartnerDishes from "../Components/PartnerDishes";
import EatAndDrinks from "../Components/EatAndDrinks";
import Category from "../Components/Category";



function DishRestaurantPartnes() {
    return (
        <React.Fragment>
            <Navbar></Navbar>

            <div>
                <ImageRestaurant></ImageRestaurant>
            </div>

            <div>
                <EatAndDrinks></EatAndDrinks>
            </div>
           
            <div>
                <PartnerDishes></PartnerDishes>
            </div>
        </React.Fragment>
    );
}
export default DishRestaurantPartnes;