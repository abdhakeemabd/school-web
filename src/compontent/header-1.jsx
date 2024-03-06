// Header.js
import React from 'react';
import '../style/header-1.css'; // Import CSS file for styling

function Header() {
  return (
    <header>
      <div className="logo">Your Logo</div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
