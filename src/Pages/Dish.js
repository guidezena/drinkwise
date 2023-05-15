import React from "react";
import Navbar from "../Components/NavBar";
import Image from "../Components/Image";
import Dish_Free from "../Components/Dish_Free";
import Search from "../Components/Search";

import Drink from "../Components/Drink";
import Drink2 from "../Components/Drink2";


function Dish() {
  return (

    <React.Fragment>

      <Navbar></Navbar>

      <div>
        <Image></Image>
      </div>
      
      <div>
        <Dish_Free></Dish_Free>
      </div>
      <div>
        <Search></Search>
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