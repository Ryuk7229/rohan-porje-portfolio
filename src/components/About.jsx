import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaWordpressSimple,
} from "react-icons/fa";

import { FaSalesforce } from "react-icons/fa6";

import { FaFigma } from "react-icons/fa6";

import { DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

const About = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Salesforce", icon: <FaSalesforce /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Nodejs", icon: <DiNodejs /> },
    { name: "Mongodb", icon: <SiMongodb /> },
    { name: "Redux", icon: <TbBrandRedux /> },
    { name: "Wordpress", icon: <FaWordpressSimple /> },
  ];

  return (
    <section id="about" className="home-about-section">
      <div className="about-container">
        <div className="about-label">ABOUT ME</div>

        <div className="about-grid">
          <div className="about-heading">
            <h2>
              DESIGNER
              <br />
              <span>& DEVELOPER</span>
            </h2>
          </div>

          <div className="home-about-content">
            <p className="home-about-intro">
              I’m Rohan Porje, a UI Developer and Creative Technologist who
              combines design thinking with frontend development to create
              digital experiences that are both visually engaging and
              technically refined.
            </p>

            <p className="home-about-description">
              My work sits at the intersection of UI/UX, visual design and
              frontend development. I enjoy transforming ideas, wireframes and
              designs into responsive, interactive and user-focused digital
              products.
            </p>

            <div className="home-about-stats">
              <div className="stat">
                <strong>6+</strong>
                <span>Years of Experience</span>
              </div>

              <div className="stat">
                <strong>20+</strong>
                <span>Projects & Designs</span>
              </div>

              <div className="stat">
                <strong>10+</strong>
                <span>Technologies</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-cta">
          <Link to="/about" className="about-cta-button">
            <span>MORE ABOUT ME</span>
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
            </span>{" "}
          </Link>{" "}
        </div>

        <div className="skills-wrapper">
          <div className="skills-title">TECHNOLOGIES I WORK WITH</div>

          <div className="skills-marquee">
            <div className="skills-track">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  className="tech-item"
                  key={`${skill.name}-${index}`}
                  title={skill.name}
                >
                  <span className="tech-icon">{skill.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
