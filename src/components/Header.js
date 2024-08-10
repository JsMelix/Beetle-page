import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://boletas.beetlejuicepelicula.com/images/tt.png" alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#section1">Home</a></li>
          <li><a href="#section2">Tickets</a></li>
          <li><a href="#section3">Info</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
