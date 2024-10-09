import React from 'react';
import sonicRun from '../assets/images/sonicrun.gif';
import sonicFall from '../assets/images/sonicfall.gif';

function Education() {
  return (
    <section id="education" className="education-section">
       <div className="cercleNoir"></div>
       <img src={sonicRun} alt="Sonic qui court" className="sonic-running" />
       <img src={sonicFall} alt="Sonic sur le point de tomber" className="sonic-fall" />
      <h2 className="education-title">Mes Formations</h2>
      <div className="education-container">
        <div className="education-item">
          <h3>Formation Intégrateur Web</h3>
          <p>2023-2024</p>
          <p>Diplôme de niveau 5 (bac +2), OpenClassrooms</p>
        </div>
        <div className="education-item">
          <h3>Chargé de communication option digitale</h3>
          <p>2020-2023</p>
          <p>Bachelor (bac +3), XP School Lille</p>
        </div>
        <div className="education-item">
          <h3>Baccalauréat économique et social</h3>
          <p>2016-2019</p>
          <p>Lycée Notre Dame des Anges, Saint-Amand-les-Eaux</p>
        </div>
      </div>
    </section>
  );
}

export default Education;