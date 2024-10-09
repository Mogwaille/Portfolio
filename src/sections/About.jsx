import React, { useState } from 'react';
import profile2 from '../assets/images/profile2.jpg'; // Assurez-vous de mettre le bon chemin

function About() {
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
          <h2>À propos de moi</h2>
          <p>Je m'appelle Timothée Daemers, j'ai 23 ans et je suis <strong>développeur web</strong> avec une <strong>spécialisation en Front-End et React.</strong></p>
          <p>J'aime créer des <strong>interfaces dynamiques</strong> et des <strong>expériences utilisateur immersives.</strong></p>
        </div>
      </div>
    </section>
  );
}

export default About;