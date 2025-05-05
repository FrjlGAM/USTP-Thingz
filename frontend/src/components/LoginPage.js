import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-overlay">
      <div className="background-blur" />
      <div className="login-popup">
        <img className="popup-logo" src="https://placehold.co/178x110" alt="Logo" />
        <div className="popup-title">Login</div>

        <div className="popup-input">
          <label>Email</label>
          <input type="text" />
        </div>

        <div className="popup-input">
          <label>Password</label>
          <input type="password" />
        </div>

        <div className="popup-options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="/">Forgot Password</a>
        </div>

        <button className="popup-login-button">Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
