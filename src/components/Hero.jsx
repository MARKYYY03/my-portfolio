import { useState, useEffect } from 'react';
import './Hero.css';

const words = [
  'Full-Stack Developer',
  'Problem Solver',
  'Tech Enthusiast',
];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
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
          setIsDeleting(true);
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

  return (
    <section id="home" className="hero page-reveal">
      <div className="hero-content">
        <div className="hero-badge">
          <i className="fa-solid fa-circle" style={{ fontSize: '8px', color: '#22c55e' }}></i>
          Available for OJT &amp; Internships
        </div>

        <h1 className="hero-title">
          Hi, I'm<br />
          <span className="accent">Mark Aducal.</span>
        </h1>

        <div className="hero-typing">
          <span id="typingText">{displayText}</span>
          <span className="cursor"></span>
        </div>

        <p className="hero-description">
          A 4th-year BSIT student at Gordon College, building real-world web systems with a focus on clean code,
          scalable backends, and intuitive user experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            <i className="fa-solid fa-code"></i> View Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            <i className="fa-solid fa-paper-plane"></i> Contact Me
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-dot-container">
          <div className="scroll-dot"></div>
        </div>
        <p>scroll</p>
      </div>
    </section>
  );
}
