import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dish from "./Pages/Dish";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Restaurant from "./Pages/Restaurant";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Dish" element={<Dish />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Restaurant" element={<Restaurant />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App