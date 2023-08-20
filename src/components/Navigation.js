import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "./images/your-logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cssCustom/customStyles.css"; // Create a CSS file for styling
import { AppContext } from "../store/AppContext";

function Navigation() {
  const location = useLocation();
  const navigation = useNavigate();
  const { authToken, setOpenAdminPanel } = useContext(AppContext);

  const handleClickAdminPanel = () => {
    if (!authToken) {
      setOpenAdminPanel(true);
      return;
    }

    navigation("/admin");
  };

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
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li
              className={`nav-item ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/about">
                Despre noi
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/speakers" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/speakers">
                Vorbitori
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/team" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/team">
                Echipa
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/sponsors" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/sponsors">
                Sponsori
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/admin" ? "active" : ""
              }`}
            >
              <button
                onClick={handleClickAdminPanel}
                className="nav-link w-100 d-flex"
              >
                Admin
              </button>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/buy-ticket" ? "active" : ""
              }`}
            >
              <Link className="nav-link btn custom-button" to="/buy-ticket">
                Buy Ticket
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
