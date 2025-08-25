import React, { useState, useEffect } from "react";
import "./Contact.css";
import { 
  FaLinkedin, 
  FaGithub, 
  FaInstagram, 
  FaEnvelope, 
  FaFacebook, 
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaRocket,
  FaUser,
  FaComments
} from "react-icons/fa";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear form status when user starts typing
    if (formStatus) setFormStatus('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/kavinmark24/", label: "LinkedIn", color: "#0077b5" },
    { icon: FaGithub, href: "https://github.com/kavinperera", label: "GitHub", color: "#ffffff" },
    { icon: FaInstagram, href: "https://www.instagram.com/kavinmark24/", label: "Instagram", color: "#e4405f" },
    { icon: FaFacebook, href: "https://www.facebook.com/kavinmark24/", label: "Facebook", color: "#1877f2" },
    { icon: FaYoutube, href: "https://www.youtube.com/@KavinMark", label: "YouTube", color: "#ff0000" },
    { icon: FaTwitter, href: "https://twitter.com/kavinmark24", label: "Twitter", color: "#1da1f2" },
  ];

  return (
    <div className="contact-container">
      {/* Dynamic Background */}
      <div className="contact-background">
        <div 
          className="mouse-gradient"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
          }}
        />
        <div className="grid-overlay"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="floating-elements">
      <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>

      {/* Main Content */}
      <div className={`contact-content ${isVisible ? 'fade-in' : ''}`}>
        
        {/* Header Section */}
        <header className="contact-header">
          <div className="header-decoration">
          </div>
          <h1 className="main-title">
            Let's <span className="title-highlight">Connect</span>
          </h1>
          <p className="subtitle">
            Ready to collaborate? Drop me a message and let's create something amazing together.
          </p>
        </header>

        {/* Content Grid */}
        <div className="contact-grid">
          
          {/* Left Section */}
          <div className="contact-left">
            
            {/* Contact Information 
            <div className="info-card">
              <div className="card-header">
                <FaUser className="card-icon" />
                <h2>Get In Touch</h2>
              </div>
              
              <div className="contact-methods">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.href} 
                    className="contact-method"
                    data-label={item.label}
                  >
                    <div className="method-icon">
                      <item.icon />
                    </div>
                    <div className="method-details">
                      <span className="method-label">{item.label}</span>
                      <span className="method-text">{item.text}</span>
                    </div>
                    <div className="method-arrow">→</div>
                  </a>
                ))}
              </div>
            </div>*/}

            {/* Social Media */}
            <div className="social-card">
              <div className="card-header">
                <div className="social-pulse"></div>
                <h2>Follow Me</h2>
              </div>
              
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="social-link"
                    aria-label={social.label}
                    style={{ '--social-color': social.color }}
                  >
                    <social.icon />
                    <span className="social-tooltip">{social.label}</span>
                  </a>
                ))}
              </div>
              
              <p className="social-description">
                Stay connected and follow my journey in technology and innovation.
              </p>
            </div>

            {/* Professional Quote
            <div className="quote-card">
              <div className="quote-mark">"</div>
              <blockquote className="quote-text">
                Innovation distinguishes between a leader and a follower. 
                Let's build the future together.
              </blockquote>
              <div className="quote-author">— Your Personal Philosophy</div>
            </div>*/}
          </div>

          {/* Right Section - Contact Form */}
          <div className="contact-right">
            <div className="form-card">
              <div className="card-header">
                <FaRocket className="card-icon" />
                <h2>Send Message</h2>
              </div>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-field">
                    <label htmlFor="name">
                      <FaUser className="field-icon" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      //placeholder="Enter your name"
                      required
                      disabled={isSubmitting}
                    />
                    <div className="field-border"></div>
                  </div>
                  
                  <div className="form-field">
                    <label htmlFor="email">
                      <FaEnvelope className="field-icon" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      //placeholder="your@email.com"
                      required
                      disabled={isSubmitting}
                    />
                    <div className="field-border"></div>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="subject">
                    <FaComments className="field-icon" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    //placeholder="What's this about?"
                    required
                    disabled={isSubmitting}
                  />
                  <div className="field-border"></div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">
                    <FaComments className="field-icon" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder=""
                    rows="5"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                  <div className="field-border"></div>
                </div>

                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  <span className="btn-text">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <div className="btn-icon">
                    {isSubmitting ? (
                      <div className="spinner"></div>
                    ) : (
                      <FaRocket />
                    )}
                  </div>
                  <div className="btn-bg"></div>
                </button>

                {/* Form Status */}
                {formStatus && (
                  <div className={`form-status ${formStatus}`}>
                    {formStatus === 'success' ? (
                      <>
                        <div className="status-icon">✓</div>
                        <span>Message sent successfully! I'll get back to you soon.</span>
                      </>
                    ) : (
                      <>
                        <div className="status-icon">✗</div>
                        <span>Something went wrong. Please try again.</span>
                      </>
                    )}
                  </div>
                )}
              </form>

              {/* Response Time Info */}
              <div className="response-info">
                <div className="info-item">
                  <div className="info-dot active"></div>
                  
                </div>
                <div className="info-item">
                  <div className="info-dot"></div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;