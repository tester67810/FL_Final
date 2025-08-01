import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import arrow from "../Assets/arrow.png";
import logoc from "../Assets/logoclean.jpg";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  return (
    <nav className="navbar">
      <div className="logo">
          <Link to="/">
                     <img src={logoc} alt="Logo" />
                  </Link>
       
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>☰</button>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>

        <li
          className={`services-menu ${servicesOpen ? "open" : ""}`}
          onClick={() => setServicesOpen(!servicesOpen)}
        >
          <span className="nav-link service-link">
            Services <img src={arrow} alt="arrow" className="arrow" />
          </span>
          <div className="dropdown">
            <div className="dropdown-column">
              <h4>House Cleaning</h4>
              <Link to="/regular-cleaning">Regular Cleaning</Link>
              <Link to="/move-out-and-move-in">Move Out & Move In</Link>
              <Link to="/deep-cleaning">Deep Cleaning</Link>
              <Link to="/post-construction">Post Construction</Link>
               <Link to="/carpet-and-upholstery">Carpet & Upholstery</Link>
            </div>
            <div className="dropdown-column">
              <h4>Exterior Cleaning</h4>
              <Link to="/roof-cleaning">Roof Cleaning</Link>
              <Link to="/gutter-cleaning">Gutter Cleaning</Link>
              <Link to="/house-washing">House Washing</Link>
              <Link to="/pressure-washing">Pressure Washing</Link>
            </div>
            <div className="dropdown-column">
            <h4>
                <Link to="/mold-remediation" style={{ color: 'white', fontWeight: 800 , fontSize: 16 }}>
                  Mold Remediation
                </Link>
            </h4> 
            </div>
             <div className="dropdown-column">
              <h4>Commercial Cleaning</h4>
              <Link to="/construction">Construction Final Clean</Link>
              <Link to="/corporate-office">Corporate Office Cleaning</Link>
              <Link to="/retail-space"> Retail Spaces Cleaning</Link>
              <Link to="/vrbo-and-airbnb"> VRBO & AIRBNB Cleaning</Link>
            </div>
          </div>
        </li>

        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/house_cleaning" onClick={() => setMenuOpen(false)}>Booking</Link></li>
        <li><Link to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link></li>
                <li><Link to="/faqs" onClick={() => setMenuOpen(false)}>FAQs</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>       

      </ul>

      {/* Desktop-only login button */}
      <Link to="/house_cleaning" className="login-btn desktop-only">Book Now</Link>
    </nav>
  );
}

export default Navbar;
