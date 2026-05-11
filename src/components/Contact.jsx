import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const contacts = [
    { href: 'mailto:aducalremegio03@gmail.com', icon: 'fa-envelope', label: 'Email', value: 'aducalremegio03@gmail.com', fa: 'solid' },
    { href: 'http://github.com/MARKYYY03', icon: 'fa-github', label: 'GitHub', value: 'github.com/markaducal', fa: 'brands' },
    { href: 'https://www.linkedin.com/in/mark-aducal-9b952025b/', icon: 'fa-linkedin-in', label: 'LinkedIn', value: 'linkedin.com/in/markaducal', fa: 'brands' },
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async () => {
    try {
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.name || !formData.email || !formData.message) {
        alert('Please fill all fields');
        return;
      }
      if (!emailRegex.test(formData.email)) {
        alert('Please enter a valid email');
        return;
      }

      // Create FormData for submission
      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('message', formData.message);

      // Send email via FormSubmit (works without backend)
      const response = await fetch('https://formsubmit.co/aducalremegio03@gmail.com', {
        method: 'POST',
        body: form,
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert('Error sending message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Let's Work Together</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('mailto') ? undefined : '_blank'}
                rel={contact.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="contact-card"
              >
                <div className="contact-icon">
                  <i className={`fa-${contact.fa} ${contact.icon}`}></i>
                </div>
                <div>
                  <div className="contact-label">{contact.label}</div>
                  <div className="contact-value">{contact.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="contact-form-container">
            {!submitted ? (
              <>
                <div className="form-group">
                  <label htmlFor="fname">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Juan dela Cruz"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="femail">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="juan@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="fmessage">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button onClick={handleSubmit} className="btn btn-primary">
                  <i className="fa-solid fa-paper-plane"></i> Send Message
                </button>
              </>
            ) : (
              <div className="form-success">
                <i className="fa-solid fa-circle-check"></i>
                <strong>Message sent! 🎉</strong>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
