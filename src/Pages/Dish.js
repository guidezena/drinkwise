import React from "react";
import Navbar from "../Components/NavBar";
import Dish_Free from "../Components/Dish_Free";
import Drink from "../Components/Drink";
import Drink2 from "../Components/Drink2";


function Dish() {
  return (

    <React.Fragment>

      <Navbar></Navbar>
      <div>
        <Dish_Free></Dish_Free>
      </div>
      <div>
        <Drink></Drink>
      </div>
      <div>
        <Drink2></Drink2>
      </div>

    </React.Fragment>
  );
}
export default Dish;