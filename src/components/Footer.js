import React from "react";
import "../assets/styles/footer.css";
import mainLogo from "../assets/images/MWA-main-logo-saddle.png"
import instagram from "../assets/images/Instagram_icon.png"
import linkedin from "../assets/images/LI-In-Bug.png"

function Footer() {
    return (
        <footer>
        <div class="footertop">
          <div class="footerlogodiv">
            <a href="/"><img class="footerlogo" src={mainLogo} alt="Mitchell Wilson Main Logo"
                priority />
            </a>
          </div>
          <div class="socials">
            <a href="https://www.instagram.com/matthewmitchellarchitecture/">
              <img class="socialslogo" src={instagram} alt="Instagram" priority /></a>
            <a href="https://www.linkedin.com/company/matthew-mitchell-architecture/">
              <img class="socialslogo" src={linkedin} alt="LinkedIn" priority /></a>
          </div>
        </div>
        <div class="footerbottom">
          Website by Claire Alverson
        </div>
      </footer>
    );
}

export default Footer;