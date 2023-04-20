import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dish from "./Pages/Dish";
import Login from "./Pages/Login";
import Register from "./Pages/Register";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Dish" element={<Dish />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App