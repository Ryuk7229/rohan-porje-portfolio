import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg-glow contact-bg-glow-1" />
      <div className="contact-bg-glow contact-bg-glow-2" />

      <div className="contact-container">
        <motion.div
          className="contact-glass"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="contact-glass-inner">
            {/* Left */}
            <div className="contact-content">
              <div className="contact-label">
                <span className="contact-label-dot" />
                GET IN TOUCH
              </div>

              <h2 className="contact-title">
                LET'S BUILD
                <br />
                <span>SOMETHING GREAT.</span>
              </h2>

              <p className="contact-description">
                Have an idea, project, or opportunity in mind?
                <br />
                Let's turn it into something meaningful.
              </p>

              <motion.a
                href="mailto:rohanporje@zohomail.in"
                className="contact-button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>GET IN TOUCH</span>
                {/* <span className="contact-button-arrow">↗</span> */}
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
              </motion.a>
            </div>

            {/* Right */}
            <div className="contact-side">
              <div className="contact-side-card">
                <span className="contact-side-label">AVAILABLE FOR</span>

                <h3>
                  Digital
                  <br />
                  Experiences
                </h3>

                <p>UI/UX · Frontend · Creative Development</p>
              </div>

              {/* <div className="contact-links">
                <a
                  href="https://www.behance.net/rohanporje"
                  target="_blank"
                  rel="noreferrer"
                >
                  Behance <span>↗</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/rohanporje"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <span>↗</span>
                </a>

                <a
                  href="https://github.com/Ryuk7229"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <span>↗</span>
                </a>
              </div> */}
            </div>
          </div>

          <div className="contact-glass-shine" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
