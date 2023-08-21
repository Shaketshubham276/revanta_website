import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import './footer.css'; // Import your CSS file for styling

function SocialFooter() {
  return (
    <footer className="social-footer">
      <div className="container">
        <div className="social-icons">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
            <span className="icon-label">Instagram</span>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
            <span className="icon-label">Facebook</span>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
            <span className="icon-label">Twitter</span>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="icon-label">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default SocialFooter;
