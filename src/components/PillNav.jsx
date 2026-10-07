import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PillNav.css";

const PillNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    closeMenu();

    // If already on homepage, scroll directly
    if (window.location.pathname === "/") {
      const contactSection = document.getElementById("contact");

      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    // Navigate to homepage
    navigate("/");

    // Wait for Home + Contact to render
    setTimeout(() => {
      const contactSection = document.getElementById("contact");

      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 200);
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
          <Link to="/#home" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <Link to="/projects" onClick={closeMenu}>
            Work
          </Link>

          <a href="/#contact" onClick={handleContactClick}>
            Contact
          </a>
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
        <Link to="/#home" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/about" onClick={closeMenu}>
          About
        </Link>

        <Link to="/projects" onClick={closeMenu}>
          Work
        </Link>

        <a href="/#contact" onClick={handleContactClick}>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default PillNav;
