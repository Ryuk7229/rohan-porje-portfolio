import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./AboutPage.css";

const experiences = [
  {
    year: "2026 — PRESENT",
    role: "Independent Product Designer & Design Technologist",
    company: "Independent",
    number: "01",
    description:
      "Designing and prototyping digital products from early product thinking through high-fidelity design and functional implementation.",
    details: [
      "Translate ambiguous business requirements into clear user flows, information architecture and product experiences.",
      "Create scalable component libraries and high-fidelity prototypes in Figma.",
      "Build interactive prototypes with React, Node.js and Express to validate complex product interactions.",
      "Use AI-assisted tools such as Cursor and Claude to accelerate exploration, prototyping and development.",
    ],
    skills: ["Figma", "React", "Node.js", "Express", "MERN", "AI"],
  },
  {
    year: "2023 — 2025",
    role: "Software Developer — UI/UX",
    company: "TekZen Systems",
    number: "02",
    description:
      "Bridged product design and frontend development across automotive, enterprise and dealer-platform experiences.",
    details: [
      "Designed and developed the official Jeep.com US UI using Figma, HTML, CSS, JavaScript and React.",
      "Built the UI for ChryslerConnect.com from the ground up.",
      "Contributed to the branding, UI and WordPress implementation of Carzato.com.",
      "Designed and developed TekFutureSystems.com with a responsive, performance-focused approach.",
      "Resolved responsive and CSS issues across E-shop experiences.",
      "Built Salesforce Lightning Web Components based on client requirements.",
      "Worked with MariaDB and dealer CMS platforms to upload and update website features.",
      "Collaborated with users, developers and QA teams to deliver production-ready features.",
    ],
    skills: [
      "Figma",
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Salesforce LWC",
      "WordPress",
      "MariaDB",
    ],
  },
  {
    year: "2021 — 2022",
    role: "UI/UX Manager",
    company: "White Worldwide Agency",
    number: "03",
    description:
      "Led UI/UX strategy and creative execution across global brand accounts in multiple industries.",
    details: [
      "Led UI/UX strategy and design execution across 10+ global brand accounts.",
      "Created wireframes, prototypes and high-fidelity interfaces in Figma.",
      "Translated product requirements into scalable user experiences aligned with personas and business goals.",
      "Managed creative resources, task distribution and delivery across projects.",
      "Mentored team members and helped improve design quality and consistency.",
    ],
    skills: [
      "Figma",
      "UX Strategy",
      "Wireframing",
      "Prototyping",
      "Leadership",
    ],
  },
  {
    year: "2020 — 2021",
    role: "Senior Graphic Designer",
    company: "Wisk",
    number: "04",
    description:
      "Combined visual design, digital campaigns and frontend production to support product growth.",
    details: [
      "Designed and coded responsive HTML email templates.",
      "Created social media campaigns and digital creatives across multiple platforms.",
      "Designed and deployed email campaigns through Mailchimp.",
      "Contributed to a campaign that generated 1000+ app downloads within one week.",
      "Created 50+ social media creatives while maintaining consistent brand communication.",
    ],
    skills: ["HTML", "CSS", "Mailchimp", "Photoshop", "Illustrator"],
  },
  {
    year: "2020",
    role: "Senior Graphic Designer",
    company: "The Media Bulletin",
    number: "05",
    description:
      "Worked across editorial design, branding and digital experiences in a fast-paced media environment.",
    details: [
      "Designed daily e-newspaper layouts using Adobe Creative Suite.",
      "Developed the company's brand guidelines from the ground up.",
      "Defined typography, colour palettes and visual standards.",
      "Designed and maintained the company's WordPress website.",
    ],
    skills: ["Photoshop", "Illustrator", "InDesign", "WordPress", "Branding"],
  },
  {
    year: "2019 — 2020",
    role: "Graphic Designer",
    company: "Hooterbux Ventures",
    number: "06",
    description:
      "Started my professional design journey across branding, FMCG, digital products and motion design.",
    details: [
      "Led branding and visual design for FMCG, real estate and other client projects.",
      "Created logos, colour systems, brand materials, packaging and billboard campaigns.",
      "Designed a matrimony app prototype focused on simple matchmaking and profile browsing.",
      "Created motion graphics for EdTech content across digital platforms.",
    ],
    skills: ["Branding", "Graphic Design", "UI Design", "Motion Graphics"],
  },
];

const capabilities = [
  "Product Design",
  "UX / UI Design",
  "Design Systems",
  "Data Visualization",
  "Accessibility",
  "Frontend Development",
  "AI-assisted Design",
  "Design-to-Code",
];

const technologies = [
  "Figma",
  "React.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Salesforce LWC",
  "WordPress",
  "REST APIs",
  "Git / GitLab",
];

const AboutPage = () => {
  const [openExperience, setOpenExperience] = useState(0);

  const toggleExperience = (index) => {
    setOpenExperience(openExperience === index ? null : index);
  };

  return (
    <main className="about-page">
      {/* =========================================
          HERO
      ========================================= */}

      <section className="about-hero">
        <div className="about-hero-meta">
          <span>ABOUT ME</span>
          <span>01 / 05</span>
        </div>

        <div className="about-hero-content">
          <p className="about-eyebrow">
            PRODUCT DESIGNER × DESIGN TECHNOLOGIST
          </p>

          <h1>
            I DESIGN
            <br />
            <span>PRODUCTS.</span>
            <br />
            I BUILD
            <br />
            <span>EXPERIENCES.</span>
          </h1>

          <div className="about-hero-bottom">
            <p>
              Designing thoughtful digital experiences and turning complex
              product ideas into interfaces that are clear, usable and built to
              perform.
            </p>

            <div className="about-scroll-indicator">
              <span>SCROLL TO EXPLORE</span>
              <span>↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          INTRO
      ========================================= */}

      <section className="about-intro section-container">
        <div className="section-index">01 — WHO I AM</div>

        <div className="about-intro-content">
          <h2>
            Somewhere between
            <span> design </span>
            and
            <span> technology.</span>
          </h2>

          <div className="about-intro-copy">
            <p className="large-copy">
              I'm a Product Designer and Design Technologist with 6+ years of
              experience creating digital products across automotive, e-commerce
              and enterprise ecosystems.
            </p>

            <p>
              My approach sits between creative thinking and technical
              execution. I move from user flows and information architecture to
              Figma, design systems, prototypes and frontend implementation.
            </p>

            <p>
              This allows me to understand not only how an experience should
              look and feel, but also how it can actually be built.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          STATS
      ========================================= */}

      <section className="about-stats">
        <div className="stat-item">
          <strong>6+</strong>
          <span>YEARS OF EXPERIENCE</span>
        </div>

        <div className="stat-item">
          <strong>20+</strong>
          <span>CLIENT ENGAGEMENTS</span>
        </div>

        <div className="stat-item">
          <strong>60%</strong>
          <span>USABILITY IMPROVEMENT</span>
        </div>

        <div className="stat-item">
          <strong>80%</strong>
          <span>FIRST-ROUND APPROVALS</span>
        </div>
      </section>

      {/* =========================================
          EXPERIENCE
      ========================================= */}

      <section className="experience-section section-container">
        <div className="section-index">02 — EXPERIENCE</div>

        <div className="experience-heading">
          <h2>
            A career built
            <br />
            <span>across disciplines.</span>
          </h2>

          <p>
            From graphic design to product design and frontend development,
            every role added another layer to how I think about digital
            experiences.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((experience, index) => {
            const isOpen = openExperience === index;

            return (
              <div
                className={`experience-item ${isOpen ? "experience-open" : ""}`}
                key={experience.number}
              >
                <button
                  className="experience-header"
                  onClick={() => toggleExperience(index)}
                  aria-expanded={isOpen}
                >
                  <div className="experience-number">{experience.number}</div>

                  <div className="experience-main">
                    <span className="experience-year">{experience.year}</span>

                    <h3>{experience.role}</h3>

                    <span className="experience-company">
                      {experience.company}
                    </span>
                  </div>

                  <div className="experience-toggle">{isOpen ? "−" : "+"}</div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="experience-details"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <div className="experience-detail-grid">
                        <div>
                          <p className="detail-label">OVERVIEW</p>

                          <p className="experience-description">
                            {experience.description}
                          </p>
                        </div>

                        <div>
                          <p className="detail-label">SELECTED CONTRIBUTIONS</p>

                          <ul>
                            {experience.details.map((detail, i) => (
                              <li key={i}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="experience-skills">
                        {experience.skills.map((skill) => (
                          <span key={skill}>{skill}</span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================
          CAPABILITIES
      ========================================= */}

      <section className="capabilities-section section-container">
        <div className="section-index">03 — CAPABILITIES</div>

        <div className="capabilities-layout">
          <h2>
            What I
            <br />
            <span>bring to the table.</span>
          </h2>

          <div className="capabilities-list">
            {capabilities.map((capability, index) => (
              <div className="capability-item" key={capability}>
                <span>0{index + 1}</span>

                <strong>{capability}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          TECHNOLOGY
      ========================================= */}

      <section className="technology-section">
        <div className="section-container">
          <div className="section-index">04 — TOOLKIT</div>

          <div className="technology-content">
            <h2>
              DESIGN
              <span> × </span>
              CODE
            </h2>

            <p>
              A hybrid toolkit built around visual craft, product thinking and
              technical implementation.
            </p>

            <div className="technology-list">
              {technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          CTA
      ========================================= */}

      <section className="about-final-cta">
        <div className="section-index">05 — WHAT'S NEXT</div>

        <h2>
          HAVE A PRODUCT
          <br />
          <span>WORTH BUILDING?</span>
        </h2>

        <div className="about-final-actions">
          <Link to="/projects" className="final-cta-button">
            VIEW MY WORK
            <span>↗</span>
          </Link>

          <a
            href="mailto:rohanporje@zohomail.in"
            className="final-cta-button secondary"
          >
            GET IN TOUCH
            <span>↗</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
