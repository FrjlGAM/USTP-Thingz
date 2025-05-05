import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar-buttons">
          <button className="btn" onClick={() => navigate("/login")}>Login</button>
          <button className="btn" onClick={() => navigate("/register")}>Register</button>
        </div>
      </div>

      <div className="main-content">
        <nav className="navbar">
          <img src="/ustp-things-logo.png" alt="USTP Things" className="logo" />
          <div className="nav-items">
            <input type="text" placeholder="Search" className="search-input" />
            <div className="cart-icon-container">
              <img src="/Shopping cart.png" alt="Shopping cart" className="cart-icon" />
            </div>
          </div>
        </nav>

        <div className="hero">
          <img src="/hero.png" alt="Hero Section" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
