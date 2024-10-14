// Importation des divers éléments
import React, { useState, useContext } from 'react';
import profileImage from '../assets/images/profile.jpg';
import logoGitHub from '../assets/images/logo-github.png';
import { LanguageContext } from '../LanguageContext';
import translations from '../translations';


// Déclaration des divers constantes
function Header() {
  const { language } = useContext(LanguageContext);
  const [mousePosition, setMousePosition] = useState({ x: '50%', y: '50%' });
  const [isHovering, setIsHovering] = useState(false);

  // Constante pour le déplacement de la souris
  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x: `${x}%`, y: `${y}%` });
  };

  // Constante pour l'entrée de la souris 
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  // Constante pour la sortie de la souris
  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: '50%', y: '50%' });
  };


  // On return l'HTML
  return (
    <header>

      <div id="video-container">
        <video className="fade-in" autoPlay muted loop>
          <source src="/assets/video/oui.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="header-content">
        <div className="header-text">
          <h1>Timothée <br />DAEMERS</h1>
          <h2>{translations[language].developer}</h2>
          <p>{translations[language].description1}</p>
          <p>{translations[language].description2}</p>
          <div className="buttons-container">
            <a href="#contact" className="button buttonContact">
              {translations[language].contactMe}
            </a>
            <a href="https://github.com/Mogwaille" target="_blank" rel="noopener noreferrer" className="button buttonGitHub">
              <img src={logoGitHub} alt="Logo GitHub" className="logo-github" />
              GITHUB
            </a>
          </div>
        </div>

        <div
          className="profile-container"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            '--mouseX': isHovering ? mousePosition.x : '50%',
            '--mouseY': isHovering ? mousePosition.y : '50%',
          }}
        >
          <img src={profileImage} alt="Photo de profil" className="profile-image" />
        </div>
        <div className="scroll-indicator">
          <div className="scroll-text">
            SCROLL
          </div>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;