import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
          <nav className="navbar">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    </div>
  );
}
export default Navbar;