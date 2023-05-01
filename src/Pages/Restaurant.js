import React from "react";
import Navbar from "../Components/NavBar";
import Image from "../Components/Image";
import CardRestaurantRight from "../Components/CardRestaurantRight";
import CardRestaurantLeft from "../Components/CardRestaurantLeft";


function Restaurant() {
    return (
        <React.Fragment>
            <Navbar></Navbar>

            <div>
                <Image></Image>
            </div>
            <div>
                <CardRestaurantRight></CardRestaurantRight>
            </div>
            <div>
                <CardRestaurantLeft></CardRestaurantLeft>
            </div>
        </React.Fragment>
    );
}
export default Restaurant;