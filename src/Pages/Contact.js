import React from "react";
import Navbar from "../Components/NavBar";
import ImageContact from "../Components/ImageContact";
import Contact from "../Components/Contact";




function Contact_us() {
    return (
        <React.Fragment >
            <Navbar></Navbar>
            <div>
                <ImageContact></ImageContact>
            </div>

            <div>
                <Contact></Contact>
            </div>

        </React.Fragment>
    );
}
export default Contact_us;