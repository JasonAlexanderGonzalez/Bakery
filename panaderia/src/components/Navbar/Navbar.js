import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedkit } from '@fortawesome/free-solid-svg-icons'; // Importa el ícono de farmacia (o el que desees)

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">
          <FontAwesomeIcon icon={faMedkit} className="icon" /> Pharmacy
        </h1>
        <ul className="navbar-links">
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/nosotros">Product</Link>
          </li>
          <li>
            <Link to="/servicios">Services</Link>
          </li>
          <li>
            <Link to="/contacto">Settings</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
