import React from "react";
import Navbar from "../Components/NavBar";
import AdminCategory from "../Components/AdminCategory";



function RegisterCategory() {
    return (
        <React.Fragment>
            <div>
                <Navbar></Navbar>
            </div>
            <AdminCategory></AdminCategory>
        </React.Fragment>
    );
}
export default RegisterCategory;