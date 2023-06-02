import React from "react";
import Navbar from "../Components/NavBar";
import Image from "../Components/Image";
import PartnerDishes from "../Components/PartnerDishes";
import EatAndDrinks from "../Components/EatAndDrinks";
import Category from "../Components/Category";



function DishRestaurantPartnes() {
    return (
        <React.Fragment>
            <Navbar></Navbar>

            <div>
                <Image></Image>
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