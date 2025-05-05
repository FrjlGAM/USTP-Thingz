import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar-buttons">
          <button className="btn" onClick={() => setShowLoginPopup(true)}>Login</button>
          <button className="btn" onClick={() => navigate("/register")}>Register</button>
        </div>
      </div>

      <div className="main-content">
        <nav className="navbar">
          <img src="/ustp-things-logo.png" alt="USTP Things" className="logo" />
          <div className="nav-items">
            <div className="search-box">
              <img src="/search.png" alt="Search Icon" className="search-icon" />
              <input type="text" placeholder="Search" className="search-input" />
            </div>
            <div className="cart-icon-container">
              <img src="/Shopping cart.png" alt="Shopping cart" className="cart-icon" />
            </div>
          </div>
        </nav>

        <div className="hero">
          <img src="/hero.png" alt="Hero Section" />
        </div>

        {/* Login Popup */}
        {showLoginPopup && (
          <div className="login-popup-overlay">
            <div className="login-popup">
              <button className="close-btn" onClick={() => setShowLoginPopup(false)}>×</button>
              <img src="/ustp-things-logo.png" alt="Logo" className="popup-logo" />
              <h2 className="login-title">Login</h2>
              <form className="login-form">
                <input type="text" placeholder="Email" className="login-input" />
                <input type="password" placeholder="Password" className="login-input" />
                <div className="login-options">
                  <label className="remember-me">
                    <input type="checkbox" /> Remember me
                  </label>
                  <a href="#" className="forgot-password">Forgot password?</a>
                </div>
                <button type="submit" className="login-submit">Login</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;