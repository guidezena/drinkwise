import React from "react";
import Navbar from "../Components/NavBar";
import InputDishFree from "../Components/InputDishFree";



function AdminDishFree() {
    return (
        <React.Fragment>
            <div>
                <Navbar></Navbar>
            </div>
            <InputDishFree></InputDishFree>
        </React.Fragment>
    );
}
export default AdminDishFree;