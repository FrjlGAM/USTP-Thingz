// ForgetPass.js
import React from 'react';
import './Popup.css'; // For styling the popup (optional)

const ForgetPass = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Forgot Password</h2>
        <p>Please enter your email to reset your password.</p>
        <input type="email" placeholder="Enter your email" />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ForgetPass;
