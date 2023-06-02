import React from "react";
import Navbar from "../Components/NavBar";
import EatAndDrinks from "../Components/EatAndDrinks";
import Gallery from "../Components/Gallery";
import Image from "../Components/Image";
import Hr2 from "../Components/Hr2";
import Loading from "../Components/Loading";


function Home() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
  
      <Image></Image>
      <div>
        <EatAndDrinks></EatAndDrinks>
      </div>
      <div>
        <div className="text_gallery">
          <h3>Galeria</h3>
          <hr></hr>
          <p>Aqui estão algumas fotos de momentos em que a DrinkWise fez parte.</p>
        </div>

        <Gallery></Gallery>
      </div>
      
    </React.Fragment>
  );
}
export default Home;