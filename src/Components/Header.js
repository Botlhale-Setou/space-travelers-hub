import React from 'react';
import Nav from './Nav';
import logo from '../assets/logo.png';

function Header() {
  return (
    <div className="header">
      <div className="headerMain" data-testid="header">
        <img src={logo} alt="Logo" />
        <h1 data-testid="siteTitle">Space Travelers&apos; Hub</h1>
      </div>
      <Nav />
    </div>
  );
}

export default Header;
