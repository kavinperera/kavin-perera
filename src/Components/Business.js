import React, { useState, useEffect } from 'react';
import './Business.css';
import logoImg from './assets/147d06ae-fbd5-46cd-bb51-7054e3dbbad8.png'; // 
function Business() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const collections = [
    {
      name: "Signature Collection",
      description: "Timeless pieces that define modern elegance",
      items: "12 pieces",
      color: "Navy & Gold"
    },
    {
      name: "Urban Edge",
      description: "Street-inspired luxury for the contemporary individual",
      items: "8 pieces",
      color: "Black & Gold"
    },
    {
      name: "Minimal Luxe",
      description: "Clean lines, maximum impact, pure sophistication",
      items: "6 pieces",
      color: "White & Gold"
    }
  ];

  const achievements = [
    { year: "2024", milestone: "Brand Launch", description: "Born from vision" },
    { year: "2024", milestone: "First Collection", description: "Signature debut" },
    { year: "2025", milestone: "International Recognition", description: "Global presence" }
  ];

  return (
    <div className="klybrix-premium-container">
      {/* Premium Animated Background */}
      <div className="klybrix-premium-bg">
        <div 
          className="klybrix-mouse-trail"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(184, 134, 11, 0.15) 0%, transparent 60%)`
          }}
        />
        <div className="klybrix-premium-grid"></div>
        <div className="klybrix-premium-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`klybrix-particle klybrix-particle-${i + 1}`}></div>
          ))}
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="klybrix-premium-nav">
        <div className="klybrix-nav-content">
          <div className="klybrix-nav-logo">
            <span className="klybrix-logo-symbol">力</span>
            <span className="klybrix-logo-text">KLYBRIX</span>
          </div>
          <div className="klybrix-nav-links">
            <a href="#collections">Collections</a>
            <a href="#story">Story</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="klybrix-premium-hero">
        <div className="klybrix-hero-content">
          <div className="klybrix-hero-badge">
            <span className="klybrix-badge-text">EST. 2024 • SRI LANKA</span>
          </div>
          
          <h1 className="klybrix-hero-title">
            <span className="klybrix-title-main">KLYBRIX</span>
            <span className="klybrix-title-sub">Where Style Meets Code</span>
          </h1>
          
          <p className="klybrix-hero-description">
            Redefining luxury through algorithmic precision and timeless design. 
            Each piece is a calculated statement of sophisticated rebellion.
          </p>
          
          <div className="klybrix-hero-actions">
            <button className="klybrix-btn-primary">
              <span>Explore Collections</span>
              <div className="klybrix-btn-glow"></div>
            </button>
            <button className="klybrix-btn-secondary">
              <span>Our Story</span>
            </button>
          </div>
        </div>
        
        <div className="klybrix-hero-visual">
  <div className="klybrix-logo-showcase">
    <div className="klybrix-logo-ring"></div>
    <div className="klybrix-logo-center">
      {/* ✅ Replace symbol with your logo */}
      <img src={logoImg} alt="Klybrix Logo" className="klybrix-hero-logo" />
      <div className="klybrix-logo-orbit"></div>
    </div>
  </div>
</div>

      </section>

      {/* Collections Preview */}
      <section className="klybrix-collections-section">
        <div className="klybrix-section-header">
          <h2 className="klybrix-section-title">Premium Collections</h2>
          <p className="klybrix-section-subtitle">Curated with precision, crafted for perfection</p>
        </div>
        
        <div className="klybrix-collections-grid">
          {collections.map((collection, index) => (
            <div key={index} className="klybrix-collection-card">
              <div className="klybrix-card-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="klybrix-card-content">
                <h3 className="klybrix-collection-name">{collection.name}</h3>
                <p className="klybrix-collection-desc">{collection.description}</p>
                <div className="klybrix-collection-meta">
                  <span className="klybrix-meta-item">{collection.items}</span>
                  <span className="klybrix-meta-divider">•</span>
                  <span className="klybrix-meta-item">{collection.color}</span>
                </div>
              </div>
              <div className="klybrix-card-hover-effect"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Story */}
      <section className="klybrix-founder-section">
        <div className="klybrix-founder-layout">
          <div className="klybrix-founder-visual">
            <div className="klybrix-founder-frame">
              <div className="klybrix-founder-avatar">
                <span className="klybrix-avatar-initial">K</span>
                <div className="klybrix-avatar-glow"></div>
              </div>
            </div>
          </div>
          
          <div className="klybrix-founder-content">
            <div className="klybrix-founder-header">
              <h2 className="klybrix-founder-title">Visionary Behind the Code</h2>
              <div className="klybrix-founder-meta">
                <span className="klybrix-founder-name">Kavin Mark Perera</span>
                <span className="klybrix-founder-role">Founder & Creative Director</span>
              </div>
            </div>
            
            <div className="klybrix-founder-story">
              <p className="klybrix-story-text">
                "Fashion is the ultimate algorithm—a perfect balance of logic, creativity, and human expression. 
                KLYBRIX emerges from the intersection of my technological background and passion for design."
              </p>
              
              <p className="klybrix-story-text">
                "Every piece we create follows the same principles I apply in code: clean architecture, 
                optimal performance, and elegant solutions. Our navy and gold palette isn't just aesthetic—it's 
                our signature algorithm made visible."
              </p>
            </div>
            
            <div className="klybrix-founder-signature">
              <div className="klybrix-signature-line"></div>
              <span className="klybrix-signature-text">Kavin Mark Perera</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="klybrix-philosophy-section">
        <div className="klybrix-philosophy-grid">
          <div className="klybrix-philosophy-card klybrix-card-primary">
            <div className="klybrix-philosophy-icon">
              <div className="klybrix-icon-geometric"></div>
            </div>
            <h3 className="klybrix-philosophy-title">Algorithmic Design</h3>
            <p className="klybrix-philosophy-desc">Every pattern, every cut calculated with mathematical precision for perfect harmony</p>
          </div>
          
          <div className="klybrix-philosophy-card klybrix-card-secondary">
            <div className="klybrix-philosophy-icon">
              <div className="klybrix-icon-luxury"></div>
            </div>
            <h3 className="klybrix-philosophy-title">Luxury Redefined</h3>
            <p className="klybrix-philosophy-desc">Premium materials meet innovative construction in timeless pieces built to last</p>
          </div>
          
          <div className="klybrix-philosophy-card klybrix-card-tertiary">
            <div className="klybrix-philosophy-icon">
              <div className="klybrix-icon-identity"></div>
            </div>
            <h3 className="klybrix-philosophy-title">Digital Identity</h3>
            <p className="klybrix-philosophy-desc">Wear your code, express your logic, stand apart from the conventional</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="klybrix-timeline-section">
        <h2 className="klybrix-timeline-title">Our Journey</h2>
        <div className="klybrix-timeline">
          {achievements.map((achievement, index) => (
            <div key={index} className="klybrix-timeline-item">
              <div className="klybrix-timeline-marker"></div>
              <div className="klybrix-timeline-content">
                <div className="klybrix-timeline-year">{achievement.year}</div>
                <h3 className="klybrix-timeline-milestone">{achievement.milestone}</h3>
                <p className="klybrix-timeline-desc">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premium CTA */}
      <section className="klybrix-premium-cta">
        <div className="klybrix-cta-content">
          <h2 className="klybrix-cta-title">Join the Algorithm</h2>
          <p className="klybrix-cta-desc">
            Be part of an exclusive community where fashion meets innovation. 
            Limited collections, unlimited possibilities.
          </p>
          <div className="klybrix-cta-actions">
            <button className="klybrix-cta-primary">
              <span>Shop Collection</span>
              <div className="klybrix-btn-shimmer"></div>
            </button>
            <button className="klybrix-cta-secondary">
              <span>Newsletter</span>
            </button>
          </div>
        </div>
        
        <div className="klybrix-cta-visual">
          <div className="klybrix-quote-container">
            <div className="klybrix-quote-mark">"</div>
            <p className="klybrix-quote-text">
              Every thread tells a story.<br/>
              Every design speaks a language.<br/>
              Every piece carries a code.
            </p>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="klybrix-premium-footer">
        <div className="klybrix-footer-content">
          <div className="klybrix-footer-brand">
            <div className="klybrix-footer-logo">
              <span className="klybrix-logo-symbol"></span>
              <span className="klybrix-logo-text">KLYBRIX</span>
            </div>
            <p className="klybrix-footer-tagline">Where Style Meets Code</p>
            
            {/* Social Media Links */}
            <div className="klybrix-social-section">
              <h4 className="klybrix-social-title">Connect With Us</h4>
              <div className="klybrix-social-links">
                <a href="#" className="klybrix-social-link" aria-label="Instagram">
                  <div className="klybrix-social-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <span>Instagram</span>
                </a>
                
                <a href="#" className="klybrix-social-link" aria-label="Facebook">
                  <div className="klybrix-social-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <span>Facebook</span>
                </a>
                
                <a href="#" className="klybrix-social-link" aria-label="YouTube">
                  <div className="klybrix-social-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <span>YouTube</span>
                </a>
                
                <a href="#" className="klybrix-social-link" aria-label="TikTok">
                  <div className="klybrix-social-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </div>
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="klybrix-footer-links">
            <div className="klybrix-footer-section">
              <h4>Collections</h4>
              <a href="#">Signature</a>
              <a href="#">Urban Edge</a>
              <a href="#">Minimal Luxe</a>
            </div>
            <div className="klybrix-footer-section">
              <h4>Brand</h4>
              <a href="#">Our Story</a>
              <a href="#">Philosophy</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="klybrix-footer-bottom">
          <p>&copy; 2025 KLYBRIX. Crafted with precision in Sri Lanka.</p>
        </div>
      </footer>
    </div>
  );
}

export default Business;