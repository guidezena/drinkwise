import React from "react";
import Navbar from "../Components/NavBar";
import Image from "../Components/Image";
import Hr2 from "../Components/Hr2";
import EatAndDrinks from "../Components/EatAndDrinks";
import Gallery from "../Components/Gallery";


function Home() {
    return (
        <React.Fragment>
          <Navbar></Navbar>
            <div>  
            <EatAndDrinks></EatAndDrinks>
          </div>
          <div>
            <Gallery></Gallery>
          </div>
        </React.Fragment>
      );
}
export default Home;