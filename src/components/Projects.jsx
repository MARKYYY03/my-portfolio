import { useState } from "react";
import "./Projects.css";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  const projects = [
    {
      icon: "fa-store",
      title: "LeydiBoss",
      image: "/projects/leydiboss.png",
      desc: "A capstone web system for LeydiBoss Online built with Angular, PHP, and MySQL, focused on smooth customer experience and practical business operations.",
      fullDesc: `LeydiBoss is a full-featured e-commerce and business management web system developed as a capstone project. It supports seamless customer experience from product browsing to checkout, while giving the business owner tools to manage inventory, orders, and sales data.

Key Features:
• Product catalog with category filtering
• Shopping cart and order management
• Admin dashboard for inventory and sales tracking
• User authentication and profile management
• Responsive design for mobile and desktop

Built with Angular for the frontend, PHP for the backend API, and MySQL as the database. The system was designed with real business needs in mind, balancing user-friendliness with operational efficiency.`,
      tech: ["Angular", "PHP", "MySQL"],
      liveUrl: "https://leydiboss.online",
      githubUrl: "https://github.com/MARKADUCAL/capstone",
    },
    {
      icon: "fa-spa",
      title: "Relevare",
      image: "/projects/relevare.png",
      desc: "A clinic and spa management system for a skincare boutique salon, built with React, Next.js, and Supabase. Features client profiling, appointment management, and a modern dashboard UI.",
      fullDesc: `Relevare is a comprehensive clinic and spa management system tailored for a skincare boutique salon. It streamlines daily operations from client intake to appointment scheduling, giving staff a clean, modern interface to work from.

Key Features:
• Client profiling with treatment history and skin records
• Appointment booking and calendar management
• Staff dashboard with daily schedule overview
• Service and package management
• Secure authentication via Supabase Auth
• Real-time data updates with Supabase

Built with React and Next.js for a fast, SSR-capable frontend, and Supabase for a scalable backend-as-a-service solution. The UI is designed to feel clinical yet welcoming, matching the salon's brand aesthetic.`,
      tech: ["React", "Next.js", "Supabase"],
      liveUrl: "https://skinclinic.vercel.app/login",
      githubUrl: "https://github.com/MARKADUCAL/relevare",
    },
  ];

  return (
    <section id="projects" className="projects page-reveal">
      <div className="projects-container">
        <div className="projects-header">
          <p className="section-label">Work</p>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div key={proj.title} className="project-card" style={{ "--i": i }}>
              {/* Project Image */}
              <div className="project-image">
                <img
                  src={proj.image}
                  alt={`${proj.title} screenshot`}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.classList.add("no-image");
                  }}
                />
                <div className="project-image-overlay">
                  <i className={`fa-solid ${proj.icon}`}></i>
                </div>
              </div>

              <div className="project-top">
                <div className="project-icon">
                  <i className={`fa-solid ${proj.icon}`}></i>
                </div>
                <div className="project-links">
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>

              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.desc}</p>

              <div className="project-tech">
                {proj.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-buttons">
                <button
                  className="btn btn-primary"
                  onClick={() => setSelected(proj)}
                >
                  <i className="fa-solid fa-circle-info"></i> View Details
                </button>
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>{" "}
                  Live
                </a>
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="modal-image">
              <img
                src={selected.image}
                alt={`${selected.title} screenshot`}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.classList.add("no-image");
                }}
              />
              <div className="modal-image-overlay">
                <i className={`fa-solid ${selected.icon}`}></i>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-header-row">
                <div className="project-icon">
                  <i className={`fa-solid ${selected.icon}`}></i>
                </div>
                <h3 className="modal-title">{selected.title}</h3>
              </div>

              <div className="modal-tech">
                {selected.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="modal-desc">
                {selected.fullDesc
                  .split("\n")
                  .map((line, i) =>
                    line.trim() === "" ? <br key={i} /> : <p key={i}>{line}</p>,
                  )}
              </div>

              <div className="modal-actions">
                <a
                  href={selected.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <i className="fa-solid fa-eye"></i> Live Demo
                </a>
                <a
                  href={selected.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <i className="fa-brands fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
