import React from "react";
import Navbar from "../Components/NavBar";
import AdminDrinkSuggestions from "../Components/AdminDrinkSuggestions";



function AdminDrinkAndDish() {
    return (
        <React.Fragment>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <AdminDrinkSuggestions></AdminDrinkSuggestions>
            </div>
        </React.Fragment>
    );
}
export default AdminDrinkAndDish;