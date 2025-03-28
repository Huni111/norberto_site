import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <>
           


              
                <img className="logo" src="https://i.ibb.co/DPKY3zcQ/Logo-Norberto-vector.png" alt="logo"></img>

                <nav>
                    <ul>
                        <li><Link to="/">Acasa</Link></li>
                        <li><Link to="/about">Despre noi</Link></li>
                        <li><Link to="/products">Produse</Link></li>
                        <li><Link to="/cart">Coșul meu</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/acount">Contul meu</Link></li>
                        <li><Link to="/login">Inra in cont</Link></li>

                    </ul>
                </nav>

            

        </>
    )
}
export default Header;