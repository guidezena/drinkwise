import React from "react";
import Navbar from "../Components/NavBar";
import AdminDish from "../Components/AdminDish";



function AdminDishFree() {
    return (
        <React.Fragment>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <AdminDish></AdminDish>
            </div>
        </React.Fragment>
    );
}
export default AdminDishFree;