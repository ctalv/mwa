import React, { useState, useEffect } from 'react';
import "../assets/styles/navbar.css";
import { Link } from "react-router-dom";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

function Navbar({ currentPage, handlePageChange, pageColor, pageBGColor, pageLogoMark, pageLogoType }) {
  function clickNavEvent (page)  {
    handlePageChange(page)
    var checkbox = document.querySelector('.check');
    checkbox.checked = false;
  }

const { width } = useWindowSize();

  if (width < 768) {
    return (
    <nav className={`nav ${pageBGColor}`}>
      <Link className="navlogo" to="/">
        <div className="navlogo">
          <img className="navlogomark" src={`${pageLogoMark}`} alt="Splash image placeholder" priority />
          <img className="navlogotype" src={`${pageLogoType}`} alt="Splash image placeholder" priority />
        </div>
      </Link>
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
    </nav>);
  } else {
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
            </Link>
          </li>
          <li className="">
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
            </Link>
          </li>
          <li className="navitem">
            <Link
              to="contact"
              onClick={() => clickNavEvent('Contact')}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={`nav-link padding-nav ${pageColor}`}
            >CONTACT
            </Link>
          </li>
      </menu>
    </nav>);

  }
  

}

export default Navbar;