import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="brand-link" onClick={closeMobileMenu}>
            <span className="brand-text">
              <span className="brand-primary">Kavin</span>
              <span className="brand-secondary">Perera</span>
            </span>
          </Link>
        </div>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className="navbar-nav">
            <Link 
              to="/" 
              className={`nav-link ${isActiveLink('/') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <span>Home</span>
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActiveLink('/about') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <span>About</span>
            </Link>
            <Link 
              to="/business" 
              className={`nav-link ${isActiveLink('/business') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <span>Business</span>
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActiveLink('/contact') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <span>Contact</span>
            </Link>
          </div>
        </div>

        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;