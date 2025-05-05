import React from 'react';
import './Navbar.css';

export default function Navbar({ onLoginClick, onSignupClick }) {
  return (
    <div className="container">
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <div className="navbar-buttons">
          <button className="navbar-button" onClick={onLoginClick}>
            Login
          </button>
          <button className="navbar-button" onClick={onSignupClick}>
            Signup
          </button>
        </div>
      </nav>
    </div>
  );
}
