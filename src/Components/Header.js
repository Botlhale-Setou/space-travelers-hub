import React from 'react';
import Nav from './Nav';
import logo from '.../logo.png';


const Header = () => {
  return (
    <div>
        <img src={ logo }/>
        <h1>Space Travelers' Hub</h1>
        <Nav />
    </div>
  )
};

export default Header