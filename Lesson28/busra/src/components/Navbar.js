import React from 'react';

function Navbar({ onLoginClick, onSignupClick }) {
  return (
    <div className="container">
      <nav>
        <h1>MyApp</h1>
        <button onClick={onLoginClick}>Login</button>
        <button onClick={onSignupClick}>Signup</button>
      </nav>
    </div>
  );
}

export default Navbar;
