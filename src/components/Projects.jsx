import './Projects.css';

export default function Projects() {
  const projects = [
    {
      icon: 'fa-store',
      title: 'LeydiBoss',
      desc: 'A capstone web system for LeydiBoss Online built with Angular, PHP, and MySQL, focused on smooth customer experience and practical business operations.',
      tech: ['Angular', 'PHP', 'MySQL'],
      liveUrl: 'https://leydiboss.online',
      githubUrl: 'https://github.com/MARKADUCAL/capstone',
    },
    {
      icon: 'fa-spa',
      title: 'Relevare',
      desc: 'A clinic and spa management system for a skincare boutique salon, built with React, Next.js, and Supabase. Features client profiling, appointment management, and a modern dashboard UI.',
      tech: ['React', 'Next.js', 'Supabase'],
      liveUrl: 'https://skinclinic.vercel.app/login',
      githubUrl: 'https://github.com/MARKADUCAL/relevare',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <p className="section-label">Work</p>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div key={proj.title} className="project-card" style={{ '--i': i }}>
              <div className="project-top">
                <div className="project-icon">
                  <i className={`fa-solid ${proj.icon}`}></i>
                </div>
                <div className="project-links">
                  <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" title="Live Demo">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                  <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>

              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.desc}</p>

              <div className="project-tech">
                {proj.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <i className="fa-solid fa-eye"></i> Live Demo
                </a>
                <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <i className="fa-brands fa-github"></i> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
