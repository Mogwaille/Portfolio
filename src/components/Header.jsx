import React, { useState } from 'react';
import profileImage from '../assets/images/profile.jpg';
import logoGitHub from '../assets/images/logo-github.png';

function Header() {
  const [mousePosition, setMousePosition] = useState({ x: '50%', y: '50%' });
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
    setMousePosition({ x: '50%', y: '50%' }); // Réinitialise la lumière au centre
  };

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
          <h2>Développeur Front-End.</h2>
          <p>Étudiant de 23 ans, je suis en formation <br />dans le développement web depuis bientôt 1 an.</p>
          <div className="buttons-container">
            <a href="#contact" className="button buttonContact">
              ME CONTACTER
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
        <div class="scroll-indicator">
  <div class="scroll-text">SCROLL</div>
  <span></span>
</div>
      </div>
    </header>
  );
}

export default Header;