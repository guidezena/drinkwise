import { useRef } from "react";
import { FaBars, Fabars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";

function Navbar() {
    const navRef = useRef()
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    return (
        <header>
            <div className="titlenavbar">
                <h1>
                    DrinkWise
                </h1>
            </div>
            <nav ref={navRef}>


                
                <a href="/home">Home</a>
                <a href="/restaurant">Restaurantes</a>
                <a href="/dish">Pratos</a>
                <a href="/AdminDishFree">Registrar pratos</a>
                <a href="/registerRestaurant">Registrar Restaurante</a>
                <a href="/admincategory">Registrar categoria</a>
                <a href="/registerdrink">Registrar Drinks</a>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                <FaBars />
            </button>

        </header>
    );
}
export default Navbar