import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMicrophone, FaEllipsisH, FaChevronLeft } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navigation">
      <NavLink to="/" element>
        <FaChevronLeft className="icon-nav" />
      </NavLink>
      <h1 className="heading">Countries</h1>

      <div className="position">
        <FaMicrophone className="icon-nav" />
        <FaEllipsisH className="icon-nav" />
      </div>
    </div>
  );
}

export default Navbar;
