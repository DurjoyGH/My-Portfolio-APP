import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        {
          name: "C",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        },
        {
          name: "C++",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        },
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
      ],
      categoryIcon: "💻",
      color: "#764ba2",
    },
    {
      title: "Frontend Development",
      skills: [
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://img.icons8.com/?size=100&id=UpSCHTwpywad&format=png&color=000000",
        },
        {
          name: "React.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
      ],
      categoryIcon: "🎨",
      color: "#764ba2",
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
      ],
      categoryIcon: "⚙️",
      color: "#764ba2",
    },
    {
      title: "Database Management",
      skills: [
        {
          name: "SQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "Firebase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
      ],
      categoryIcon: "🗄️",
      color: "#764ba2",
    },
    {
      title: "Development Tools",
      skills: [
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "VS Code",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
      ],
      categoryIcon: "🛠️",
      color: "#764ba2",
    },
    {
      title: "Core Concepts",
      skills: [
        {
          name: "Data Structures",
          icon: "https://img.icons8.com/?size=100&id=23045&format=png&color=000000",
        },
        {
          name: "Algorithms",
          icon: "https://img.icons8.com/?size=100&id=Bv0dXvHhy8Ha&format=png&color=000000",
        },
        {
          name: "OOP",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
      ],
      categoryIcon: "🧠",
      color: "#764ba2",
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="skills-subtitle">
          Technologies and tools I use to bring ideas to life
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-category-card fade-in-up"
              style={{ "--category-color": category.color }}
            >
              <div className="category-header">
                <div className="category-icon">{category.categoryIcon}</div>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="skill-icon"
                    />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
