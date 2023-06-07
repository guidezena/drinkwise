import React from "react";
import Navbar from "../Components/NavBar";
import ImageDrink from "../Components/ImageDrink";
import Drink from "../Components/Drink";


import Image from "../Components/Image";



function DrinkPartner() {
    return (

        <React.Fragment>
            <Navbar></Navbar>
            <div>
                <Image></Image>
            </div>
            <hr></hr>            
            <div>
                <Drink></Drink>
            </div>
        </React.Fragment>
    );
}
export default DrinkPartner;