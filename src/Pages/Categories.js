import React from "react";
import Navbar from "../Components/NavBar";
import Category from "../Components/Category";
import ImageCategory from "../Components/ImageCategory";
import EatAndDrinks from "../Components/EatAndDrinks";

//import { Category } from "@mui/icons-material";


function Categories() {
  return (

    <React.Fragment>

      <Navbar></Navbar>
      <div>
        <ImageCategory></ImageCategory>
      </div>
      <div>
        <EatAndDrinks></EatAndDrinks>
      </div>
      <div>
        <Category></Category>
      </div>
    </React.Fragment>
  );
}
export default Categories;