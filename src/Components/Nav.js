import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <ul className="nav">
      <li>
        <Link className="link" to="/">
          Rockets
        </Link>
      </li>
      <li>
        <Link className="link" to="/Missions">
          Missions
        </Link>
      </li>
      <li>
        <Link className="link" to="/MyProfile">
          My Profile
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
