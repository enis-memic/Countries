import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMicrophone, FaEllipsisH } from 'react-icons/fa';
import { SlArrowLeft } from 'react-icons/sl';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navigation">
      <NavLink to="/" element>
        <SlArrowLeft className="btn" />
      </NavLink>
      <h2 className="heading">Countries Statistics</h2>

      <div className="position">
        <FaMicrophone />
        <FaEllipsisH />
      </div>
    </div>
  );
}

export default Navbar;