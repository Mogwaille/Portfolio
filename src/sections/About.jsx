// Importation des divers éléments
import React, { useState, useContext } from 'react';
import profile2 from '../assets/images/profile2.jpg';
import { LanguageContext } from '../LanguageContext';
import translations from '../translations';


// Déclaration des divers constantes
function About() {
  const { language } = useContext(LanguageContext);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x: `${x}%`, y: `${y}%` });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: '50%', y: '50%' });
  };


  // On return l'HTML
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div
          className="about-image"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            '--mouseX': isHovering ? mousePosition.x : '50%',
            '--mouseY': isHovering ? mousePosition.y : '50%',
          }}
        >
          <img src={profile2} alt="Photo de profil" className="about-illustration" />
        </div>
        <div className="about-text">
          <h2>{translations[language].aboutTitle}</h2>
          <p dangerouslySetInnerHTML={{ __html: translations[language].aboutDescription1 }}></p>
          <p dangerouslySetInnerHTML={{ __html: translations[language].aboutDescription2 }}></p>
        </div>
      </div>
    </section>
  );
}

export default About;