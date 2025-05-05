import React from 'react';
import './footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer-text">
                &copy; {currentYear} Piyush Singh. All rights reserved.
            </p>
            <div className="footer-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </footer>
    );
};

export default Footer;
