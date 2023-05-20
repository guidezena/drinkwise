import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Restaurant from "./Pages/Restaurant";
import DishRestaurantPartnes from "./Pages/DishRestaurantPartnes";
import DrinkPartner from "./Pages/DrinkPartner";
import AdminDishFree from "./Pages/AdminDishFree"

import Dishes from "./Pages/Dishes";
import AdminCategory from "./Pages/RegisterCategory";
import RegisterRestaurant from "./Pages/RegisterRestaurant";
import RegisterDrink from "./Pages/RegisterDrink";


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
        <Route path="/Category" element={<Private Item={Categories} />} />
        <Route path="/Dishes" element={<Private Item={Dishes} />} />
        <Route path="/Restaurant" element={<Private Item={Restaurant} />} />
        <Route path="/DishRestaurantPartnes" element={<Private Item={DishRestaurantPartnes} />} />
        <Route path="/DrinkPartner" element={<Private Item={DrinkPartner} />} />

        <Route path="/AdminDishFree" element={<Private Item={AdminDishFree} />} />
        <Route path="AdminCategory/" element={<Private Item={AdminCategory} />} />
        <Route path="/RegisterRestaurant" element={<Private Item={RegisterRestaurant} />} />
        <Route path="/RegisterDrink" element={<Private Item={RegisterDrink} />} />  


        <Route path="/AdminDishFree/:id" element={<Private Item={AdminDishFree} />} />
        

     

        
      </Routes>

    </BrowserRouter>
  );
}
export default App
