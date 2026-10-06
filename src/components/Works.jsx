import React from "react";
import { Link } from "react-router-dom";
import MagicBento from "./MagicBento";
import "./Work.css";

const Works = () => {
  return (
    <section id="work" className="portfolio-works">
      <div className="portfolio-works-inner">
        {/* ================================
            SECTION INTRO
        ================================= */}

        <div className="portfolio-works-intro">
          <div className="portfolio-works-label">SELECTED WORK</div>

          <h2 className="portfolio-works-title">
            PROJECTS & <span>CASE STUDIES.</span>
          </h2>

          <p className="portfolio-works-description">
            A selection of UI/UX, frontend and visual design work across
            automotive, FMCG, enterprise dashboards, product websites and
            digital experiences.
          </p>
        </div>

        {/* ================================
            BENTO
        ================================= */}

        <MagicBento
          textAutoHide={false}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect={true}
          spotlightRadius={400}
          particleCount={12}
          glowColor="132, 0, 255"
          disableAnimations={false}
        />

        {/* ================================
            VIEW ALL PROJECTS
        ================================= */}

        <div className="portfolio-works-cta">
          <Link to="/projects" className="portfolio-view-all">
            <span>View All Projects</span>
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Works;
