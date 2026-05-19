import { useState, useEffect } from "react";
import "./Hero.css";
import profileImage from "../assets/photo-removebg-preview.png";

const words = ["Full-Stack Developer", "Problem Solver", "Tech Enthusiast"];

export default function Hero() {
  const [displayText, setDisplayText] = useState("Full-Stack Developer");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const speed = isDeleting ? 50 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < word.length) {
          setDisplayText(word.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(word.slice(0, displayText.length - 1));
        } else {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWordIndex]);

  const skills = [
    { icon: "fa-globe", label: "Web Development" },
    { icon: "fa-layer-group", label: "System Development" },
    { icon: "fa-palette", label: "UI/UX Design" },
    { icon: "fa-database", label: "Database Design" },
  ];

  return (
    <section id="home" className="hero page-reveal">
      <div className="hero-wrapper">
        {/* Main Hero Section */}
        <div className="hero-main">
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-name">
                <span className="name-first">MARK</span>{" "}
                <span className="name-last">ADUCAL</span>
              </h1>

              <h2 className="hero-title">
                <span className="accent">{displayText}</span>
                <span className="cursor"></span>
              </h2>

              <p className="hero-tagline">
                <i className="fa-solid fa-code"></i> 3+ Projects Shipped
              </p>

              <p className="hero-description">
                I'm Mark Aducal, a 4th-year BSIT student at Gordon College in
                Olongapo City. Currently on OJT as a web developer, I enjoy
                designing systems that solve real problems.
              </p>

              <p className="hero-description">
                I specialize in full-stack development with{" "}
                <span className="highlight">Laravel</span> and{" "}
                <span className="highlight-blade">Blade</span> for building web
                applications, with strong{" "}
                <span className="highlight-angular">Angular</span> experience
                from my capstone project. My focus is on creating clean,
                scalable, and user-friendly solutions.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  <i className="fa-solid fa-briefcase"></i> View My Work
                </a>
                <a href="#contact" className="btn btn-secondary">
                  <i className="fa-solid fa-paper-plane"></i> Get In Touch
                </a>
              </div>

              <div className="hero-social">
                <a
                  href="https://github.com/MARKYYY03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/mark-aducal-9b952025b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="aducalremegio03@gmail.com"
                  className="social-link"
                  aria-label="Email"
                >
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>

            <div className="hero-image-container">
              <div className="image-wrapper">
                <img
                  src={profileImage}
                  alt="Mark Aducal"
                  className="hero-image"
                />
              </div>

              {/* Tech Icons Under Image */}
              <div className="hero-tech-icons-inline">
                <div className="tech-icon-inline" title="PHP">
                  <i className="fa-brands fa-php"></i>
                </div>
                <div className="tech-icon-inline" title="Laravel">
                  <i className="fa-brands fa-laravel"></i>
                </div>
                <div className="tech-icon-inline" title="Angular">
                  <i className="fa-brands fa-angular"></i>
                </div>
                <div className="tech-icon-inline" title="React">
                  <i className="fa-brands fa-react"></i>
                </div>
                <div className="tech-icon-inline" title="JavaScript">
                  <i className="fa-brands fa-js"></i>
                </div>
                <div className="tech-icon-inline" title="MySQL">
                  <i className="fa-solid fa-database"></i>
                </div>
                <div className="tech-icon-inline" title="Node.js">
                  <i className="fa-brands fa-node-js"></i>
                </div>
                <div className="tech-icon-inline" title="Git">
                  <i className="fa-brands fa-git-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-dot-container">
            <div className="scroll-dot"></div>
          </div>
          <p>scroll</p>
        </div>
      </div>
    </section>
  );
}
