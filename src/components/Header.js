import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import '../styles/Header.css'
function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };



  return (
    <div className="header">
      <nav>
        <div className="nav__header">
          <div className="nav__logo">
            <a href="#">
              <img src={logo} alt="logo" />Madhav-Singh
            </a>
          </div>
          <div className="nav__menu__btn" id="menu-btn" onClick={toggleNav}>
            <span>
              <i className={navOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
            </span>
          </div>
        </div>
        <ul className={`nav__links ${navOpen ? 'open' : ''}`} id="nav-links">
          <li className="link">
            <a href="#home">Home</a>
          </li>
          <li className="link">
            <a href="#skills">Skills</a>
          </li>
          <li className="link">
            <a href="#experience">Experience</a>
          </li>
          <li className="link">
            <a href="#projects">Projects</a>
          </li>
          <li className="link">
            <button className="btn">Hire</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
