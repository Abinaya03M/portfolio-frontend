import "../styles/skills.css";

export default function SkillCard({ title, skills }) {
  return (
    <div className="skill-card">
      <h3>{title}</h3>

      <div className="skill-list">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-label">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
