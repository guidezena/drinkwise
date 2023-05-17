import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dish from "./Pages/Dish";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Restaurant from "./Pages/Restaurant";
import DishRestaurantPartnes from "./Pages/DishRestaurantPartnes";
import DrinkPartner from "./Pages/DrinkPartner";
import AdminDishFree from "./Pages/AdminDishFree"


import AdminCategory from "./Components/AdminCategory";
import RegisterRestaurant from "./Components/AdminRestaurant";
import RegisterDrink from "./Components/AdminDrinks";

const Private = ({ Item }) => {
  
  const token = window.localStorage.getItem("token");
  const user = JSON.parse(atob(token.split('.')[1]))
  return user ? <Item /> : <Login />
  

}


 /*<Route path="/" element={<Private Item={Home} />} />
        */
function App() {
  return (
    <BrowserRouter>
      <Routes>
       
       
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />


        <Route path="/" element={<Private Item={Home} />} />
        <Route path="/Dish" element={<Private Item={Dish} />} />
        <Route path="/Restaurant" element={<Private Item={Restaurant} />} />
        <Route path="/DishRestaurantPartnes" element={<Private Item={DishRestaurantPartnes} />} />
        <Route path="/DrinkPartner" element={<Private Item={DrinkPartner} />} />

        <Route path="/AdminDishFree" element={<Private Item={AdminDishFree} />} />
        <Route path="AdminCategory/" element={<Private Item={AdminCategory} />} />
        <Route path="/RegisterRestaurant" element={<Private Item={RegisterRestaurant} />} />
        <Route path="/RegisterDrink" element={<Private Item={RegisterDrink} />} />
        

     

        
      </Routes>

    </BrowserRouter>
  );
}
export default App
