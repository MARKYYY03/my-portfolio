import "./About.css";
import { useEffect, useState } from "react";
import barongPhoto from "../assets/barong grad pic.jpg";
import togaPhoto from "../assets/toga grad pic.jpg";

export default function About() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const skills = [
    { icon: "fa-globe", label: "Web Development" },
    { icon: "fa-layer-group", label: "System Development" },
    { icon: "fa-palette", label: "UI/UX Design" },
    { icon: "fa-database", label: "Database Design" },
  ];

  // Check theme on mount and listen for changes
  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setIsDarkTheme(theme === "dark" || !theme); // dark is default
    };

    checkTheme();

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          checkTheme();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

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

          <div className="about-grid">
            <div className="about-text-content">
              <p className="about-text">
                "I'm Mark Aducal, a BSIT graduate from Gordon College in
                Olongapo City. As a web developer, I enjoy designing systems
                that solve real problems. I specialize in backend development
                using Laravel, with hands-on experience in full-stack
                development using Blade, as well as Angular for frontend
                development from my capstone project. I focus on building clean,
                scalable solutions."
              </p>

              <div className="skills-badges">
                {skills.map((skill) => (
                  <span key={skill.label} className="skill-badge">
                    <i className={`fa-solid ${skill.icon}`}></i> {skill.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="profile-section">
              <div
                className={`profile-image-box theme-photo ${isDarkTheme ? "dark" : "light"}`}
              >
                <img
                  src={isDarkTheme ? barongPhoto : togaPhoto}
                  alt={`Mark Aducal in ${isDarkTheme ? "barong" : "graduation toga"}`}
                  className="profile-image"
                />
                <div className="theme-indicator">
                  <i
                    className={`fa-solid fa-${isDarkTheme ? "moon" : "sun"}`}
                  ></i>
                  <span>
                    {isDarkTheme
                      ? "Dark theme - Barong"
                      : "Light theme - Graduation"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
