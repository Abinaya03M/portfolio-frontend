import "../styles/home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <p className="intro">Hello, I'm</p>
      <h1 className="name">Abinaya M</h1>
      <h2 className="role">Data Analyst & Full Stack Developer</h2>

      <p className="description">
        ECE student passionate about building data-driven applications and
        insightful dashboards.
      </p>

      <div className="home-buttons">
        <Link to="/projects" className="primary-btn">
  View Projects
</Link>

       <a
  href="/Abinaya_Fullstack_Resume.pdf"
  download
  className="secondary-btn"
>
  Download Resume
</a>

      </div>
    </section>
  );
}
