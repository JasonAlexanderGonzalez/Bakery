import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const handleIconClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-icon whatsapp" onClick={() => handleIconClick('https://wa.me/88623548')}>
  {/* Icono de WhatsApp aquí */}
  <FontAwesomeIcon icon={faWhatsapp} size="2x" />
  <p>WhatsApp</p>
</div>

<div className="footer-icon facebook" onClick={() => handleIconClick('https://www.facebook.com/UMAILimon')}>
  {/* Icono de Facebook aquí */}
  <FontAwesomeIcon icon={faFacebook} size="2x" />
  <p>Facebook</p>
</div>

<div className="footer-icon instagram" onClick={() => handleIconClick('enlace-de-instagram')}>
  {/* Icono de Instagram aquí */}
  <FontAwesomeIcon icon={faInstagram} size="2x" />
  <p>Instagram</p>
</div>

      </div>
    </footer>
  );
};

export default Footer;
