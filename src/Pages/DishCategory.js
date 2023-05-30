import React from "react";
import Navbar from "../Components/NavBar";
import Dish from "../Components/Dish";
import ImageDish from "../Components/ImageDish";
import Category from "../Components/Category";
import EatAndDrink from "../Components/EatAndDrinks";
import DishAndCategory from "../Components/DishAndCategory";

//import { Category } from "@mui/icons-material";


function DishCategory() {
    return (

        <React.Fragment>
            <div>
                <Navbar></Navbar>
            </div>
            <ImageDish></ImageDish>
            <div>
                <div>
                    <EatAndDrink></EatAndDrink>
                    <hr></hr>
                </div>
                <Category></Category>
            </div>
            <hr></hr>
            <div>
                <DishAndCategory></DishAndCategory>
            </div>
        </React.Fragment>
    );
}
export default DishCategory;