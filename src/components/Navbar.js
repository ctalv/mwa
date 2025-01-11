import React from "react";
import "../assets/styles/navbar.css";
import logomarkSaddle from "../assets/images/MWA-logomark-saddle.png";
import logomarkMain from "../assets/images/MWA-main-logo-saddle.png";
import { Link } from "react-router-dom";

function Navbar({ currentPage, handlePageChange }) {
  function clickNavEvent (page)  {
    handlePageChange(page)
    var checkbox = document.querySelector('.check');
    checkbox.checked = false;
  }
  return (
    <nav>
      <img className="navlogo" src={logomarkMain} alt="Splash image placeholder" priority />
      <label className="hamburger">
        <input className="check" type='checkbox' />
      </label>
      <div className="navlist">
      <menu className="text-center">
        <li className="navitem">
          <Link
            to="/"
            onClick={() => clickNavEvent('Home')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
        </li>

        <li className="navitem">
          <Link
            to="projects"
            onClick={() => clickNavEvent('Projects')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </Link></li>
        <li className="navitem">
          <Link
            to="about"
            onClick={() => clickNavEvent('About')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >About
          </Link></li>
        <li className="navitem">
          <Link
            to="contact"
            onClick={() => clickNavEvent('Contact')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >Contact
          </Link></li>
      </menu>
      </div>
    </nav>
  );
}

export default Navbar;