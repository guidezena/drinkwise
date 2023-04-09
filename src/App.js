import React from "react"
import Navbar from "./Components/NavBar";
import Image from "./Components/Image";
import EatAndDrink from "./Components/EatAndDrinks";
import Hr2 from "../src/Components/Hr2"
import Gallery from "./Components/Gallery";
//import imagem from './img/teste.png';



function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>

      <div>
        <Image></Image>
      </div>
      <div>
        <Hr2></Hr2>
      </div>

      <div>

        <EatAndDrink></EatAndDrink>
      </div>
      <div>
        <Gallery></Gallery>
      </div>
    </React.Fragment>
  );
}
export default App