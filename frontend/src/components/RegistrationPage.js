import React from 'react';
import './RegistrationPage.css';

const RegistrationPage = () => {
  return (
    <div className="registration-overlay">
      <div className="background-blur" />
      <div className="registration-popup">
        <img className="popup-logo" src="https://placehold.co/178x110" alt="Logo" />
        <div className="popup-title">Register</div>

        <div className="popup-input">
          <label>Email</label>
          <input type="text" />
        </div>

        <div className="popup-input">
          <label>Password</label>
          <input type="password" />
        </div>

        <div className="popup-input">
          <label>Confirm Password</label>
          <input type="password" />
        </div>

        <button className="popup-register-button">Register</button>
      </div>
    </div>
  );
};

export default RegistrationPage;
