import React from 'react';
import './Terms.css';

function Terms() {
  return (
    <div className="terms-container">
      <img className="terms-logo" src="/ustp-things-logo.png" alt="USTP Things Logo" />
      <div className="terms-title">Terms and Conditions</div>
      <div className="terms-subtitle">
        By proceeding with the verification process on USTP Things, you confirm and agree to the following terms and conditions
      </div>

      <div className="terms-content">
        <h2>Accuracy of Information</h2>
        <p>
          You confirm that all details provided during registration (including USTP credentials, name, and contact information) are accurate, complete, and up-to-date.
          Any false, misleading, or incorrect information may result in the suspension or termination of your account.
        </p>

        <h2>Verification Process</h2>
        <p>
          USTP students must register using valid USTP credentials to gain access as buyers and sellers.
          Sellers, including businesses, must provide the necessary documents for approval and agree to the platform’s policies.
        </p>

        <h2>Use of Account</h2>
        <p>
          Your verified account is personal and non-transferable.
          You are responsible for maintaining the confidentiality of your account credentials and ensuring that your account is used only by you.
        </p>

        <h2>Compliance with Platform Rules</h2>
        <p>
          You agree to comply with all USTP Things policies, including but not limited to guidelines on posting, transactions, and interactions with other users.
          Any misuse of the platform may result in account suspension or permanent removal.
        </p>

        <h2>Liability</h2>
        <p>
          USTP Things is a facilitator for buying and selling learning materials and is not responsible for the quality, condition, or legitimacy of the items listed.
          Users must ensure safe and secure transactions.
        </p>

        <h2>Agreement to Terms</h2>
        <p>
          By completing the verification process, you acknowledge that you have read, understood, and agreed to these terms and conditions.
          <br />
          Failure to adhere to these terms may result in restrictions on your account or removal from the platform.
        </p>
      </div>

      <div className="terms-proceed-btn-bg"></div>
      <div className="terms-proceed-btn-text">Proceed</div>

      <div className="terms-close-icon-bg"></div>
      <div className="terms-close-icon-line1"></div>
      <div className="terms-close-icon-line2"></div>
    </div>
  );
}

export default Terms;
