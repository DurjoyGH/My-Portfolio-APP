import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Share Reads",
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
      live: "https://share-reads.onrender.com/",
    },
    {
      title: "Pet Nest",
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
      title: "NCCIA",
      introduction:
        "A conference portal for the National Conference on Computational Intelligence and Applications 2025 (NCCIA-2025), organized by the Department of Computer Science and Engineering at Jashore University of Science and Technology. The portal supports paper submission and a review system.",
      description:
        "An online platform designed to streamline the paper submission and review process for NCCIA-2025.",
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
      ],
      github: "https://github.com/DurjoyGH/Conference-Portal-NSCIA-",
      live: "https://nscia.just.edu.bd/",
    },
    {
      title: "Auto Docs",
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
      ],
      github: "https://github.com/mdsaniulbasirsaz/AutoDocs-Cse",
      live: "https://auto-docs.onrender.com/",
    },
    {
      title: "Study Tracker",
      introduction:
        "An intelligent desktop application designed specifically for students to manage their academic tasks. It offers smart scheduling, date-wise task organization, and progress tracking to help students stay focused and productive.",
      description:
        "A task management application for students with calendar integration and automatic task sorting based on due dates.",
      features: [
        "Add, view, and delete academic tasks with a simple and intuitive interface tailored for desktop use",
        "Easily view and organize tasks based on due dates to prioritize your academic workload effectively",
        "Optimized as a lightweight desktop application for smooth offline usage and distraction-free productivity",
      ],
      technologies: ["JavaFX", "PostgreSQL", "Scene Builder"],
      github: "https://github.com/DurjoyGH/study-tracker",
      live: "#",
    },
    {
      title: "CodeSnippet Manager",
      introduction:
        "A developer-focused application for organizing, sharing, and discovering code snippets with syntax highlighting and collaborative features for programming teams.",
      description:
        "A code snippet management platform where developers can store, organize, and share reusable code snippets with syntax highlighting and search functionality.",
      features: [
        "Syntax highlighting for 50+ programming languages",
        "Advanced search and filtering capabilities",
        "Team collaboration and snippet sharing",
      ],
      technologies: [
        "Vue.js",
        "Express.js",
        "PostgreSQL",
        "Prism.js",
        "Vuetify",
        "Redis",
      ],
      github: "https://github.com/your-username/codesnippet-manager",
      live: "https://codesnippet-manager-demo.com",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of my development journey and technical expertise
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card fade-in-up">
              <div className="project-content">
                <h3>{project.title}</h3>
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
