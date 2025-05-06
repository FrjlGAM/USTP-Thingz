import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Terms from './Terms';
import './RegistrationPage.css';

const RegistrationPage = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleRegister = () => {
    const newErrors = {};

    if (!email) newErrors.email = 'Email is required.';
    if (!password) newErrors.password = 'Password is required.';
    if (!confirmPassword) newErrors.confirmPassword = 'Confirm Password is required.';
    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }
    if (!agreed) newErrors.terms = 'You must agree to the terms and conditions.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert('Registered successfully!');
    }
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-buttons">
          <button className="btn" onClick={() => navigate('/')}>Login</button>
          <button className="btn active">Register</button>
        </div>
      </div>

      {/* Main Content */}
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

        {/* Registration Popup */}
        <div className="registration-popup">
          <img
            src="/X button.png"
            alt="Close"
            className="close-button-img"
            onClick={() => navigate('/')}
          />

          <img className="popup-logo" src="/ustp-things-logo.png" alt="USTP Things Logo" />
          <div className="popup-title">Registration</div>

          <div className="popup-input">
            <label>Email</label>
            <div className="input-icon-wrapper">
              <input
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <img src="/Email.png" alt="Email Icon" className="input-icon" />
            </div>
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>

          <div className="popup-input">
            <label>Password</label>
            <div className="input-icon-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={showPassword ? '/Eye.png' : '/Eye off.png'}
                alt="Toggle Password"
                className="input-icon"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>

          <div className="popup-input">
            <label>Confirm Password</label>
            <div className="input-icon-wrapper">
              <input
                type={showConfirm ? 'text' : 'password'}
                autoComplete="new-password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <img
                src={showConfirm ? '/Eye.png' : '/Eye off.png'}
                alt="Toggle Confirm Password"
                className="input-icon"
                onClick={() => setShowConfirm(!showConfirm)}
              />
            </div>
            {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
          </div>

          <div className="terms-checkbox">
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
            />
            <label htmlFor="terms">
              I agree to the{' '}
              <button type="button" className="terms-link" onClick={() => setShowTerms(true)}>
                terms and conditions
              </button>
            </label>
          </div>
          {errors.terms && <div className="error-message">{errors.terms}</div>}

          <button className="popup-register-button" onClick={handleRegister}>
            Register
          </button>
        </div>

        {showTerms && <Terms onClose={() => setShowTerms(false)} />}
      </div>
    </div>
  );
};

export default RegistrationPage;
