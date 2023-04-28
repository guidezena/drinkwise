import React from "react";
import Navbar from "../Components/NavBar";
import Image from "../Components/Image";
import CardRestaurnt from "../Components/CardRestaurant";


function Restaurant() {
    return (
        <React.Fragment>
            <Navbar></Navbar>

            <div>
                <Image></Image>
            </div>
            <div>
                <CardRestaurnt></CardRestaurnt>
            </div>
        </React.Fragment>
    );
}
export default Restaurant;