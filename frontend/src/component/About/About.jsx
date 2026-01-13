import React from "react";
import "./About.css";

const About = () => {
  const personalInfo = [
    { label: "Full Name", value: "Tarin Prosad Ghosh", icon: "👤" },
    { label: "Location", value: "Jashore, Bangladesh", icon: "📍" },
    { label: "Email", value: "tarinprosadghosh@gmail.com", icon: "📧" },
    { label: "Phone", value: "+880 1859-093806", icon: "📱" },
    { label: "Study", value: "Computer Science & Engineering", icon: "🎓" },
    {
      label: "University",
      value: "Jashore University of Science and Technology",
      icon: "🏛️",
    },
    { label: "CGPA", value: "3.56 / 4.00", icon: "📊" },
  ];

  const highlights = [
    {
      icon: "🎯",
      title: "Passionate Developer",
      description:
        "Dedicated to creating innovative solutions that solve real-world problems through clean, efficient code.",
      color: "#f093fb",
    },
    {
      icon: "🚀",
      title: "Full-Stack Expertise",
      description:
        "Experienced in MERN stack development with a focus on scalable web applications and modern UI/UX.",
      color: "#f093fb",
    },
    {
      icon: "🏆",
      title: "Problem Solver",
      description:
        "Active competitive programmer with 1000+ problems solved across multiple coding platforms.",
      color: "#f093fb",
    },
    {
      icon: "📚",
      title: "Continuous Learner",
      description:
        "Always exploring new technologies and methodologies to stay current with industry trends.",
      color: "#f093fb",
    },
    {
      icon: "💡",
      title: "Creative Thinker",
      description:
        "Approaching challenges with innovative mindset and finding unique solutions to complex technical problems.",
      color: "#f093fb",
    },
    {
      icon: "🤝",
      title: "Team Collaborator",
      description:
        "Strong believer in teamwork and open communication, contributing effectively to group projects and initiatives.",
      color: "#f093fb",
    },
  ];

  const timeline = [
    {
      year: "2021-December",
      title: "Started Journey",
      description: "Began Computer Science & Engineering at JUST and started competitive programming",
      icon: "🎓",
    },
    {
      year: "2023-February",
      title: "Web Development",
      description: "Started learning MERN stack development",
      icon: "💻",
    },
    {
      year: "2023-October",
      title: "First Project",
      description: "Built Share Reads which is my first large MERN project",
      icon: "🚀",
    },
    {
      year: "2024-2026",
      title: "Continue Journey",
      description: "Still learning and continue my journey",
      icon: "✨",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know the person behind the code
        </p>

        <div className="about-hero">
          <div className="hero-content fade-in-up">
            <div className="profile-section">
              <img
                src="https://res.cloudinary.com/des0whrgl/image/upload/v1763421535/durjoy_vwke5y.jpg"
                alt="Tarin Prosad Ghosh"
                className="profile-img"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextElementSibling.style.display = "flex";
                }}
              />
              <div className="avatar">
                <span>TPG</span>
              </div>

              <div className="intro-text">
                <h3>
                  Hello! I'm{" "}
                  <span className="highlight">Tarin Prosad Ghosh</span>
                </h3>
                <p className="lead-text">
                  I'm a passionate Computer Science student and full-stack
                  developer who enjoys turning complex problems into simple,
                  elegant solutions.
                </p>
                <p>
                  I’m a recent graduate from Jashore University of Science and
                  Technology and specialize in the MERN Stack. I love solving
                  problems, building user-friendly applications, and
                  continuously learning new technologies.
                </p>
                <p>
                  I’m highly dedicated to my work and enjoy collaborating with
                  others. Teamwork motivates me, and I always give my best to
                  contribute meaningfully to any project.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="highlights-section">
          <h3 className="subsection-title">What Drives Me</h3>
          <div className="highlights-grid">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="highlight-card fade-in-up"
                style={{ "--highlight-color": highlight.color }}
              >
                <div className="highlight-icon">{highlight.icon}</div>
                <h4>{highlight.title}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="info-timeline-section">
          <div className="personal-info-section">
            <h3 className="subsection-title">Personal Information</h3>
            <div className="info-grid">
              {personalInfo.map((info, index) => (
                <div key={index} className="info-card fade-in-up">
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <span className="info-label">{info.label}</span>
                    <span className="info-value">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="timeline-section">
            <h3 className="subsection-title">My Journey</h3>
            <div className="timeline">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item fade-in-up">
                  <div className="timeline-icon">{item.icon}</div>
                  <div className="timeline-content">
                    <div className="timeline-year">{item.year}</div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
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
