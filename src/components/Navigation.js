import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = (props) => (
  <div id="myNav" className="overlay">
    <a className="closebtn" onClick={() => props.closeNav()}>&times;</a>
    <div className="overlay-content">
      <Link to="/" onClick={() => props.closeNav()}>Home</Link>
      <Link to="/category/vitamin" onClick={() => props.closeNav()}>Vitamin Juice</Link>
      <Link to="/category/clothing" onClick={() => props.closeNav()}>Clothing</Link>
      <Link to="/category/supplement" onClick={() => props.closeNav()}>Supplements</Link>
      <Link to="/contact" onClick={() => props.closeNav()}>Contact</Link>
    </div>
  </div>
);

export default Navigation;
