import React from "react";
import Navbar from "../Components/NavBar";
import AdminDrinks from "../Components/AdminDrinks";



function RegisterDrink() {
    return (
        <React.Fragment>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <AdminDrinks></AdminDrinks>
            </div>

        </React.Fragment>
    );
}
export default RegisterDrink;