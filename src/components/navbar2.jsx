import React from 'react';
import './navbar2.css'; // Import the CSS file for styling

function Navbar2() {
  return (
    <div className="navbar2">
      <div className="navbar2-content">
        <div className="navbar2-left">
          <img src="/assets/bitDurgLogo.jpg" className="logo" alt="BIT DURG Logo" />
          <div className="vertical-line"></div>
          <div className="institution-info">
            <strong>BHILAI INSTITUTE OF TECHNOLOGY, DURG (CG)</strong><br />
            <strong>(Seth BalKrishan Memorial) Estd. 1986</strong>
          </div>
        </div>
        <div className="navbar2-right">
          <div className="icons-container">
            <img src="/assets/ieee-bit-icon.webp" className="icon" alt="IEEE BIT Logo" />
            <div className="icon-title">IEEE BIT</div>
          </div>
          <div className="icons-container">
            <img src="/assets/ieee-cs-icon.webp" className="icon" alt="IEEE Computer Science Logo" />
            <div className="icon-title">IEEE Computer Science</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar2;
