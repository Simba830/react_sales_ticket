import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './images/your-logo.jpg'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './cssCustom/customStyles.css'; // Create a CSS file for styling

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" width="50" height="50" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
              <Link className="nav-link" to="/about">
                Despre noi
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/speakers' ? 'active' : ''}`}>
              <Link className="nav-link" to="/speakers">
                Vorbitori
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/team' ? 'active' : ''}`}>
              <Link className="nav-link" to="/team">
                Echipa
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/sponsors' ? 'active' : ''}`}>
              <Link className="nav-link" to="/sponsors">
                Sponsori
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            <button className="btn custom-button">Buy Ticket</button>
            
            </li>
            {/* Add more public page links here */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
