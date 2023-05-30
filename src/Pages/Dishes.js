import React from "react";
import Navbar from "../Components/NavBar";
import Dish from "../Components/Dish";
import ImageDish from "../Components/ImageDish";
import Category from "../Components/Category";
import EatAndDrink from "../Components/EatAndDrinks";

//import { Category } from "@mui/icons-material";


function Dishes() {
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
        <Dish></Dish>
      </div>
    </React.Fragment>
  );
}
export default Dishes;