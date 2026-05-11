import { useEffect } from 'react';
import './Footer.css';

export default function Footer() {
  useEffect(() => {
    document.getElementById('year').textContent = new Date().getFullYear();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          Designed &amp; built by
          <a href="#home"> Mark Aducal</a>
          · BSIT @ Gordon College ·
          <span id="year"></span>
        </p>
        <p className="footer-subtext">
          Built with React, Tailwind CSS &amp; Vite
        </p>
      </div>
    </footer>
  );
}
