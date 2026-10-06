import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ProjectPage from "./components/ProjectPage";
import AboutPage from "./components/AboutPage";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import resumePDF from "./assets/Rohan-Porje-Resume.pdf";

import "./App.css";

/* =========================================
   HOME PAGE
========================================= */

function Home() {
  return (
    <main>
      <Hero>
        <div className="hero-content">
          <div className="hero-badge">WEB DEVELOPER</div>

          <h1>
            I DESIGN & BUILD
            <br />
            DIGITAL EXPERIENCES.
          </h1>

          <p>
            UI Developer and Creative Technologist creating thoughtful,
            interactive and high-performance digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#work" className="hero-btn hero-btn-primary">
              View Work
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
              href={resumePDF}
              className="hero-btn hero-btn-secondary"
              download
            >
              Download Resume
              <span>↓</span>
            </a>
          </div>
        </div>
      </Hero>

      <About />

      <Works />

      <Contact />
    </main>
  );
}

/* =========================================
   APP ROUTES
========================================= */

function App() {
  return (
    <BrowserRouter>
      {/* Reset scroll position whenever route changes */}
      <ScrollToTop />

      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* All Projects */}
        <Route path="/projects" element={<Projects />} />

        {/* Individual Project */}
        <Route path="/projects/:slug" element={<ProjectPage />} />

        {/* About */}
        <Route path="/about" element={<AboutPage />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <main
              style={{
                minHeight: "100vh",
                background: "#050505",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Arial, sans-serif",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h1>404</h1>

                <p>Page not found.</p>

                <a
                  href="/"
                  style={{
                    color: "#ffffff",
                    textDecoration: "underline",
                  }}
                >
                  Back to Home
                </a>
              </div>
            </main>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
