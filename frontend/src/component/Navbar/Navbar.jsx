import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let ticking = false;
    
    const updateActiveSection = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "problem-solving",
        "achievements",
        "contact",
      ];
      
      // Find which section is currently being viewed
      let currentSection = "home";
      let minDistance = Infinity;
      
      // Loop through sections and find the one that's currently most visible
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const navbarHeight = 80;
          
          // Check if section is in viewport
          if (rect.top <= navbarHeight + 50 && rect.bottom >= navbarHeight) {
            // Calculate how much of the section is visible below the navbar
            const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, navbarHeight);
            const distance = Math.abs(rect.top - navbarHeight);
            
            // Prioritize sections that are more visible
            if (visibleHeight > 100 && distance < minDistance) {
              minDistance = distance;
              currentSection = section;
            }
          }
        }
      });

      setActiveSection(currentSection);
      ticking = false;
    };
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Use requestAnimationFrame for immediate smooth updates during scroll
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateActiveSection(); // Call once on mount
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
    });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "ℹ️" },
    { id: "skills", label: "Skills", icon: "💻" },
    { id: "projects", label: "Projects", icon: "🚀" },
    { id: "problem-solving", label: "Problem Solving", icon: "🏆" },
    { id: "achievements", label: "Achievements", icon: "🎖️" },
    { id: "contact", label: "Contact", icon: "📧" },
  ];

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1j42rimPDHzBNPXFAh8dzvpKhcYBlAhoD/view?usp=sharing";
    link.download = "Tarin_Prosad_Ghosh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="nav-content">
          <div className="logo" onClick={() => scrollToSection("home")}>
            <div className="logo-icon">
              <img
                src="https://res.cloudinary.com/des0whrgl/image/upload/v1763421535/durjoy_vwke5y.jpg"
                alt="Tarin Prosad Ghosh"
                className="logo-image"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextElementSibling.style.display = "flex";
                }}
              />
              <span className="fallback-logo">TPG</span>
            </div>
            <div className="logo-text">
              <span className="name">Tarin Prosad Ghosh</span>
              <span className="title">The Learner</span>
            </div>
          </div>

          <div className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
            {navItems.map((item) => (
              <a
                key={item.id}
                className={`nav-link ${
                  activeSection === item.id ? "active" : ""
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button className="resume-btn" onClick={handleResumeDownload}>
              <svg
                className="download-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 16L7 11L8.4 9.6L11 12.2V4H13V12.2L15.6 9.6L17 11L12 16Z"
                  fill="currentColor"
                />
                <path d="M5 20V18H19V20H5Z" fill="currentColor" />
              </svg>
              Resume
            </button>

            <div
              className={`mobile-menu-toggle ${
                isMobileMenuOpen ? "active" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
