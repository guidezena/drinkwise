import { useRef } from "react";
import { FaBars, Fabars, FaTimes } from "react-icons/fa";
import logo from '../img/logodw.png'
import "../Styles/main.css" ;

function Navbar(){
    const navRef = useRef()
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    return(
        <header>
           <img className="logonav" src={logo}  style={{ width: '150px', height: '125px' }} />
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/restaurant">Restaurantes</a>
                <a href="/dish">Pratos</a>
                <a href="/#">Home</a>
                <button  className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                <FaBars/>
            </button>
        </header>
    ); 
}
export default Navbar