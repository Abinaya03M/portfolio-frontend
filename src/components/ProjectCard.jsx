import "../styles/projects.css";

export default function ProjectCard({
  title,
  tags,
  problem,
  outcome,
  codeLink,
  demoLink,
}) {
  return (
    <div className="project-card">
      <div>
        <h3 className="project-title">{title}</h3>

        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-section">
          <h4>Problem</h4>
          <p>{problem}</p>
        </div>

        <div className="project-section">
          <h4>Outcome</h4>
          <p>{outcome}</p>
        </div>
      </div>

      <div className="project-buttons">
        <a href={codeLink} target="_blank" rel="noreferrer">
          Code
        </a>
        <a
          href={demoLink}
          target="_blank"
          rel="noreferrer"
          className="primary"
        >
          Demo
        </a>
      </div>
    </div>
  );
}
