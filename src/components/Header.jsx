import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <>
           


              
                <img className="logo" src="./image/Logo_Norberto_vector.png" alt="logo"></img>

                <nav>
                    <ul>
                        <li><Link to="/">Acasa</Link></li>
                        <li><Link to="/about">Despre noi</Link></li>
                        <li><Link to="/products">Produse</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/acount">Contul meu</Link></li>
                    </ul>
                </nav>

            

        </>
    )
}
export default Header;