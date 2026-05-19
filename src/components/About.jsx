import "./About.css";
import profilePhoto from "../assets/photo-removebg-preview.png";

export default function About() {
  const skills = [
    { icon: "fa-globe", label: "Web Development" },
    { icon: "fa-layer-group", label: "System Development" },
    { icon: "fa-palette", label: "UI/UX Design" },
    { icon: "fa-database", label: "Database Design" },
  ];

  return (
    <section id="about" className="about page-reveal">
      <div className="about-container">
        <div className="about-content-full">
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Building things for
            <br />
            the web &amp; beyond.
          </h2>

          <p className="about-text">
            I'm Mark Aducal, a 4th-year BSIT student at Gordon College in
            Olongapo City. Currently on OJT as a web developer, I enjoy
            designing systems that solve real problems. I specialize in Laravel
            for backend development and have experience with Angular for
            frontend development from my capstone project.
          </p>
          <p className="about-text">
            I am currently completing my OJT, where I use Laravel as a
            full-stack framework, developing web applications using Blade for
            the frontend and focusing on clean, scalable solutions.
          </p>

          <div className="skills-badges">
            {skills.map((skill) => (
              <span key={skill.label} className="skill-badge">
                <i className={`fa-solid ${skill.icon}`}></i> {skill.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
