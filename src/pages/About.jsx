import "../styles/about.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* Header */}
        <p className="section-subtitle">Get To Know Me</p>
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">

          {/* LEFT: TEXT */}
          <div className="about-text">
            <p>
              I am an Electronics and Communication Engineering (ECE) student
              with a strong interest in data analysis, full-stack development,
              and building real-world applications.
            </p>

            <p>
              I enjoy transforming raw data into meaningful insights and
              developing clean, user-friendly web applications using
              React and Django.
            </p>

            <p>
              My goal is to work in a role where I can combine analytical
              thinking with software development to solve real business
              problems.
            </p>
          </div>

          {/* RIGHT: INFO CARDS */}
          <div className="about-cards">

            <div className="about-card">
              <h4>Education</h4>
              <p>
                B.E. Electronics and Communication Engineering (ECE)
              </p>
            </div>

            <div className="about-card">
              <h4>Career Focus</h4>
              <p>
                Data Analyst & Full Stack Developer
              </p>
            </div>

            <div className="about-card">
              <h4>Interests</h4>
              <p>
                Data Analysis, Dashboards, AI, Web Development
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
