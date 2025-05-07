import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">MyApp</h1>
      <ul className="nav-links">
        <li>
          <a href="#">Ana Sayfa</a>
        </li>
        <li>
          <a href="#">Hakkımızda</a>
        </li>
        <li>
          <a href="#">İletişim</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
