import React from "react";
import "../assets/styles/navbar.css";
import logomarkSaddle from "../assets/images/MWA-logomark-saddle.png"

function Navbar({ currentPage, handlePageChange }) {
  function clickNavEvent (page)  {
    handlePageChange(page)
    var checkbox = document.querySelector('.check');
    checkbox.checked = false;
  }
  return (
    <nav>
      <img className="navlogo" src={logomarkSaddle} alt="Splash image placeholder" priority />
      <label className="hamburger">
        <input class="check" type='checkbox' />
      </label>
      <div class="navlist">
      <menu className="text-center">
        <li className="navitem">
          <a
            href="#home"
            onClick={() => clickNavEvent('Home')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>

        <li className="navitem">
          <a
            href="#projects"
            onClick={() => clickNavEvent('Projects')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </a></li>
        <li className="navitem">
          <a
            href="#about"
            onClick={() => clickNavEvent('About')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >About
          </a></li>
        <li className="navitem">
          <a
            href="#contact"
            onClick={() => clickNavEvent('Contact')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >Contact
          </a></li>
      </menu>
      </div>
    </nav>
  );
}

export default Navbar;