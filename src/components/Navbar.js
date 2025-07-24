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
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

function Navbar({ currentPage, handlePageChange, pageColor, pageBGColor, pageLogoMark, pageLogoType, pageMenuColor }) {
  function clickNavEvent(page)  {
    handlePageChange(page)
    var checkbox = document.querySelector('.check');
    if (checkbox) {
      checkbox.checked = false;
    }
  }

const { width } = useWindowSize();

  if (width < 1030) {
    return (
    <nav className={`nav ${pageBGColor}`}>
      <Link className="navlogo" to="/">
        <div className="navlogo">
          <img className="navlogomark" src={`${pageLogoMark}`} alt="Splash image placeholder" priority />
          <img className="navlogotype" src={`${pageLogoType}`} alt="Splash image placeholder" priority />
        </div>
      </Link>
      <label className="hamburger">
        <input className={`check ${pageMenuColor}`} type='checkbox' />
      </label>
      <div className={`navlist ${pageBGColor}`}>
      <menu className="text-center">
        <li className="navitem">
          <Link
            to="/"
            onClick={() => clickNavEvent('Home')}
            className={`nav-link ${pageColor}`}
          >
            Home
          </Link>
        </li>

        <li className="navitem">
          <Link
            to="projects"
            onClick={() => clickNavEvent('Projects')}
            className={`nav-link ${pageColor}`}
            // className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </Link></li>
        <li className="navitem">
          <Link
            to="about"
            onClick={() => clickNavEvent('About')}
            className={`nav-link ${pageColor}`}
          >About
          </Link></li>
        <li className="navitem">
          <Link
            to="contact"
            onClick={() => clickNavEvent('Contact')}
            className={`nav-link ${pageColor}`}
          >Contact
          </Link></li>
      </menu>
      </div>
    </nav>);
  } else {
    return (
    <nav className={`nav ${pageBGColor}`}>
      <menu className="contain d-flex justify-content-between">
          <li className="navitem">
            <Link
              to="/"
              onClick={() => clickNavEvent('Home')}
              className={`nav-link padding-nav ${pageColor}`}
            >
              HOME
            </Link>
          </li>
          <li className="navitem">
            <Link
              to="projects"
              onClick={() => clickNavEvent('Projects')}
              className={`nav-link padding-nav ${pageColor}`}
            >
              GALLERY
            </Link>
          </li>
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
              className={`nav-link padding-nav ${pageColor}`}
            >ABOUT
            </Link>
          </li>
          <li className="navitem">
            <Link
              to="contact"
              onClick={() => clickNavEvent('Contact')}
              className={`nav-link padding-nav ${pageColor}`}
            >CONTACT
            </Link>
          </li>
      </menu>
    </nav>);

  }
  

}

export default Navbar;