import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

import logomarkHome from "../../assets/images/logos/MWA-logomark-saddle.png";
import logotypeHome from "../../assets/images/logos/MWA-logotype-saddle.png";
import logomarkProjects from "../../assets/images/logos/MWA-logomark-night.png";
import logotypeProjects from "../../assets/images/logos/MWA-logotype-night.png";
import logomarkAbout from "../../assets/images/logos/MWA-logomark-cognac.png";
import logotypeAbout from "../../assets/images/logos/MWA-logotype-cognac.png";
import logomarkContact from "../../assets/images/logos/MWA-logomark-forest.png";
import logotypeContact from "../../assets/images/logos/MWA-logotype-forest.png";

function Container({ children }) {
    const location = useLocation();
      const [pageColor, setpageColor] = useState('');
      const [pageBGColor, setpageBGColor] = useState('');
      const [pageMenuColor, setpageMenuColor] = useState('');
      const [pageLogoMark, setpageLogoMark] = useState('');
      const [pageLogoType, setpageLogoType] = useState('');
    
      useEffect(() => {
        switch (location.pathname) {
          case '/':
            setpageColor('color-home');
            setpageBGColor('bg-color-home');
            setpageMenuColor('menu-color-home');
            setpageLogoMark(logomarkHome);
            setpageLogoType(logotypeHome);
            break;
          case '/projects':
            setpageColor('color-projects');
            setpageBGColor('bg-color-projects');
            setpageMenuColor('menu-color-projects');
            setpageLogoMark(logomarkProjects);
            setpageLogoType(logotypeProjects);        
            break;
          case '/about':
            setpageColor('color-about');
            setpageBGColor('bg-color-about');
            setpageMenuColor('menu-color-about');
            setpageLogoMark(logomarkAbout);
            setpageLogoType(logotypeAbout);        
            break;
          case '/contact':
            setpageColor('color-contact');
            setpageBGColor('bg-color-contact');
            setpageMenuColor('menu-color-contact');
            setpageLogoMark(logomarkContact);
            setpageLogoType(logotypeContact);        
            break;
          default:
            setpageColor('color-home');
            setpageBGColor('bg-color-home');
            setpageMenuColor('menu-color-home');
            setpageLogoMark(logomarkHome);
            setpageLogoType(logotypeHome);        
        }
      }, [location]);

    return (
        <div>
        {children(pageColor, pageBGColor, pageMenuColor, pageLogoMark, pageLogoType)}
    </div>

    )
}

export default Container;
