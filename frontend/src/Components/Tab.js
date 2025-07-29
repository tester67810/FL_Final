import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Tab.css";

function Tab() {
  return (
    <nav className="navbar1">
      <ul className="nav-links1">
        <li><Link to="/house_cleaning">House Cleaning</Link></li>
        <li><Link to="/exterior_cleaning">Exterior Cleaning</Link></li>
        <li><Link to="/carpet_cleaning">Carpet Cleaning</Link></li>
            <li><Link to="/commercial_cleaning">Commercial Cleaning</Link></li>
      </ul>
    </nav>
  );
}

export default Tab;
