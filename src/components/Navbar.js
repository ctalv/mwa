import React, { useState, useEffect } from 'react';
import "../assets/styles/navbar.css";


import { Link } from "react-router-dom";

function Navbar({ currentPage, handlePageChange, pageColor, pageBGColor, pageLogoMark, pageLogoType }) {
  
  function clickNavEvent(page) {
    handlePageChange(page)
  }
  
  return (
    <nav className={`nav ${pageBGColor}`}>

      <menu className="d-flex justify-content-around">
        <li className="navitem">
          <Link
            to="/"
            onClick={() => clickNavEvent('Home')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={`nav-link padding-nav ${pageColor}`}
          >
            HOME
          </Link>
        </li>

        <li className="navitem">
          <Link
            to="projects"
            onClick={() => clickNavEvent('Projects')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={`nav-link padding-nav ${pageColor}`}
          >
            GALLERY
          </Link></li>
        <li className="navitem">
          <Link className="navlogo" to="/">
            <div className="navlogo" >
              <img className="navlogomark" src={`${pageLogoMark}`} alt="Splash image placeholder" priority />
              <img className="navlogotype" src={`${pageLogoType}`} alt="Splash image placeholder" priority />
            </div>
          </Link>
        </li>
        <li className="navitem">
          <Link
            to="about"
            onClick={() => clickNavEvent('About')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={`nav-link padding-nav ${pageColor}`}
          >ABOUT
          </Link></li>
        <li className="navitem">
          <Link
            to="contact"
            onClick={() => clickNavEvent('Contact')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={`nav-link padding-nav ${pageColor}`}
          >CONTACT
          </Link></li>
      </menu>
    </nav>
  );
}

export default Navbar;