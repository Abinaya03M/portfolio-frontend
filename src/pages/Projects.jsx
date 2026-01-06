import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css";

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-container">

        <p className="section-subtitle">What I’ve Built</p>
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          <ProjectCard
            title="Sales Performance & Profit Analysis"
            tags={["Python", "Pandas", "Power BI", "SQL", "Excel"]}
            problem="Businesses struggled to identify profitable segments due to scattered sales data."
            outcome="Built interactive dashboards that improved sales visibility and decision-making."
            codeLink="https://github.com/"
            demoLink="#"
          />

          <ProjectCard
            title="Weather Prediction Using AI"
            tags={["Python", "Machine Learning", "Scikit-learn", "Matplotlib"]}
            problem="Traditional weather prediction methods lacked accuracy for localized regions."
            outcome="Developed an ML-based prediction model achieving improved forecasting accuracy."
            codeLink="https://github.com/"
            demoLink="#"
          />

          <ProjectCard
            title="Django Sales Dashboard"
            tags={["Django", "PostgreSQL", "Chart.js", "HTML", "CSS"]}
            problem="Small businesses needed affordable real-time sales monitoring tools."
            outcome="Created a web dashboard that reduced reporting time and improved insights."
            codeLink="https://github.com/"
            demoLink="#"
          />
        </div>

        <div className="projects-footer">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            View all projects on GitHub →
          </a>
        </div>

      </div>
    </section>
  );
}
