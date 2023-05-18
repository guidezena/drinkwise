import React from "react";
import Navbar from "../Components/NavBar";
import Category from "../Components/Category";

//import { Category } from "@mui/icons-material";


function Categories() {
  return (

    <React.Fragment>

      <Navbar></Navbar>
      <div>
        <Category></Category>
      </div>
    </React.Fragment>
  );
}
export default Categories;