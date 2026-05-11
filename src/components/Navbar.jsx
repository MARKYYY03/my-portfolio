import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const toggleMobileNav = () => setIsOpen(!isOpen);
  const closeMobileNav = () => setIsOpen(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    const html = document.documentElement;
    if (isDark) {
      html.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const navLinks = ['about', 'skills', 'projects', 'education', 'contact'];

  return (
    <nav id="navbar" className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          mark<span className="accent">.</span>aducal
        </a>

        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link}`}>{link.charAt(0).toUpperCase() + link.slice(1)}</a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button
            id="themeToggle"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <i className={`fa-solid fa-${isDark ? 'moon' : 'sun'}`}></i>
          </button>

          <button
            id="hamburger"
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={toggleMobileNav}
            aria-label="Open menu"
          >
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div id="navMobile" className="nav-mobile">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={closeMobileNav}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
