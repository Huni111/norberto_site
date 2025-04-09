import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Norberto Tailor</h3>
          <p>
            Servicii de croitorie premium cu accent pe calitate și satisfacția clienților.
            Creăm ținute perfecte din 1995.
          </p>
        </div>

        <div className="footer-section">
          <h3>Contactează-ne</h3>
          <ul className="contact-list">
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>Strada Croitorilor 123, Cartierul Fashion, Oraș</span>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <span>+40 755 123 456</span>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <span>contact@norbertotailor.ro</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Linkuri Rapide</h3>
          <ul className="quick-links">
            <li><Link to="/">Acasă</Link></li>
            <li><Link to="/services">Servicii</Link></li>
            <li><Link to="/about">Despre Noi</Link></li>
            <li><Link to="/products">Produse</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Urmărește-ne</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://tiktok.com/@norberto_tailor" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Norberto Tailor. Toate drepturile rezervate.</p>
      </div>
    </footer>
  );
};

export default Footer;
