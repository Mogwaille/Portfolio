// Importation des divers éléments
import React, { useState, useEffect } from 'react';
import '../assets/styles/loader.css';

// Déclaration des divers constantes
function Loader({ onTransitionEnd }) {
  const [isHidden, setIsHidden] = useState(false);
 
  // Divers paramètres du loader
  useEffect(() => {
    const wavesDuration = 5500;
    setTimeout(() => {
      setIsHidden(true);
      onTransitionEnd();
    }, wavesDuration);

  }, [onTransitionEnd]);


  // On return l'HTML
  return (
    <div className={`loader-container ${isHidden ? 'hidden' : ''}`}>
      <div className="loader-text">
        <span>Chargement...</span>
      </div>

      {/* Création de la vague en SVG */}
      <div className="waves-container">
        <svg viewBox="0 0 1440 320">
          <path fill="#4eb7f4" d="M0,128L60,138.7C120,149,240,171,360,186.7C480,203,600,213,720,192C840,171,960,128,1080,128C1200,128,1320,192,1380,224L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          <path fill="#269ddf" d="M0,128L60,117.3C120,107,240,85,360,80C480,75,600,85,720,106.7C840,128,960,160,1080,170.7C1200,181,1320,171,1380,165L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" opacity="0.5"></path>
          <path fill="#1b85d6" d="M0,128L60,138.7C120,149,240,171,360,186.7C480,203,600,213,720,192C840,171,960,128,1080,128C1200,128,1320,192,1380,224L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" opacity="0.3"></path>
        </svg>
      </div>

      <div className="rectangle"></div>
    </div>
  );
}

export default Loader;