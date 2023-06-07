import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Restaurant from "./Pages/Restaurant";
import DishRestaurantPartnes from "./Pages/DishRestaurantPartnes";
import DrinkPartner from "./Pages/DrinkPartner";
import AdminDishFree from "./Pages/AdminDishFree"
import DishCategory from "./Pages/DishCategory";
import Dishes from "./Pages/Dishes";
import AdminCategory from "./Pages/RegisterCategory";
import RegisterRestaurant from "./Pages/RegisterRestaurant";
import RegisterDrink from "./Pages/RegisterDrink";
import AdminDrinkAndDish from "./Pages/AdminDrinkAndDish";
import SugestionDrink from "./Pages/DrinkSuggestions";
import Contact from "./Pages/Contact";


const Private = ({ Item }) => {
  const token = window.localStorage.getItem("token");
  var user;
  //console.log(token.split('.').length)
  if (token != null && token.split('.').length >= 1) {
    user = JSON.parse(atob(token.split('.')[1]))
    return <Item />
  } else {
    return window.location.href = '/login';
  }
  
}

const PrivateAdmin = ({ Item }) => {
  const token = window.localStorage.getItem("token");
  var user;

  if (token != null && token.split('.').length >= 1) {
    user = JSON.parse(atob(token.split('.')[1]))
  } else {
    return window.location.href = '/login';
  }

  if (user.is_admin === true) {
    return <Item />
  } else {
    window.location.href = '/';
  }
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
        <Route path="/DrinkPartner" element={<Private Item={DrinkPartner} />} />
        <Route path="/dishes/category/:category_id" element={<Private Item={DishCategory} />} />
    
        <Route path="/drinkpartner/:id" element={<Private Item={AdminDrinkAndDish} />} />
        <Route path="/dishes/restaurant/:restaurant_id" element={<Private Item={DishRestaurantPartnes} />} />
        <Route path="drinksuggestions/:dish_id" element={<Private Item={SugestionDrink} />} />
        <Route path="/contact" element={<Private Item={Contact} />} />



        <Route path="/AdminDrinkAndDish/" element={<PrivateAdmin Item={AdminDrinkAndDish} />} />
        <Route path="/AdminDishFree" element={<PrivateAdmin Item={AdminDishFree} />} />
        <Route path="/AdminCategory" element={<PrivateAdmin Item={AdminCategory} />} />
        <Route path="/RegisterRestaurant" element={<PrivateAdmin Item={RegisterRestaurant} />} />
        <Route path="/RegisterDrink" element={<PrivateAdmin Item={RegisterDrink} />} />




        <Route path="/AdminDishFree/:id" element={<PrivateAdmin Item={AdminDishFree} />} />
        <Route path="/AdminCategory/:id" element={<PrivateAdmin Item={AdminCategory} />} />
        <Route path="/RegisterRestaurant/:id" element={<PrivateAdmin Item={RegisterRestaurant} />} />
        <Route path="/RegisterDrink/:id" element={<PrivateAdmin Item={RegisterDrink} />} />


        



      </Routes>

    </BrowserRouter>
  );
}
export default App
