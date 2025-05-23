import React from "react";
import "../assets/styles/footer.css";
import instagram from "../assets/images/Instagram_icon.png"
import linkedin from "../assets/images/LI-In-Bug.png"
import { Link } from "react-router-dom";



function Footer({ currentPage, handlePageChange, pageColor, pageBGColor, pageLogoMark }) {
  function clickNavEvent(page) {
    handlePageChange(page)
    // var checkbox = document.querySelector('.check');
    // checkbox.checked = false;
  }
  return (
    <footer className={`${pageColor}`}>
      <div className="contain d-flex justify-content-between">
        <div className="footerleft">
          <div className="footerlogodiv">
            <a href="/"><img className="footerlogo" src={pageLogoMark} alt="Mitchell Wilson Main Logo"
              priority />
            </a>
          </div>
          <div className="socials">
            <a href="https://www.instagram.com/matthewmitchellarchitecture/">
              <img className="socialslogo" src={instagram} alt="Instagram" priority /></a>
            <a href="https://www.linkedin.com/company/matthew-mitchell-architecture/">
              <img className="socialslogo" src={linkedin} alt="LinkedIn" priority /></a>
          </div>
        </div>
        <div className="text-center mininav">
          <li className="mininavitem">
            <Link
              to="/"
              onClick={() => clickNavEvent('Home')}
              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >
              HOME
            </Link>
          </li>

          <li className="mininavitem">
            <Link
              to="projects"
              onClick={() => clickNavEvent('Projects')}
              className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
            >
              GALLERY
            </Link></li>
          <li className="mininavitem">
            <Link
              to="about"
              onClick={() => clickNavEvent('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >ABOUT
            </Link></li>
          <li className="mininavitem">
            <Link
              to="contact"
              onClick={() => clickNavEvent('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >CONTACT
            </Link></li>
        </div>
        <div>
          <ul className="info">
            <li className="infoitem">
              Mitchell Wilson Architecture
            </li>
            <li className="infoitem">
              281.744.4304
            </li>
            <li className="infoitem">
              matthew@mmitchellarch.com
            </li>
            <li className="infoitem">
              4299 San Felipe St #135,
            </li>
            <li className="infoitem">
              Houston, TX 77027
            </li>
          </ul>
        </div>
        <div class="iframecontainer">
          <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8281.371658381942!2d-95.45406552380794!3d29.74572697507535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c14ed5683427%3A0xe3af08e150acc879!2sMatthew%20Mitchell%20Architecture!5e1!3m2!1sen!2sus!4v1736561779216!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <div className={`footerbottom ${pageBGColor}`} >
        Website by Claire Alverson
      </div>

    </footer>
  );
}

export default Footer;