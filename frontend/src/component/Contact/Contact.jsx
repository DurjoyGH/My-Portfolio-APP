// components/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Using EmailJS for sending emails
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'durjoyghosh328@gmail.com',
      link: 'mailto:durjoyghosh328@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+880 1859-093806',
      link: 'tel:+8801859093806'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Jashore, Bangladesh',
      link: null
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/durjoy-ghosh-just/'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/DurjoyGH',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/durjoy-ghosh-just/',
      color: '#0077b5'
    },
    {
      name: 'Facebook',
      icon: '🏆',
      url: 'https://www.facebook.com/durjoy.ghosh.56/',
      color: '#1f8dd6'
    },
    {
      name: 'X',
      icon: '👨‍💻',
      url: 'https://x.com/Durjoy_22',
      color: '#5b4638'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>

        <div className="contact-content">
          <div className="contact-info fade-in-up">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and development.
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container fade-in-up">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="status-message success">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="status-message error">
                  ❌ Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
