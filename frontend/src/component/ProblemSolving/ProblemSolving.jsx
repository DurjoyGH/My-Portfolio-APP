import React from "react";
import "./ProblemSolving.css";

const ProblemSolving = () => {
  const platforms = [
    {
      name: "Codeforces",
      username: "DurjoyGH",
      solveCount: 755,
      maxRating: 1214,
      color: "#1f8dd6",
      icon: "https://art.npanuhin.me/SVG/Codeforces/Codeforces.colored.svg",
      profileUrl: "https://codeforces.com/profile/DurjoyGH",
      description: "Competitive Programming Platform",
      rank: "Pupil",
      gradient: "linear-gradient(135deg, #1f8dd6, #0066cc)",
    },
    {
      name: "CodeChef",
      username: "durjoy_gh",
      solveCount: 147,
      maxRating: 1419,
      color: "#1f8dd6",
      icon: "https://cdn.codechef.com/sites/all/themes/abessive/cc-logo.png",
      profileUrl: "https://codechef.com/users/durjoy_gh",
      description: "Competitive Programming Platform",
      rank: "2 Star",
      gradient: "linear-gradient(135deg, #1f8dd6, #0066cc)",
    },
    {
      name: "Vjudge",
      username: "Durjoy_24742",
      solveCount: 56,
      maxRating: null,
      color: "#1f8dd6",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJLxdP0idphxUvaRU_FPnvjeUbUC1vMHDJ2g&s",
      profileUrl: "https://vjudge.net/user/Durjoy_24742",
      description: "Virtual Judge Platform",
      rank: "Active Solver",
      gradient: "linear-gradient(135deg, #1f8dd6, #0066cc)",
    },
  ];

  const achievements = [
    {
      icon: "🎯",
      title: "Total Problems",
      value: "1000+",
      description: "Across all platforms",
    },
    {
      icon: "📈",
      title: "Best Rating",
      value: "1419",
      description: "CodeChef Maximum",
    },
    {
      icon: "🔥",
      title: "Active Since",
      value: "3+ Years",
      description: "Consistent practice",
    },
    {
      icon: "💪",
      title: "Skill Level",
      value: "Intermediate",
      description: "Problem Solver",
    },
  ];

  return (
    <section id="problem-solving" className="problem-solving-section">
      <div className="problem-solving-container">
        <h2 className="problem-solving-section-title">Problem Solving Journey</h2>
        <p className="problem-solving-section-subtitle">
          My competitive programming achievements across various platforms
        </p>

        {/* ICPC Achievement */}
        <div className="problem-solving-icpc-section">
          <div className="problem-solving-icpc-card">
            <div className="problem-solving-icpc-icon">🏆</div>
            <div className="problem-solving-icpc-content">
              <h3>ICPC Dhaka Regional Preliminary Contest</h3>
              <p className="problem-solving-icpc-description">
                Participated in the ACM ICPC Dhaka Regional Preliminary Contest in 2021, 2022, and 2023
              </p>
              <a
                href="https://drive.google.com/file/d/1JqoYyZ3VIYy4G5pw-g-jHve-BVL4hqLG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="problem-solving-icpc-certificate-btn"
              >
                <span className="problem-solving-certificate-icon">📜</span>
                View Certificates
              </a>
            </div>
          </div>
        </div>

        <div className="problem-solving-achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="problem-solving-achievement-card problem-solving-fade-in-up">
              <div className="problem-solving-achievement-icon">{achievement.icon}</div>
              <div className="problem-solving-achievement-content">
                <h3>{achievement.value}</h3>
                <h4>{achievement.title}</h4>
                <p>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="problem-solving-platforms-container">
          <h3 className="problem-solving-platforms-title">Coding Platforms</h3>
          <div className="problem-solving-platforms-grid">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="problem-solving-platform-card problem-solving-fade-in-up"
                style={{ "--platform-gradient": platform.gradient }}
              >
                <div className="problem-solving-platform-header">
                  <div className="problem-solving-platform-logo">
                    <img
                      src={platform.icon}
                      alt={platform.name}
                      className="problem-solving-platform-icon"
                    />
                  </div>
                  <div className="problem-solving-platform-info">
                    <h3>{platform.name}</h3>
                    <p>{platform.description}</p>
                  </div>
                </div>

                <div className="problem-solving-platform-stats">
                  <div className="problem-solving-stat-row">
                    <div className="problem-solving-stat-item">
                      <span className="problem-solving-stat-label">Username</span>
                      <a
                        href={platform.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="problem-solving-username-link"
                      >
                        @{platform.username}
                      </a>
                    </div>
                  </div>

                  <div className="problem-solving-stat-row">
                    <div className="problem-solving-stat-item">
                      <span className="problem-solving-stat-label">Problems Solved</span>
                      <span className="problem-solving-stat-value">{platform.solveCount}</span>
                    </div>
                    {platform.maxRating && (
                      <div className="problem-solving-stat-item">
                        <span className="problem-solving-stat-label">Max Rating</span>
                        <span className="problem-solving-stat-value">{platform.maxRating}</span>
                      </div>
                    )}
                  </div>

                  <div className="problem-solving-rank-badge">
                    <span>{platform.rank}</span>
                  </div>
                </div>

                <div className="problem-solving-platform-footer">
                  <a
                    href={platform.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="problem-solving-view-profile-btn"
                  >
                    View Profile
                    <span className="problem-solving-arrow">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
