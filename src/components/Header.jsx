import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                {/* Large logo on the left */}
                <div className="logo-container">
                    <img className="logo" src="https://i.ibb.co/DPKY3zcQ/Logo-Norberto-vector.png" alt="logo" />
                </div>
                
                {/* Mobile menu toggle button */}
                <div className="menu-toggle" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Navigation menu on the right */}
                <nav className={`main-nav ${menuOpen ? "menu-open" : ""}`}>
                    <ul>
                        <li><Link to="/" onClick={() => setMenuOpen(false)}>Acasa</Link></li>
                        <li><Link to="/about" onClick={() => setMenuOpen(false)}>Despre noi</Link></li>
                        <li><Link to="/products" onClick={() => setMenuOpen(false)}>Produse</Link></li>
                        <li><Link to="/cart" onClick={() => setMenuOpen(false)}>Coșul meu</Link></li>
                        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                        <li><Link to="/acount" onClick={() => setMenuOpen(false)}>Contul meu</Link></li>
                        <li><Link to="/login" onClick={() => setMenuOpen(false)}>Inra in cont</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;
