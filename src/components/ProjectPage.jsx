import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { getProjectBySlug, getAllProjects } from "../data/projects";

import "./ProjectPage.css";

const ProjectPage = () => {
  const { slug } = useParams();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [slug]);
  console.log("PROJECT PAGE SLUG:", slug);

  const project = getProjectBySlug(slug);
  const allProjects = getAllProjects();

  if (!project) {
    return (
      <main className="project-not-found">
        <div className="project-not-found-inner">
          <span>404</span>

          <h1>PROJECT NOT FOUND.</h1>

          <p>
            The project you are looking for does not exist or may have been
            moved.
          </p>

          <Link to="/projects">← Back to Projects</Link>
        </div>
      </main>
    );
  }

  const currentIndex = allProjects.findIndex(
    (item) => item.slug === project.slug,
  );

  const previousProject =
    currentIndex > 0 ? allProjects[currentIndex - 1] : null;

  const nextProject =
    currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : null;

  return (
    <main className="project-page">
      {/* =====================================================
          PROJECT HEADER
      ====================================================== */}

      <section className="project-hero">
        <div className="project-hero-top">
          <Link to="/projects" className="project-back">
            ← Back to Projects
          </Link>

          <span className="project-number">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(allProjects.length).padStart(2, "0")}
          </span>
        </div>

        <div className="project-hero-content">
          <div className="project-hero-meta">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>

          <div className="project-label">{project.label}</div>

          <h1>{project.title}</h1>

          <p className="project-hero-description">
            {project.heroSummary || project.shortDescription}
          </p>
        </div>

        {/* =================================================
            PROJECT HERO / BANNER IMAGE
        ================================================== */}

        <div className="project-hero-image">
          {project.heroVideo ? (
            <video
              src={project.heroVideo}
              poster={project.heroImage}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : project.heroImage ? (
            <img src={project.heroImage} alt={`${project.title} project`} />
          ) : (
            <div className="project-image-placeholder">
              <span>PROJECT HERO IMAGE</span>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          PROJECT INFORMATION
      ====================================================== */}

      <section className="project-info-section">
        <div className="project-info-grid">
          <div className="project-info-intro">
            <span className="project-section-label">PROJECT OVERVIEW</span>

            <h2>
              Designing experiences
              <br />
              with purpose.
            </h2>
          </div>

          <div className="project-info-content">
            <p>{project.description}</p>
          </div>
        </div>

        <div className="project-details-grid">
          <div className="project-detail">
            <span>ROLE</span>
            <strong>{project.role}</strong>
          </div>

          <div className="project-detail">
            <span>CATEGORY</span>
            <strong>{project.category}</strong>
          </div>

          <div className="project-detail">
            <span>YEAR</span>
            <strong>{project.year}</strong>
          </div>

          <div className="project-detail">
            <span>TOOLS</span>
            <strong>{project.tools?.join(" • ")}</strong>
          </div>
        </div>
      </section>

      {/* =====================================================
          CHALLENGE + APPROACH
      ====================================================== */}

      <section className="project-story-section">
        <div className="project-story-grid">
          <div className="project-story-card">
            <span className="project-section-label">01 — THE CHALLENGE</span>

            <h2>The challenge.</h2>

            <p>{project.challenge}</p>
          </div>

          <div className="project-story-card">
            <span className="project-section-label">02 — THE APPROACH</span>

            <h2>The approach.</h2>

            <p>{project.approach}</p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CASE STUDY SECTIONS
      ====================================================== */}

      {project.sections && project.sections.length > 0 && (
        <section className="project-case-study">
          {project.sections.map((section, index) => (
            <div
              key={`${section.title}-${index}`}
              className="project-case-wrapper"
            >
              {/* ===========================================
                  ARTICLE
              ============================================ */}

              <article
                className={`project-case-section ${
                  index % 2 === 1 ? "project-case-section-reverse" : ""
                }`}
              >
                {/* =========================================
                    ARTICLE CONTENT
                ========================================== */}

                <div className="project-case-content">
                  <span className="project-section-label">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2>{section.title}</h2>

                  {section.points ? (
                    <ul className="project-case-points">
                      {section.points.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{section.text}</p>
                  )}
                </div>

                {/* =========================================
                    MAIN ARTICLE IMAGE
                ========================================== */}

                <div className="project-case-image">
                  {section.image ? (
                    <img
                      src={section.image}
                      alt={`${project.title} - ${section.title}`}
                      className="project-main-image"
                    />
                  ) : (
                    <div className="project-image-placeholder">
                      <span>ADD IMAGE</span>
                    </div>
                  )}
                </div>
              </article>

              {/* ===========================================
                  ADDITIONAL IMAGES
                  BELOW THE ARTICLE
              ============================================ */}

              {section.images?.length > 0 && (
                <div className="project-additional-images">
                  {section.images.map((image, imageIndex) => (
                    <div className="project-additional-image" key={imageIndex}>
                      <img
                        src={image}
                        alt={`${project.title} - ${
                          section.title
                        } ${imageIndex + 2}`}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="project-services-section">
        <div className="project-services-header">
          <span className="project-section-label">SERVICES</span>

          <h2>What I worked on.</h2>
        </div>

        <div className="project-services-list">
          {project.services?.map((service, index) => (
            <div className="project-service-item" key={service}>
              <span>{String(index + 1).padStart(2, "0")}</span>

              <strong>{service}</strong>

              <span className="project-service-arrow arrow-icon">
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
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          OUTCOME
      ====================================================== */}

      <section className="project-outcome-section">
        <div className="project-outcome-inner">
          <span className="project-section-label">THE OUTCOME</span>

          <h2>{project.outcome}</h2>
        </div>
      </section>

      {/* =====================================================
          PREVIOUS / NEXT PROJECT
      ====================================================== */}

      <section className="project-navigation">
        {previousProject ? (
          <Link
            to={`/projects/${previousProject.slug}`}
            className="project-navigation-card"
          >
            <span>← Previous Project</span>

            <strong>{previousProject.title}</strong>
          </Link>
        ) : (
          <div />
        )}

        {nextProject ? (
          <Link
            to={`/projects/${nextProject.slug}`}
            className="project-navigation-card project-navigation-next"
          >
            <span>Next Project →</span>

            <strong>{nextProject.title}</strong>
          </Link>
        ) : (
          <div />
        )}
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="project-footer">
        <Link to="/">ROHAN PORJE</Link>

        <span>UI DEVELOPER · DESIGNER · CREATIVE TECHNOLOGIST</span>
      </footer>
    </main>
  );
};

export default ProjectPage;
