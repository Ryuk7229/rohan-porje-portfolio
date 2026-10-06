import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PillNav.css";

const PillNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="pill-nav">
      <div className="pill-nav-inner">
        {/* Logo */}
        <Link to="/" className="pill-nav-logo" onClick={closeMenu}>
          ROHAN PORJE
        </Link>

        {/* Desktop Navigation */}
        <div className="pill-nav-links">
          <a href="/#home">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Work</a>
          <a href="/#contact">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`pill-nav-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`pill-mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="/#home" onClick={closeMenu}>
          Home
        </a>

        <a href="/about" onClick={closeMenu}>
          About
        </a>

        <a href="/projects" onClick={closeMenu}>
          Work
        </a>

        <a href="/#contact" onClick={closeMenu}>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default PillNav;
