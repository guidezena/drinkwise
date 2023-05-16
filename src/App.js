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
import  RegisterRestaurant from "./Components/AdminRestaurant";

const Private = ({ Item }) => {
  const signed = false;

  return signed > 0 ? <Item /> : <Login />

}


 /*<Route path="/" element={<Private Item={Home} />} />
        */
function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/Dish" element={<Dish />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Restaurant" element={<Restaurant />} />
        <Route path="/DishRestaurantPartnes" element={<DishRestaurantPartnes />} />
        <Route path="/DrinkPartner" element={<DrinkPartner />} />
        <Route path="/AdminDishFree" element={<AdminDishFree />} />
        <Route path="/AdminCategory" element={<AdminCategory />} />
        <Route path="/RegisterRestaurant" element={< RegisterRestaurant />} />
        


        
      </Routes>

    </BrowserRouter>
  );
}
export default App
