import React, { useState, useEffect } from 'react';
import './Home.css';
import { useNavigate } from "react-router-dom";
import profileImg from "./assets/kkk.jpg";

const Home = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/contact");
  };
  
  const goToAbout = () => {
    navigate("/about");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: "📊",
      title: "Project Management",
      description: "Agile methodologies, JIRA, and cross-functional team coordination"
    },
    {
      icon: "👾",
      title: "UI UX Design",
      description: "Familiar with Figma and other design tools experience in responsive design"
    },
    {
      icon: "💻",
      title: "Full Stack Development",
      description: "Java, Python, React applications with modern database solutions"
    }
  ];

  return (
    <div className="home-portfolio-container">
      {/* Navigation */}
      <nav className={`home-portfolio-nav ${scrollY > 100 ? 'home-nav-scrolled' : ''}`}>
        <div className="home-nav-container">
          <div className="home-nav-content">
            <div className="home-logo">
              <span className="home-logo-primary">Kavin</span>
              <span className="home-logo-secondary">Perera</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="home-desktop-menu">
              {['Home', 'About', 'Business', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="home-nav-link"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="home-mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="home-mobile-menu">
              {['Home', 'About', 'Business', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="home-mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="home-hero-section">
        {/* Animated Background */}
        <div className="home-hero-background">
          <div className="home-gradient-overlay"></div>
          <div className="home-floating-element home-element-1"></div>
          <div className="home-floating-element home-element-2"></div>
        </div>

        <div className="home-hero-content">
          {/* Profile Photo Section */}
          <div className="home-profile-photo-container">
            <div className="home-profile-photo">
              {/* Replace the src with your actual photo path */}
              <img 
                src={profileImg}
                alt="Kavin Mark Perera" 
                className="home-profile-image"
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback placeholder */}
              <div className="home-photo-placeholder" style={{display: 'none'}}>
                <span className="home-photo-icon">📸</span>
                <span className="home-photo-text">Add Photo</span>
              </div>
            </div>
          </div>

          <div className="home-hero-text">
            <h1 className="home-hero-title">
              Hi, I'm{' '}
              <span className="home-hero-name">
                Kavin Mark Perera
              </span>
            </h1>
            
            <p className="home-hero-description">
             <b>Information Systems Engineering Graduate</b>   |   <b> Intern Project Manager</b>    |   <b>Creator</b>   |  <b>Karateka</b> 
            </p>
          </div>

          <div className="home-hero-buttons">
            <button className="home-btn-primary" onClick={goToAbout}>
            <b> More About Me</b> 
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="home-scroll-indicator">
            
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="home-services-section">
        <div className="home-services-container">
          <div className="home-section-header">
            <h2 className="home-section-title">
              My <span className="home-title-accent">Expertise</span>
            </h2>
            <p className="home-section-description">
              Comprehensive technical skills across development, management, and analysis
            </p>
          </div>

          <div className="home-services-grid">
            {services.map((service, index) => (
              <div key={index} className="home-service-card">
                <div className="home-service-icon">
                  <span className="home-icon-emoji">{service.icon}</span>
                </div>
                <h3 className="home-service-title">
                  {service.title}
                </h3>
                <p className="home-service-description">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta-section">
        <div className="home-cta-container">
          <h2 className="home-cta-title">
            Let's Work Together
          </h2>
          <p className="home-cta-description">
            Ready to collaborate on your next project? I'm available for 
            freelance work, and full-time opportunities.
          </p>
          <button className="home-cta-button" onClick={handleClick}>
            Start a Conversation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="home-footer-container">
          <div className="home-footer-content">
            <div className="home-footer-logo">
              <span className="home-logo-primary">Kavin</span>
              <span className="home-logo-secondary">Perera</span>
            </div>
            
            <div className="home-footer-text">
              © 2025 Kavin Mark Perera
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;