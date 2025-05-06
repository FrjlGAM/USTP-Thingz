import React from 'react';
import './Terms.css';

const Terms = ({ onClose }) => {
  return (
    <div className="terms-overlay">
      <div className="terms-modal">
        <img className="terms-logo" src="/ustp-things-logo.png" alt="USTP Things Logo" />
        <div className="terms-title">Terms and Conditions</div>

        <div className="terms-body">
          <div className="terms-subtext">
            By proceeding with the verification process on USTP Things, you confirm and agree to the following terms and conditions
          </div>

          <div className="terms-section">
            <strong>Accuracy of Information</strong>
            <ul>
              <li>You confirm all registration details are accurate and up-to-date.</li>
              <li>False information may result in suspension or termination.</li>
            </ul>
          </div>

          <div className="terms-section">
            <strong>Verification Process</strong>
            <ul>
              <li>Use valid USTP credentials.</li>
              <li>Sellers must provide documentation and follow platform policies.</li>
            </ul>
          </div>

          <div className="terms-section">
            <strong>Use of Account</strong>
            <ul>
              <li>Your account is personal and non-transferable.</li>
              <li>Keep credentials confidential.</li>
            </ul>
          </div>

          <div className="terms-section">
            <strong>Compliance with Platform Rules</strong>
            <ul>
              <li>Follow all platform guidelines.</li>
              <li>Misuse may lead to suspension or removal.</li>
            </ul>
          </div>

          <div className="terms-section">
            <strong>Liability</strong>
            <ul>
              <li>USTP Things facilitates transactions but is not responsible for item quality.</li>
              <li>Ensure safe and secure transactions.</li>
            </ul>
          </div>

          <div className="terms-section">
            <strong>Agreement to Terms</strong>
            <ul>
              <li>You agree to these terms by completing registration.</li>
              <li>Violation may result in account restrictions or removal.</li>
            </ul>
          </div>

          <button className="popup-register-button" onClick={onClose}>
            Proceed
          </button>
        </div>

        <img
          src="/X button.png"
          alt="Close"
          className="terms-close-icon"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default Terms;
