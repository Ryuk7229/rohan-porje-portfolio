import { useRef, useEffect, useCallback, useState } from "react";

import { useNavigate } from "react-router-dom";

import { gsap } from "gsap";

import "./MagicBento.css";

import { getFeaturedProjects } from "../data/projects";

/* =========================================
   PARTICLE CARD
========================================= */

const ParticleCard = ({
  children,
  className = "",
  disableAnimations = false,
  style,
  particleCount = 12,
  glowColor = "132, 0, 255",
  enableTilt = false,
  enableMagnetism = false,
  clickEffect = false,
  enableStars = true,
  onClick,
}) => {
  const cardRef = useRef(null);
  const particlesRef = useRef([]);

  const handleMouseMove = useCallback(
    (event) => {
      if (disableAnimations || !cardRef.current) {
        return;
      }

      const card = cardRef.current;

      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;

      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;

      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -4;

      const rotateY = ((x - centerX) / centerX) * 4;

      if (enableTilt) {
        gsap.to(card, {
          rotateX,
          rotateY,
          duration: 0.3,
          ease: "power2.out",
          transformPerspective: 1000,
        });
      }

      if (enableMagnetism) {
        gsap.to(card, {
          x: (x - centerX) * 0.02,

          y: (y - centerY) * 0.02,

          duration: 0.3,
          ease: "power2.out",
        });
      }

      const particles = particlesRef.current;

      particles.forEach((particle) => {
        if (!particle) {
          return;
        }

        gsap.to(particle, {
          x: (Math.random() - 0.5) * 40,

          y: (Math.random() - 0.5) * 40,

          opacity: 0.3 + Math.random() * 0.7,

          duration: 0.5,

          ease: "power2.out",
        });
      });
    },
    [disableAnimations, enableTilt, enableMagnetism],
  );

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) {
      return;
    }

    if (enableTilt) {
      gsap.to(cardRef.current, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    }

    if (enableMagnetism) {
      gsap.to(cardRef.current, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  }, [enableTilt, enableMagnetism]);

  const handleClick = useCallback(
    (event) => {
      if (!clickEffect) {
        return;
      }

      const card = cardRef.current;

      if (!card) {
        return;
      }

      const ripple = document.createElement("span");

      ripple.className = "magic-bento-ripple";

      const rect = card.getBoundingClientRect();

      ripple.style.left = `${event.clientX - rect.left}px`;

      ripple.style.top = `${event.clientY - rect.top}px`;

      card.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 700);
    },
    [clickEffect],
  );

  useEffect(() => {
    if (!enableStars || disableAnimations || !cardRef.current) {
      return;
    }

    const card = cardRef.current;

    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("span");

      particle.className = "magic-bento-particle";

      particle.style.setProperty("--glow-color", glowColor);

      particle.style.left = `${Math.random() * 100}%`;

      particle.style.top = `${Math.random() * 100}%`;

      particle.style.animationDelay = `${Math.random() * 3}s`;

      card.appendChild(particle);

      particles.push(particle);
    }

    particlesRef.current = particles;

    return () => {
      particles.forEach((particle) => {
        particle.remove();
      });

      particlesRef.current = [];
    };
  }, [enableStars, disableAnimations, particleCount, glowColor]);

  return (
    <div
      ref={cardRef}
      className={`magic-bento-card ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={(event) => {
        handleClick(event);

        if (onClick) {
          onClick();
        }
      }}
    >
      {children}
    </div>
  );
};

/* =========================================
   GLOBAL SPOTLIGHT
========================================= */

const GlobalSpotlight = ({
  gridRef,
  disabled = false,
  spotlightRadius = 400,
  glowColor = "132, 0, 255",
}) => {
  useEffect(() => {
    if (disabled || !gridRef.current) {
      return;
    }

    const grid = gridRef.current;

    const handleMouseMove = (event) => {
      const rect = grid.getBoundingClientRect();

      const x = event.clientX - rect.left;

      const y = event.clientY - rect.top;

      grid.style.setProperty("--spotlight-x", `${x}px`);

      grid.style.setProperty("--spotlight-y", `${y}px`);

      grid.style.setProperty("--spotlight-radius", `${spotlightRadius}px`);

      grid.style.setProperty("--glow-color", glowColor);
    };

    grid.addEventListener("mousemove", handleMouseMove);

    return () => {
      grid.removeEventListener("mousemove", handleMouseMove);
    };
  }, [gridRef, disabled, spotlightRadius, glowColor]);

  return null;
};

/* =========================================
   MOBILE DETECTION
========================================= */

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isMobile;
};

/* =========================================
   MAGIC BENTO
========================================= */

const MagicBento = ({
  textAutoHide = false,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  enableTilt = false,
  enableMagnetism = false,
  clickEffect = true,
  spotlightRadius = 400,
  particleCount = 12,
  glowColor = "132, 0, 255",
  disableAnimations = false,
}) => {
  const gridRef = useRef(null);

  const navigate = useNavigate();

  const isMobile = useMobileDetection();

  /* =========================================
     ONLY SHOW 6 FEATURED PROJECTS
  ========================================= */

  const featuredProjects = getFeaturedProjects();

  /* =========================================
     PROJECT CLICK
  ========================================= */

  const handleProjectClick = (project) => {
    navigate(`/projects/${project.slug}`);

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <div
      ref={gridRef}
      className={`
        bento-section
        ${enableSpotlight ? "has-spotlight" : ""}
        ${enableBorderGlow ? "has-border-glow" : ""}
      `}
    >
      <GlobalSpotlight
        gridRef={gridRef}
        disabled={!enableSpotlight || isMobile}
        spotlightRadius={spotlightRadius}
        glowColor={glowColor}
      />

      <div className="card-grid">
        {featuredProjects.map((project, index) => (
          <ParticleCard
            key={project.slug}
            className={`
                bento-project-card
                bento-card-${index + 1}
              `}
            disableAnimations={disableAnimations || isMobile}
            particleCount={particleCount}
            glowColor={glowColor}
            enableTilt={enableTilt && !isMobile}
            enableMagnetism={enableMagnetism && !isMobile}
            clickEffect={clickEffect}
            enableStars={enableStars}
            onClick={() => handleProjectClick(project)}
            style={{
              "--card-image": project.image
                ? `url("${project.image}")`
                : "none",
            }}
          >
            {/* =====================================
                  PROJECT IMAGE

                  TODO:
                  Add image in projects.js

                  Example:

                  image:
                  "/projects/project-name/thumbnail.jpg"

                  The image will automatically
                  appear here.
              ===================================== */}

            <div className="bento-card-image" />

            {/* =====================================
                  DARK IMAGE OVERLAY
              ===================================== */}

            <div className="bento-card-overlay" />

            {/* =====================================
                  PROJECT CONTENT
              ===================================== */}

            <div className="bento-card-content">
              <div className="bento-card-top">
                <span className="bento-project-category">
                  {project.category}
                </span>

                <span className="bento-project-year">{project.year}</span>
              </div>

              <div className="bento-card-bottom">
                <span className="bento-project-label">{project.label}</span>

                <h3>{project.title}</h3>

                {!textAutoHide && <p>{project.shortDescription}</p>}

                <span className="bento-view-project">
                  View Project
                  <span className="bento-arrow-icon">
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
            </div>
          </ParticleCard>
        ))}
      </div>
    </div>
  );
};

export default MagicBento;
