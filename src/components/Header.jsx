import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { FaBars, FaTimes } from 'react-icons/fa';
import LoginModal from './LoginModal';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const openLoginModal = (e) => {
        e.preventDefault();
        setLoginModalOpen(true);
        setMenuOpen(false); // Close the mobile menu if open
    };

    const closeLoginModal = () => {
        setLoginModalOpen(false);
    };

    return (
        <>
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
                        <li><a href="#" onClick={openLoginModal}>Intra in cont</a></li>
                        <li><Link to="/register-company" onClick={() => setMenuOpen(false)}>Creaza-ti cont</Link></li>
                    </ul>
                </nav>
            </div>
        </header>

        {/* Login Modal */}
        <LoginModal isOpen={loginModalOpen} onClose={closeLoginModal} />
        </>
    )
}
export default Header;
