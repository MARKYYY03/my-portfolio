import "./Certificates.css";

export default function Certificates() {
  const certificates = [
    {
      icon: "fa-award",
      title: "Full-Stack Web Development Bootcamp",
      issuer: "Udemy",
      date: "January 2026",
      credentialId: "UC-XXXXXXXX",
      description:
        "Comprehensive course covering HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Built multiple full-stack projects including e-commerce platforms and social media applications.",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      link: "#",
    },
    {
      icon: "fa-certificate",
      title: "Laravel Professional Certification",
      issuer: "Laravel",
      date: "November 2025",
      credentialId: "LP-XXXXXXXX",
      description:
        "Advanced Laravel certification covering Eloquent ORM, API development, authentication, queues, and testing. Demonstrated proficiency in building scalable and secure web applications.",
      skills: ["Laravel", "PHP", "MySQL", "REST API"],
      link: "#",
    },
  ];

  return (
    <section id="certificates" className="certificates page-reveal">
      <div className="certificates-container">
        <div className="certificates-header">
          <p className="section-label">Achievements</p>
          <h2 className="section-title">Certificates & Credentials</h2>
          <p className="section-subtitle">
            Professional certifications and courses completed to enhance my
            skills.
          </p>
        </div>

        <div className="certificates-grid">
          {certificates.map((cert, i) => (
            <div
              key={cert.title}
              className="certificate-card"
              style={{ "--i": i }}
            >
              <div className="certificate-header">
                <div className="certificate-icon">
                  <i className={`fa-solid ${cert.icon}`}></i>
                </div>
                <div className="certificate-badge">
                  <i className="fa-solid fa-check-circle"></i> Verified
                </div>
              </div>

              <h3 className="certificate-title">{cert.title}</h3>

              <div className="certificate-issuer">
                <i className="fa-solid fa-building"></i>
                <span>{cert.issuer}</span>
              </div>

              <div className="certificate-meta">
                <span className="certificate-date">
                  <i className="fa-regular fa-calendar"></i> {cert.date}
                </span>
                <span className="certificate-id">
                  <i className="fa-solid fa-fingerprint"></i>{" "}
                  {cert.credentialId}
                </span>
              </div>

              <p className="certificate-description">{cert.description}</p>

              <div className="certificate-skills">
                {cert.skills.map((skill) => (
                  <span key={skill} className="certificate-skill">
                    {skill}
                  </span>
                ))}
              </div>

              <a href={cert.link} className="certificate-link">
                View Credential{" "}
                <i className="fa-solid fa-external-link-alt"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
