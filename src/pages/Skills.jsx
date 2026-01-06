import SkillCard from "../components/SkillCard";
import "../styles/skills.css";

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-container">

        <p className="section-subtitle">What I Bring</p>
        <h2 className="section-title">Skills & Expertise</h2>

        {/* Skill Chips */}
        <div className="skill-chips">
          {[
            "Python",
            "React",
            "Django",
            "SQL",
            "Power BI",
            "Excel",
            "Git",
            "JavaScript",
          ].map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="skills-grid">
          <SkillCard
            title="Technical Skills"
            skills={[
              { name: "Python", level: 90 },
              { name: "SQL", level: 85 },
              { name: "Excel", level: 90 },
              { name: "Power BI", level: 80 },
              { name: "Django", level: 75 },
            ]}
          />

          <SkillCard
            title="Analytical Skills"
            skills={[
              { name: "Data Cleaning", level: 90 },
              { name: "Data Visualization", level: 85 },
              { name: "Dashboard Design", level: 80 },
              { name: "Statistical Analysis", level: 75 },
              { name: "ETL Processes", level: 70 },
            ]}
          />

          <SkillCard
            title="Soft Skills"
            skills={[
              { name: "Communication", level: 90 },
              { name: "Problem Solving", level: 88 },
              { name: "Critical Thinking", level: 85 },
              { name: "Team Collaboration", level: 90 },
              { name: "Time Management", level: 80 },
            ]}
          />
        </div>

      </div>
    </section>
  );
}
