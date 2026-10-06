import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import "./Projects.css";

const Projects = () => {
  return (
    <main className="projects-page">
      {/* =========================================
          PROJECTS PAGE HEADER
      ========================================= */}

      <section className="projects-header">
        <Link to="/" className="projects-back">
          ← Back to Home
        </Link>

        <span className="projects-label">MY WORK</span>

        <h1>
          ALL <span>PROJECTS.</span>
        </h1>

        <p>
          A collection of UI/UX design, frontend development, branding,
          dashboards and digital experiences.
        </p>
      </section>

      {/* =========================================
          ALL PROJECTS
      ========================================= */}

      <section className="all-projects-grid">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="project-list-card"
          >
            <div className="project-list-image">
              {project.image ? (
                <img src={project.image} alt={`${project.title} project`} />
              ) : (
                <div className="project-image-placeholder">
                  {/* TODO:
          Add project thumbnail image in projects.js
      */}
                  PROJECT IMAGE
                </div>
              )}
            </div>

            <div className="project-list-content">
              <div className="project-list-meta">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>

              <h2>{project.title}</h2>

              <p>{project.shortDescription}</p>

              <span className="project-view">
                View Project
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
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* =========================================
          BACK HOME
      ========================================= */}

      <div className="projects-footer">
        <Link to="/">← Back to Home</Link>
      </div>
    </main>
  );
};

export default Projects;
