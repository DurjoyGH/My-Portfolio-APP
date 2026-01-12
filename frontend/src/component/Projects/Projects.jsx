import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "LifeTech",
      image: "/projects/life-tech.png",
      projectType: "Live Project",
      role: "Full Stack",
      introduction:
        "A conference portal for the 1st International Conference on Life Science, Health, and Biotechnology (LifeTech 2026), organized by the Faculty of Biological Science and Technology at Jashore University of Science and Technology. The portal supports paper submission and a review system.",
      description:
        "An online platform designed to streamline the paper submission and review process for LifeTech 2026.",
      features: [
        "Paper submission for the conference",
        "Peer review system for submitted papers",
        "Well-organized admin dashboard for efficient management",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "React.js",
        "MongoDB",
        "Firebase Authentication",
        "Cloudinary",
        "Nginx",
        "Docker",
        "GitHub CI/CD"
      ],
      github: "https://github.com/DurjoyGH/ICLSB",
      live: "https://iclsb.just.edu.bd/",
    },
    {
      title: "AutoCP",
      image: "/projects/auto-cp.png",
      projectType: "Team Project",
      role: "Backend",
      introduction:
        "An AI-based platform for creating competitive programming problems with automated testcase generation and validation using advanced language models.",
      description:
        "AI-powered platform that generates high-quality competitive programming problems with comprehensive testcases and automatic validation through multiple models.",
      features: [
        "Generate high-quality competitive programming problems using advanced AI models",
        "Automatically create comprehensive testcases with base, edge, and large cases covered",
        "Automatic testcase validation by multiple models using Gemini API",
        "LLM Fine-Tuning with Codeforces API Dataset and Hugging Face Hosting",
      ],
      technologies: [
        "Python",
        "Node.js",
        "Express.js",
        "React.js",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
        "Gemini API",
        "Hugging Face"
      ],
      github: "https://github.com/DurjoyGH/AutoCP",
      live: "https://auto-cp.vercel.app/",
    },
    {
      title: "Pet Nest",
      image: "/projects/pet-nest.png",
      projectType: "Team Project",
      role: "Backend",
      introduction:
        "A modern e-commerce solution designed specifically for pet owners, offering a complete marketplace for pet products and professional veterinary services.",
      description:
        "An e-commerce platform for pets and pet accessories with shopping cart functionality and verified veterinarian directory.",
      features: [
        "Users can buy pets, pet food, toys, accessories, and grooming products with a secure shopping cart and seamless checkout experience",
        "Includes product reviews and ratings, a Q&A section for pet care queries, and a blog for sharing tips, news, and stories related to pet health and lifestyle",
        "Features an AI-powered chatbot for instant support and a verified veterinarian directory with appointment booking for professional pet care",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "React.js",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
        "Cloudinary",
        "Gemini API",
      ],
      github: "https://github.com/DurjoyGH/PetNest",
      live: "https://petnest-frontend.onrender.com/",
    },
    {
      title: "Share Reads",
      image: "/projects/share-reads.png",
      projectType: "Team Project",
      role: "Backend",
      introduction:
        "A comprehensive book sharing platform that connects book lovers in a community-driven environment for sharing, borrowing, and discovering new reads.",
      description:
        "A book sharing platform where users can add books, request to borrow from others, and review books. Features notification system for book owners.",
      features: [
        "Users can list books they own and are willing to lend or give away. Listings include book details, condition, and availability",
        "Request and approve borrow/lend operations with a transparent tracking system for due dates and status updates",
        "Get alerts for borrow requests, return deadlines, new messages, and wishlist availability",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "EJS",
        "Bootstrap",
        "MongoDB",
        "Passport.js",
        "Firebase",
      ],
      github: "https://github.com/DurjoyGH/Share-Reads-WebAPP",
      live: "https://share-reads-web-app-psi.vercel.app/",
    },
    {
      title: "AutoCard",
      image: "/projects/auto-card.png",
      projectType: "Single Project",
      role: "Full Stack",
      introduction:
        "A modern digital library card management system that streamlines the application, approval, and renewal process for library members.",
      description:
        "An online library card management system with real-time status tracking, instant digital card generation, and secure authentication for seamless library system integration.",
      features: [
        "Online application system for library cards with real-time status tracking",
        "Instant digital card generation upon approval with seamless library system integration",
        "Intuitive user interface with secure authentication for managing and renewing cards",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "React.js",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
      ],
      github: "https://github.com/DurjoyGH/AutoCard",
      live: "https://auto-card.onrender.com",
    },
    {
      title: "ETSD",
      image: "/projects/etsd.png",
      projectType: "Live Project",
      role: "Full Stack",
      introduction:
        "An international conference portal for the Engineering and Technology for Sustainable Development - 2026 (ETSD-2026), organized by the Faculty of Engineering and Technology, Jashore University of Science and Technology. The portal supports paper submission and a review system.",
      description:
        "An online platform designed to streamline the paper submission and review process for ETSD-2026.",
      features: [
        "Paper submission for the conference",
        "Peer review system for submitted papers",
        "Well-organized admin dashboard for efficient management",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "React.js",
        "MongoDB",
        "JWT",
        "Cloudinary",
        "Nginx",
        "Docker",
        "GitHub CI/CD"
      ],
      github: "https://github.com/DurjoyGH/ICETSD",
      live: "https://icetsd.just.edu.bd/",
    },
    {
      title: "Auto Docs",
      image: "/projects/auto-docs.png",
      projectType: "Team Project",
      role: "Frontend",
      introduction:
        "A digital platform that enables users to efficiently request and receive university documents, eliminating long wait times and paperwork hassles.",
      description:
        "Access transcripts, certificates, and academic records in just a few clicks — fast, secure, and convenient. AutoDocs streamlines university document requests for students and staff alike.",
      features: [
        "Students can request transcripts, certificates, and other documents with just a few clicks",
        "All documents are verified and approved by authorized university personnel before being issued",
        "University staff can manage document requests, approve/reject applications, and monitor activity",
      ],
      technologies: [
        "Django",
        "React.js",
        "Tailwind CSS",
        "Redux",
        "Cloudinary",
        "JWT"
      ],
      github: "https://github.com/mdsaniulbasirsaz/AutoDocs-Cse",
      live: "https://auto-docs.onrender.com/",
    },
    {
      title: "Smart Mirror",
      image: "/projects/smart-mirror.jpeg",
      projectType: "Team Project",
      role: "Backend",
      introduction:
        "An IoT-based smart mirror featuring facial recognition and personalized task management to enhance daily routines with intelligent automation.",
      description:
        "A Raspberry Pi-powered smart mirror with facial recognition system that displays personalized daily tasks and essential information like time, date, and weather.",
      features: [
        "Facial recognition system using Pi Camera to identify users and display personalized daily tasks",
        "Integration with Todoist API to fetch and display user's task list in real-time",
        "Always-on display showing time, date, and location-based temperature information",
      ],
      technologies: [
        "Raspberry Pi",
        "Pi Camera",
        "Pi Display",
        "Python",
        "OpenCV",
        "MagicMirror",
        "Todoist API",
      ],
      github: "#",
      live: "#",
    },
    {
      title: "Study Tracker",
      image: "/projects/study-tracker.png",
      projectType: "Team Project",
      role: "Full Stack",
      introduction:
        "An intelligent desktop application designed specifically for students to manage their academic tasks. It offers smart scheduling, date-wise task organization, and progress tracking to help students stay focused and productive.",
      description:
        "A task management application for students with calendar integration and automatic task sorting based on due dates.",
      features: [
        "Add, view, and delete academic tasks with a simple and intuitive interface tailored for desktop use",
        "Easily view and organize tasks based on due dates to prioritize your academic workload effectively",
        "Optimized as a lightweight desktop application for smooth offline usage and distraction-free productivity",
      ],
      technologies: ["JavaFX", "CockroachDB", "Scene Builder"],
      github: "https://github.com/DurjoyGH/study-tracker",
      live: "#",
    },
  ];

  // Calculate project statistics
  const teamProjects = projects.filter(p => p.projectType === "Team Project").length;
  const liveProjects = projects.filter(p => p.projectType === "Live Project").length;
  const singleProjects = projects.filter(p => p.projectType === "Single Project").length;
  
  const fullStackRoles = projects.filter(p => p.role === "Full Stack").length;
  const backendRoles = projects.filter(p => p.role === "Backend").length;
  const frontendRoles = projects.filter(p => p.role === "Frontend").length;

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of my development journey and technical expertise
        </p>

        <div className="project-summary">
          <div className="summary-section">
            <h4>Project Types</h4>
            <div className="summary-stats">
              <div className="stat-item">
                <span className="stat-number">{teamProjects}</span>
                <span className="stat-label">Team Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{liveProjects}</span>
                <span className="stat-label">Live Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{singleProjects}</span>
                <span className="stat-label">Single Projects</span>
              </div>
            </div>
          </div>

          <div className="summary-section">
            <h4>Role Distribution</h4>
            <div className="summary-stats">
              <div className="stat-item">
                <span className="stat-number">{fullStackRoles}</span>
                <span className="stat-label">Full Stack</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{backendRoles}</span>
                <span className="stat-label">Backend</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{frontendRoles}</span>
                <span className="stat-label">Frontend</span>
              </div>
            </div>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card fade-in-up">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <div className="project-meta">
                  <span className="project-type">{project.projectType}</span>
                  <span className="project-role">{project.role}</span>
                </div>
                <p className="project-introduction">{project.introduction}</p>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="tech-stack">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt="GitHub"
                      className="btn-icon"
                    />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn primary"
                  >
                    <span className="btn-icon">🚀</span>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
