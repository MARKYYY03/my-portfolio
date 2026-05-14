import "./Skills.css";

export default function Skills() {
  const skillGroups = [
    {
      icon: "fa-paintbrush",
      title: "Frontend",
      iconColor: "cyan",
      skills: [
        {
          name: "HTML / CSS",
          pct: 90,
          desc: "Semantic markup, Flexbox, Grid, Animations",
        },
        {
          name: "JavaScript",
          pct: 78,
          desc: "ES6+, DOM manipulation, Async/Await",
        },
        {
          name: "Angular",
          pct: 72,
          desc: "Components, Services, RxJS, Routing",
        },
        {
          name: "React",
          pct: 60,
          desc: "Hooks, State management, Component lifecycle",
        },
      ],
    },
    {
      icon: "fa-server",
      title: "Backend",
      iconColor: "purple",
      skills: [
        {
          name: "PHP",
          pct: 85,
          desc: "OOP, MVC patterns, Security best practices",
        },
        {
          name: "Laravel",
          pct: 82,
          desc: "REST APIs, Eloquent, Queues, Authentication",
        },
        {
          name: "Node.js",
          pct: 65,
          desc: "Express, Middleware, NPM ecosystem",
        },
        {
          name: "REST API",
          pct: 78,
          desc: "RESTful design, JSON, HTTP methods",
        },
      ],
    },
    {
      icon: "fa-database",
      title: "Database",
      iconColor: "blue",
      skills: [
        {
          name: "MySQL (XAMPP)",
          pct: 82,
          desc: "Complex queries, Joins, Indexing",
        },
        {
          name: "Supabase",
          pct: 60,
          desc: "Real-time subscriptions, Auth, Storage",
        },
        {
          name: "Database Design",
          pct: 75,
          desc: "Normalization, ERD, Relationships",
        },
        {
          name: "Query Optimization",
          pct: 75,
          desc: "Indexes, Query plans, Performance tuning",
        },
      ],
    },
    {
      icon: "fa-wrench",
      title: "Tools & Others",
      iconColor: "accent",
      skills: [
        {
          name: "Git / GitHub",
          pct: 80,
          desc: "Version control, Branching, Collaboration",
        },
        {
          name: "Tailwind CSS (Beginner)",
          pct: 45,
          desc: "Utility-first CSS, Responsive design",
        },
        {
          name: "UI/UX (Figma)",
          pct: 68,
          desc: "Prototyping, Design systems, Wireframes",
        },
        {
          name: "Testing",
          pct: 66,
          desc: "Unit tests, Integration tests, Debugging",
        },
      ],
    },
  ];

  // Helper function to determine proficiency level color
  const getProficiencyLevel = (pct) => {
    if (pct >= 90) return "expert";
    if (pct >= 75) return "advanced";
    if (pct >= 60) return "intermediate";
    return "beginner";
  };

  return (
    <section id="skills" className="skills page-reveal">
      <div className="skills-container">
        <div className="skills-header">
          <p className="section-label">Tech Stack</p>
          <h2 className="section-title">Skills &amp; Technologies</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div key={group.title} className="skill-card" style={{ "--i": i }}>
              <div className="skill-header">
                <div className={`skill-icon skill-icon-${group.iconColor}`}>
                  <i className={`fa-solid ${group.icon}`}></i>
                </div>
                <span className="skill-title">{group.title}</span>
              </div>

              <div className="skill-items">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-item"
                    data-tooltip={skill.desc}
                  >
                    <div className="skill-name-row">
                      <span className="skill-name">{skill.name}</span>
                      <span
                        className={`skill-badge skill-badge-${getProficiencyLevel(skill.pct)}`}
                      >
                        {skill.pct}%
                      </span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className={`progress-fill progress-fill-${getProficiencyLevel(skill.pct)}`}
                        style={{ "--skill-width": `${skill.pct}%` }}
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
