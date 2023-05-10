import React from "react";
import Navbar from "../Components/NavBar";
import Image from "../Components/Image";
import Drink from "../Components/Drink";
import Drink2 from "../Components/Drink2";
import DescriptionDish from "../Components/DescriptionDish";
import SugestionDrinks from "../Components/SugestionDrinks";
import Hr2 from "../Components/Hr2";


function DrinkPartner() {
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
                <DescriptionDish></DescriptionDish>
            </div>
            <div>
                <Hr2></Hr2>
            </div>
            <div>
                <SugestionDrinks></SugestionDrinks>
            </div>
            <div>
                <Drink></Drink>
            </div>
            <div>
                <Drink2></Drink2>
            </div>

        </React.Fragment>
    );
}
export default DrinkPartner;