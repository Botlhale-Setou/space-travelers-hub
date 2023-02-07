import React from 'react';
import Nav from './Nav';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="headerMain">
        <img src={logo} />
        <h1>Space Travelers' Hub</h1>
      </div>
      <Nav />
    </div>
  );
};

export default Header