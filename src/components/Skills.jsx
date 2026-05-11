import './Skills.css';

export default function Skills() {
  const skillGroups = [
    {
      icon: 'fa-paintbrush',
      title: 'Frontend',
      skills: [
        { name: 'HTML / CSS', pct: 90 },
        { name: 'JavaScript', pct: 78 },
        { name: 'Angular', pct: 72 },
        { name: 'React', pct: 60 },
      ],
    },
    {
      icon: 'fa-server',
      title: 'Backend',
      skills: [
        { name: 'PHP', pct: 85 },
        { name: 'Laravel', pct: 82 },
        { name: 'Node.js', pct: 65 },
        { name: 'REST API', pct: 78 },
      ],
    },
    {
      icon: 'fa-database',
      title: 'Database',
      skills: [
        { name: 'MySQL (XAMPP)', pct: 82 },
        { name: 'Supabase', pct: 60 },
        { name: 'Database Design', pct: 75 },
        { name: 'Query Optimization', pct: 75 },
      ],
    },
    {
      icon: 'fa-wrench',
      title: 'Tools & Others',
      skills: [
        { name: 'Git / GitHub', pct: 80 },
        { name: 'Tailwind CSS (Beginner)', pct: 45 },
        { name: 'UI/UX (Figma)', pct: 68 },
        { name: 'Testing', pct: 66 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <p className="section-label">Tech Stack</p>
          <h2 className="section-title">Skills &amp; Technologies</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div key={group.title} className="skill-card" style={{ '--i': i }}>
              <div className="skill-header">
                <div className="skill-icon">
                  <i className={`fa-solid ${group.icon}`}></i>
                </div>
                <span className="skill-title">{group.title}</span>
              </div>

              <div className="skill-items">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-name-row">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-pct">{skill.pct}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${skill.pct}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
