import React from "react";
import Navbar from "../Components/NavBar";

import AdminRestaurant from "../Components/AdminRestaurant";



function RegisterRestaurant() {
    return (
        <React.Fragment>
            <div>
                <Navbar></Navbar>
            </div>
           <div>
            <AdminRestaurant></AdminRestaurant>
           </div>
        </React.Fragment>
    );
}
export default RegisterRestaurant;