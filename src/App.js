import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dish from "./Pages/Dish";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Restaurant from "./Pages/Restaurant";


const Private = ({Item}) => {
  const signed = false;

  return signed > 0 ? <Item/> : <Login/>
 
}



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Private Item = {Home} />}/>
        <Route path="/Dish" element={<Dish />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Restaurant" element={<Restaurant />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App