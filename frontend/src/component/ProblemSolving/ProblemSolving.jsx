// components/ProblemSolving.jsx
import React from 'react';
import './ProblemSolving.css';

const ProblemSolving = () => {
  const platforms = [
    {
      name: "Codeforces",
      username: "DurjoyGH",
      solveCount: 755,
      maxRating: 1214,
      color: "#1f8dd6",
      icon: "🏆",
      profileUrl: "https://codeforces.com/profile/DurjoyGH",
      description: "Competitive Programming Platform",
      rank: "Pupil",
      gradient: "linear-gradient(135deg, #1f8dd6, #0066cc)"
    },
    {
      name: "CodeChef",
      username: "durjoy_gh",
      solveCount: 147,
      maxRating: 1419,
      color: "#1f8dd6",
      icon: "👨‍💻",
      profileUrl: "https://codechef.com/users/durjoy_gh",
      description: "Global Programming Community",
      rank: "2 Star",
      gradient: "linear-gradient(135deg, #1f8dd6, #0066cc)"
    },
    {
      name: "Vjudge",
      username: "Durjoy_24742",
      solveCount: 56,
      maxRating: null,
      color: "#1f8dd6",
      icon: "⚡",
      profileUrl: "https://vjudge.net/user/Durjoy_24742",
      description: "Virtual Judge Platform",
      rank: "Active Solver",
      gradient: "linear-gradient(135deg, #1f8dd6, #0066cc)"
    }
  ];

  const achievements = [
    {
      icon: "🎯",
      title: "Total Problems",
      value: "1000+",
      description: "Across all platforms"
    },
    {
      icon: "📈",
      title: "Best Rating",
      value: "1419",
      description: "CodeChef Maximum"
    },
    {
      icon: "🔥",
      title: "Active Since",
      value: "2+ Years",
      description: "Consistent practice"
    },
    {
      icon: "💪",
      title: "Skill Level",
      value: "Intermediate",
      description: "Problem Solver"
    }
  ];

  return (
    <section id="problem-solving" className="problem-solving-section">
      <div className="container">
        <h2 className="section-title">Problem Solving Journey</h2>
        <p className="section-subtitle">
          My competitive programming achievements across various platforms
        </p>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card fade-in-up">
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-content">
                <h3>{achievement.value}</h3>
                <h4>{achievement.title}</h4>
                <p>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="platforms-container">
          <h3 className="platforms-title">Coding Platforms</h3>
          <div className="platforms-grid">
            {platforms.map((platform, index) => (
              <div 
                key={index} 
                className="platform-card fade-in-up"
                style={{ '--platform-gradient': platform.gradient }}
              >
                <div className="platform-header">
                  <div className="platform-logo">
                    <span className="platform-icon">{platform.icon}</span>
                  </div>
                  <div className="platform-info">
                    <h3>{platform.name}</h3>
                    <p>{platform.description}</p>
                  </div>
                </div>

                <div className="platform-stats">
                  <div className="stat-row">
                    <div className="stat-item">
                      <span className="stat-label">Username</span>
                      <a 
                        href={platform.profileUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="username-link"
                      >
                        @{platform.username}
                      </a>
                    </div>
                  </div>
                  
                  <div className="stat-row">
                    <div className="stat-item">
                      <span className="stat-label">Problems Solved</span>
                      <span className="stat-value">{platform.solveCount}</span>
                    </div>
                    {platform.maxRating && (
                      <div className="stat-item">
                        <span className="stat-label">Max Rating</span>
                        <span className="stat-value">{platform.maxRating}</span>
                      </div>
                    )}
                  </div>

                  <div className="rank-badge">
                    <span>{platform.rank}</span>
                  </div>
                </div>

                <div className="platform-footer">
                  <a 
                    href={platform.profileUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="view-profile-btn"
                  >
                    View Profile
                    <span className="arrow">→</span>
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
