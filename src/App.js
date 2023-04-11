import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Restaurant from "./Pages/Restaurant";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/restaurant" element={<Restaurant />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App