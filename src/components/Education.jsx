import './Education.css';

export default function Education() {
  const timeline = [
    {
      period: '2025 — Present',
      title: 'Web Developer Intern (OJT)',
      org: 'On-the-Job Training · Olongapo City',
      desc: 'Working as a web developer intern on real client systems and full-stack features.',
      tags: ['PHP', 'Angular', 'MySQL'],
    },
    {
      period: '2022 — Present',
      title: 'Bachelor of Science in Information Technology',
      org: 'Gordon College · Olongapo City, Philippines',
      desc: 'Currently in 4th year with focus on web systems, database design, and software engineering.',
      tags: ['4th Year', 'BSIT', 'Capstone'],
    },
  ];

  return (
    <section id="education" className="education">
      <div className="education-container">
        <div className="education-header">
          <p className="section-label">Background</p>
          <h2 className="section-title">Education &amp; Experience</h2>
        </div>

        <div className="timeline">
          {timeline.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-org">{item.org}</div>
                <div className="timeline-desc">{item.desc}</div>
                <div className="timeline-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="timeline-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
