import "./Blog.css";

export default function Blog() {
  const blogPosts = [
    {
      icon: "fa-code",
      title: "Building Scalable Web Applications with Laravel",
      date: "March 15, 2026",
      readTime: "5 min read",
      excerpt:
        "Exploring best practices for building maintainable and scalable web applications using Laravel framework. Learn about MVC architecture, Eloquent ORM, and API development.",
      tags: ["Laravel", "PHP", "Backend"],
      link: "#",
    },
    {
      icon: "fa-lightbulb",
      title:
        "My Journey as a BSIT Student: From Classroom to Real-World Development",
      date: "February 28, 2026",
      readTime: "7 min read",
      excerpt:
        "Reflecting on my experiences as a 4th-year BSIT student, the challenges I faced during my OJT, and the valuable lessons learned while working on real-world projects.",
      tags: ["Career", "Learning", "Web Development"],
      link: "#",
    },
  ];

  return (
    <section id="blog" className="blog page-reveal">
      <div className="blog-container">
        <div className="blog-header">
          <p className="section-label">Insights</p>
          <h2 className="section-title">Blog Posts</h2>
          <p className="section-subtitle">
            Sharing my thoughts on web development, technology, and my learning
            journey.
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, i) => (
            <article
              key={post.title}
              className="blog-card"
              style={{ "--i": i }}
            >
              <div className="blog-icon">
                <i className={`fa-solid ${post.icon}`}></i>
              </div>

              <div className="blog-meta">
                <span className="blog-date">
                  <i className="fa-regular fa-calendar"></i> {post.date}
                </span>
                <span className="blog-read-time">
                  <i className="fa-regular fa-clock"></i> {post.readTime}
                </span>
              </div>

              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>

              <div className="blog-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <a href={post.link} className="blog-read-more">
                Read More <i className="fa-solid fa-arrow-right"></i>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
