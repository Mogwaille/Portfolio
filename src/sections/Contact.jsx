import React, { useState } from 'react';
import logoGitHub from '../assets/images/logo-github.png';
import logoLinkedIn from '../assets/images/logo-linkedin.png';

function Contact() {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('td.webdev@outlook.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <footer id="contact" className="contact-section">
      <div className="social-media-section">
        <div className="social-media">
          <h2>Réseaux sociaux et liens</h2>
          <p>Vous pouvez me retrouver sur ces plateformes 👇</p>
          <div className="buttons">
            <a
              href="https://github.com/Mogwaille"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              <img src={logoGitHub} alt="Logo GitHub" className="logo-social" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/timoth%C3%A9e-daemers-0128ba1b7/?originalSubdomain=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button linkedin"
            >
              <img src={logoLinkedIn} alt="Logo LinkedIn" className="logo-social" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <div className="contact-form-section">
        <div className="contact-form">
          <h2>Contactez-moi</h2>
          <div className="email-container">
            <span className="email-address">td.webdev@outlook.com</span>
            <button className="copy-button" onClick={copyEmailToClipboard}>
              {isCopied ? 'Copié !' : '📋'}
            </button>
          </div>
          <p>Ou, si vous préférez, remplissez le formulaire ci-dessous :</p>
          <form>
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" placeholder="Votre nom" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Votre email" required />

            <label htmlFor="subject">Sujet</label>
            <input type="text" id="subject" name="subject" placeholder="Objet de votre message" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Votre message..." rows="5" required></textarea>

            <button type="submit" className="submit-button">Envoyer</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Contact;