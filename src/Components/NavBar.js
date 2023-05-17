import { useEffect, useRef, useState } from "react";
import { FaBars, Fabars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";

function Navbar() {


    const [isAdmin, setIsAdmin] = useState(false)
    const navRef = useRef()
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    useEffect(() => {
        const token = window.localStorage.getItem("token");
        const user = JSON.parse(atob(token.split('.')[1]))
        setIsAdmin(user.is_admin)
        console.log(user)
    }, [])
    return (
        <header>
            <div className="titlenavbar">
                <h1>
                    DrinkWise
                </h1>
            </div>
            <nav ref={navRef}>
                <a href="/">Home</a>
                <a href="/restaurant">Restaurantes</a>
                <a href="/dish">Pratos</a>
               
                
                {isAdmin && (
                    <>
                        <a href="/AdminDishFree">Registrar pratos</a>
                        <a href="/registerRestaurant">Registrar Restaurante</a>
                        <a href="/admincategory">Registrar categoria</a>
                        <a href="/registerdrink">Registrar Drinks</a>
                    </>
                )}
                 <a href="#" onClick={() => {
                    window.localStorage.removeItem('token')
                    window.location.href = '/login'
                }}>Sair</a>

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