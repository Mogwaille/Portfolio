// Importation des divers éléments
import React, { useContext } from 'react';
import sonicRun from '../assets/images/sonicrun.gif';
import sonicFall from '../assets/images/sonicfall.gif';
import { LanguageContext } from '../LanguageContext';
import translations from '../translations';


// Déclaration des divers constantes
function Education() {
  const { language } = useContext(LanguageContext);


  // On return l'HTML
  return (
    <section id="education" className="education-section">
      <div className="cercleNoir"></div>
      <img src={sonicRun} alt="Sonic qui court" className="sonic-running" />
      <img src={sonicFall} alt="Sonic sur le point de tomber" className="sonic-fall" />
      <h2 className="education-title">{translations[language].educationTitle}</h2>
      <div className="education-container">
        <div className="education-item">
          <h3>{translations[language].integratorTitle}</h3>
          <p>2023-2024</p>
          <p>{translations[language].integratorDescription}</p>
        </div>
        <div className="education-item">
          <h3>{translations[language].communicationTitle}</h3>
          <p>2020-2023</p>
          <p>{translations[language].communicationDescription}</p>
        </div>
        <div className="education-item">
          <h3>{translations[language].baccalaureateTitle}</h3>
          <p>2016-2019</p>
          <p>Lycée Notre Dame des Anges, Saint-Amand-les-Eaux</p>
        </div>
      </div>
    </section>
  );
}

export default Education;