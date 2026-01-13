import React from "react";
import "./Achievements.css";

const Achievements = () => {
  const achievements = [
    {
      title: "SOLVIO AI Hackathon 2025",
      organizer: "Organized by Sheba Platform",
      team: "Team JUST DOMinators",
      achievements: [
        "Secured Top 10 position in the final round",
        "Ranked Top 20 out of 538 teams in the preliminary stage",
      ],
      certificate:
        "https://drive.google.com/file/d/1Nvs1OJfWyAwA7F7L42EeKT2gdgtMUL4c/view",
      icon: "🏆",
      color: "#ffeaa7",
    },
    {
      title: "HackTheAI",
      organizer: "Inter-University Hackathon by Green University of Bangladesh",
      team: "Team JUST DOMinators",
      achievements: [
        "Qualified for the final round",
        "Ranking 41st out of 242 teams in the preliminary stage",
      ],
      rankList:
        "https://drive.google.com/file/d/1ge0Zhel-sil20vlRsDELnrDLb6rFm3go/view",
      icon: "🤖",
      color: "#74b9ff",
    },
    {
      title: "BUP CSE TECH CARNIVAL-2025",
      organizer: "Hackathon Competition",
      team: "Team JUST DOMinators",
      achievements: [
        "Secured a top 20 position out of 80 teams",
        "Advanced to the final round",
      ],
      certificate:
        "https://drive.google.com/file/d/1hOSGaG-dWCs0QRR1FfphxA4XmP6LxMla/view",
      icon: "🎯",
      color: "#fd79a8",
    },
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="achievements-container">
        <h2 className="achievements-section-title">Achievements</h2>
        <p className="achievements-section-subtitle">
          Recognition and accomplishments from competitive programming and
          hackathon events
        </p>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card achievement-fade-in-up">
              <div className="achievement-icon-wrapper">
                <span
                  className="achievement-icon"
                  style={{ backgroundColor: achievement.color }}
                >
                  {achievement.icon}
                </span>
              </div>

              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-organizer">{achievement.organizer}</p>

                <div className="achievement-team">
                  <span className="achievement-team-badge">{achievement.team}</span>
                </div>

                <div className="achievement-details">
                  <h4>Achievements:</h4>
                  <ul>
                    {achievement.achievements.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="achievement-links">
                  {achievement.certificate && (
                    <a
                      href={achievement.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievement-link"
                    >
                      <span className="achievement-link-icon">📜</span>
                      View Certificate
                    </a>
                  )}
                  {achievement.rankList && (
                    <a
                      href={achievement.rankList}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievement-link"
                    >
                      <span className="achievement-link-icon">📊</span>
                      View Rank List
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
