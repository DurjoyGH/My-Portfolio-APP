import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Hello, I'm";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 150);

      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex(0);
        setShowCursor(true);
      }, 2000);

      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="home-content fade-in-up">
          <div className="hero-text">
            <div className="greeting">
              <span className="wave">👋</span>
              <span className="hello typing-text">
                {displayText}
                {showCursor && <span className="typing-cursor">|</span>}
              </span>
            </div>
            <h1>
              <span className="gradient-text">Tarin Prosad Ghosh</span>
            </h1>
            <h2 className="typing-animation">
              <span className="role">MERN Stack Developer</span>
              <span className="role">Problem Solver</span>
              <span className="role">AI/ML Explorer</span>
            </h2>
            <p className="description">
              Welcome to my digital portfolio! I'm passionate about creating
              innovative web applications and solving challenging problems.
              Let's build something amazing together.
            </p>

            <div className="cta-buttons">
              <button
                className="btn-primary"
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="btn-icon">🚀</span>
                View My Work
              </button>
              <button
                className="btn-secondary"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="btn-icon">💬</span>
                Get In Touch
              </button>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-container">
              <div className="floating-elements">
                <div className="floating-icon code">💻</div>
                <div className="floating-icon react">⚛️</div>
                <div className="floating-icon node">🟢</div>
                <div className="floating-icon trophy">🏆</div>
              </div>

              <div className="profile-card">
                <div className="card-glow"></div>
                <div className="profile-image-wrapper">
                  <img
                    src="https://res.cloudinary.com/des0whrgl/image/upload/v1763421535/durjoy_vwke5y.jpg"
                    alt="Tarin Prosad Ghosh"
                    className="profile-image"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextElementSibling.style.display = "flex";
                    }}
                  />
                  <div className="fallback-avatar">
                    <span>TPG</span>
                  </div>
                </div>

                <div className="card-content">
                  <h3>Tarin Prosad Ghosh</h3>
                  <p className="title">Full Stack Developer</p>
                  <div className="status-indicator">
                    <span className="status-dot"></span>
                    Available for opportunities
                  </div>

                  <div className="social-links">
                    <a
                      href="https://www.linkedin.com/in/durjoy-ghosh-just/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                        alt="LinkedIn"
                        className="social-icon"
                      />
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/DurjoyGH"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        alt="GitHub"
                        className="social-icon"
                      />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
