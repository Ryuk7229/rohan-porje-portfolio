import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            ROHAN<span>.</span>
          </Link>

          <p>
            Creative Technologist crafting digital experiences through design,
            development and technology.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-column">
          <span className="footer-label">NAVIGATION</span>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Work</Link>
        </div>

        {/* Connect */}
        <div className="footer-column">
          <span className="footer-label">CONNECT</span>

          <a
            href="https://www.linkedin.com/in/rohanporje"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <span className="arrow-icon">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 13L13 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M6 3H13V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>

          <a
            href="https://www.behance.net/rohanporje"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
            <span className="arrow-icon">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 13L13 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M6 3H13V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>

          <a
            href="https://github.com/Ryuk7229"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <span className="arrow-icon">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 13L13 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M6 3H13V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Large footer text */}
      <div className="footer-big-text">LET'S CREATE</div>

      <div className="footer-bottom">
        <span>© {currentYear} Rohan Porje</span>

        <span>DESIGN × CODE × EXPERIENCE</span>

        <a href="#top" className="footer-back-top">
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
