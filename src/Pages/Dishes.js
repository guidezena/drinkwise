import React from "react";
import Navbar from "../Components/NavBar";
import Dish from "../Components/Dish";

//import { Category } from "@mui/icons-material";


function Dishes() {
  return (

    <React.Fragment>
      <div>
        <Navbar></Navbar>

      </div>

      <div>
        <Dish></Dish>
      </div>
    </React.Fragment>
  );
}
export default Dishes;