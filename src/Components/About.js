import React, { useState, useEffect } from "react";
import "./About.css";

import { 
  FaUser, 
  FaGraduationCap, 
  FaBriefcase, 
  FaTrophy, 
  FaProjectDiagram, 
  FaCode, 
  FaDownload,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaPhone,
  FaEnvelope,
  FaMedal,
  FaCertificate,
  FaAward,
  FaBuilding,
  FaCalendar,
  FaGithub,
  FaExternalLinkAlt,
  FaBehance,
  FaRunning
} from "react-icons/fa";

function About() {
  const [section, setSection] = useState("personal");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleDownloadCV = () => {
    // Create a temporary link for CV download
    const link = document.createElement('a');
    link.href = '/KAVIN PERERA.pdf'; // Update with actual CV path
    link.download = 'Kavin_Perera_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderContent = () => {
    switch (section) {
      case "personal":
        return (
          <div className="resume-section">
            <div className="section-content">
              <div className="personal-header">
                <div className="name-section">
                  <h1 className="full-name">Kavin Mark Perera</h1>
                  <p className="subtitle"></p>
                </div>
                
                <div className="contact-section">
                  <div className="contact-row">
                    <div className="contact-item">
                      <FaMapMarkerAlt className="contact-icon" />
                      <span>Kelaniya, Sri Lanka</span>
                    </div>
                    <div className="contact-item">
                      <FaCalendarAlt className="contact-icon" />
                      <span>April 24, 2001 (Age 24)</span>
                    </div>
                  
                    <div className="contact-item">
                      <FaPhone className="contact-icon" />
                      <span>+94 77 138 6743</span>
                    </div>
                    <div className="contact-item">
                      <FaEnvelope className="contact-icon" />
                      <span>pererakavin552@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="resume-grid">
                <div className="summary-section">
                  <h3>About Me</h3>
                  <p>
                  I am a graduate in Information Systems Engineering with internship experience in software development 
                  and project management support.I am passionate about bridging IT and business through project management, 
                  ERP systems, and innovative solutions.
                  </p>
                </div>

                <div className="objectives-section">
                  <h3>Career Objectives</h3>
                  <div className="objectives-list">
                    <div className="objective-item">
                      <span className="objective-icon">🎯</span>
                      <span>Advance expertise in full-stack development and systems analysis</span>
                    </div>
                    <div className="objective-item">
                      <span className="objective-icon">🎯</span>
                      <span>Contribute to innovative software development projects</span>
                    </div>
                    <div className="objective-item">
                      <span className="objective-icon">🎯</span>
                      <span>Lead technology initiatives and digital transformation efforts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "education":
        return (
          <div className="resume-section">
            <div className="section-header">
              <h2 className="section-title">Educational Journey</h2>
            </div>
            
            <div className="timeline-container">
              <div className="education-entry current">
                <div className="entry-header">
                  <div className="entry-title">
                    <h3>BSc (Hons) in Information Technology Specialized in Information Systems Engineering</h3>
                    <span className="entry-status completed">2021 - 2025</span>
                  </div>
                  <div className="entry-meta">
                    <span className="institution">Sri Lanka Institute of Information Technology (SLIIT)</span>
                  </div>
                </div>
                <div className="entry-content">
                 
                  <div className="key-areas">
                    <span className="area-tag">Systems Analysis</span>
                    <span className="area-tag">Data Visualization</span>
                    <span className="area-tag">Project Management</span>
                    <span className="area-tag">Full-Stack Development</span>
                  </div>
                </div>
              </div>

              <div className="education-entry">
                <div className="entry-header">
                  <div className="entry-title">
                    <h3>G.C.E Advanced Level</h3>
                    <span className="entry-status completed">2020</span>
                  </div>
                  <div className="entry-meta">
                    <span className="institution">St. Joseph's College Colombo 10</span>
                  </div>
                </div>
                <div className="entry-content">
                  <div className="grades-display">
                    <div className="grade-item excellent">
                      <span className="subject">Combined Mathematics</span>
                      <span className="grade">S</span>
                    </div>
                    <div className="grade-item excellent">
                      <span className="subject">Physics</span>
                      <span className="grade">S</span>
                    </div>
                    <div className="grade-item excellent">
                      <span className="subject">ICT</span>
                      <span className="grade">S</span>
                    </div>
                    <div className="grade-item good">
                      <span className="subject">General English</span>
                      <span className="grade">B</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="education-entry">
                <div className="entry-header">
                  <div className="entry-title">
                    <h3>G.C.E Ordinary Level</h3>
                    <span className="entry-status completed">2017</span>
                  </div>
                  <div className="entry-meta">
                    <span className="institution">St. Joseph's College Colombo 10</span>
                  </div>
                </div>
                <div className="entry-content">
                  <div className="grade-summary">
                    <div className="summary-stat">
                      <span className="stat-number">5</span>
                      <span className="stat-label">A Passes</span>
                    </div>
                    <div className="summary-stat">
                      <span className="stat-number">2</span>
                      <span className="stat-label">B Passes</span>
                    </div>
                    <div className="summary-stat">
                      <span className="stat-number">2</span>
                      <span className="stat-label">C Passes</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="education-entry">
                <div className="entry-header">
                  <div className="entry-title">
                    <h3>Microsoft Office & Hardware Certificate</h3>
                    <span className="entry-status completed">2018</span>
                  </div>
                  <div className="entry-meta">
                    <span className="institution">University of Kelaniya</span>
                  </div>
                </div>
                <div className="entry-content">
                  <div className="certification-details">
                    <span className="cert-tag">Microsoft Office Suite</span>
                    <span className="cert-tag">Hardware Fundamentals</span>
                    <span className="cert-tag">System Administration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "career":
        return (
          <div className="resume-section">
            <div className="section-header">
              <h2 className="section-title">Sports Journey</h2>
            </div>
            
            <div className="timeline-container">
              <div className="career-entry current">
                <div className="entry-header">
                  <div className="entry-title">
                    <h3>SLIIT | Sri Lanka Institute of Information Technology (University)</h3>
                    <span className="entry-status current">2021 - 2025</span>
                  </div>
                  <div className="entry-meta">
                  <span className="skill-level intermediate">KARATE</span>
                  </div>
                </div>
                <div className="entry-content">
                                                                         
                    <li>SLIIT Karate Captain | 2024 – 2025</li>
                    <li>Men's Best Karate Player | 2024</li>
                    <li>Achieved Colors in 2022, 2023</li>
                    <li>SLIIT Karate Team | 2021 – 2025</li>
                  
                </div>
              </div>

              <div className="career-entry">
                <div className="entry-header">
                  <div className="entry-title">
                    <h3>St. Joseph’s College Colombo 10</h3>
                    <span className="entry-status current">2007 - 2020</span>
                  </div>
                  <div className="entry-meta">
                  <span className="skill-level intermediate">KARATE</span>
                  </div>
                </div>
                <div className="entry-content">
              
                    <li>Achieved Colors in 2018</li>
                    <li>School Karate Team | 2017 – 2020</li>
                  
                </div>
              </div>
            </div>
          </div>
        );

      case "projects":
        return (
          <div className="resume-section">
            <div className="section-header">
              <h2 className="section-title">My Projects</h2>
            </div>
            
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-header">
                  <h3>Employee Management System </h3>
                  <div className="project-links">
                    <FaGithub className="project-link" />
                  </div>
                </div>
                <div className="project-tech">
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">MySQL</span>
                  <span className="tech-tag">Swing</span>
                </div>
                <p className="project-description">
                  Comprehensive university management system for student registration, course management, and academic tracking.
                </p>
                <div className="project-features">
                  <span>• Student Management</span>
                  <span>• Course Registration</span>
                  <span>• Grade Tracking</span>
                </div>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3>E-Commerce Web Application</h3>
                  <div className="project-links">
                    <FaGithub className="project-link" />
                   {/* <FaExternalLinkAlt className="project-link" />*/}
                  </div>
                </div>
                <div className="project-tech">
                  <span className="tech-tag">React.js</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MongoDB</span>
                </div>
                <p className="project-description">
                  Full-stack e-commerce platform with user authentication, product management, and payment integration.
                </p>
                <div className="project-features">
                  <span>• Shopping Cart</span>
                  <span>• Payment Gateway</span>
                  <span>• Admin Dashboard</span>
                </div>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3>Hotel Management System </h3>
                  <div className="project-links">
                    <FaGithub className="project-link" />
                  </div>
                </div>
                <div className="project-tech">
                  <span className="tech-tag">Power BI</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">SQL</span>
                </div>
                <p className="project-description">
                  Interactive dashboard for business analytics with real-time data visualization and reporting capabilities.
                </p>
                <div className="project-features">
                  <span>• Real-time Analytics</span>
                  <span>• Interactive Charts</span>
                  <span>• Custom Reports</span>
                </div>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3>Health Management Application </h3>
                  <div className="project-links">
                    <FaBehance className="project-link" />
                  </div>
                </div>
                <div className="project-tech">
                  <span className="tech-tag">figma</span>
                  <span className="tech-tag">Draw.io</span>
                </div>
                <p className="project-description">
                  Project management tool for team collaboration, task tracking, and deadline management.
                </p>
                <div className="project-features">
                  <span>• Task Assignment</span>
                  <span>• Progress Tracking</span>
                  <span>• Team Collaboration</span>
                </div>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3>Multi-Lingual Mobile Application </h3>
                  <div className="project-links">
                    <FaBehance className="project-link" />
                  </div>
                </div>
                <div className="project-tech">
                  <span className="tech-tag">figma</span>
                  <span className="tech-tag">Draw.io</span>
                </div>
                <p className="project-description">
                  Project management tool for team collaboration, task tracking, and deadline management.
                </p>
                <div className="project-features">
                  <span>• Task Assignment</span>
                  <span>• Progress Tracking</span>
                  <span>• Team Collaboration</span>
                </div>
              </div>



            </div>
          </div>
        );

        case "Sports":
        return (
          <div className="resume-section">
            <div className="section-header">
              <h2 className="section-title">Sports Achievement</h2>
            </div>
            
            <div className="timeline-container">
              <div className="career-entry current">
                <div className="entry-header">
                  <div className="entry-title">
                    <h3>SLIIT | Sri Lanka Institute of Information Technology (University)</h3>
                    <span className="entry-status current">2021 - 2025</span>
                  </div>
                  <div className="entry-meta">
                  <span className="skill-level intermediate">KARATE</span>
                  </div>
                </div>
                <div className="entry-content">
                                                                         
                    <li>SLIIT Karate Captain | 2024 – 2025</li>
                    <li>Men's Best Karate Player | 2024</li>
                    <li>Achieved Colors in 2022, 2023</li>
                    <li>SLIIT Karate Team | 2021 – 2025</li>
                  
                </div>
              </div>

              <div className="career-entry">
                <div className="entry-header">
                  <div className="entry-title">
                    <h3>St. Joseph’s College Colombo 10</h3>
                    <span className="entry-status current">2007 - 2020</span>
                  </div>
                  <div className="entry-meta">
                  <span className="skill-level intermediate">KARATE</span>
                  </div>
                </div>
                <div className="entry-content">
              
                    <li>Achieved Colors in 2018</li>
                    <li>School Karate Team | 2017 – 2020</li>
                  
                </div>
              </div>
            </div>
          </div>
        );

      // Updated Skills Section JSX for 5 cards in one line
case "skills":
  return (
    <div className="resume-section">
      <div className="section-header">
        <h2 className="section-title">Technical Skills</h2>
      </div>
      
      <div className="skills-layout">
        <div className="skills-column">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <div className="skill-list">
              <div className="skill-item">
                <span className="skill-name">Java</span>
                <span className="skill-level advanced">Advanced</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">Python</span>
                <span className="skill-level skill-level advanced">Advanced</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">JavaScript</span>
                <span className="skill-level eskill-level advanced">Advanced</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">C</span>
                <span className="skill-level eskill-level intermediate">Intermediate</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">React</span>
                <span className="skill-level skill-level advanced">Advanced</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">HTML5/CSS3</span>
                <span className="skill-level eskill-level advanced">Advanced</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">MySQL</span>
                <span className="skill-level advanced">Advanced</span>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-column">
          <div className="skill-category">
            <h3>Project Management Tools</h3>
            <div className="skill-list">
            <div className="skill-item">
                <span className="skill-name">JIRA | Confluence</span>
                <span className="skill-level skill-level advanced">Advanced</span>
              </div> 
              <div className="skill-item">
                <span className="skill-name">Trello</span>
                <span className="skill-level skill-level skill-level intermediate">Intermediate</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">Power BI</span>
                <span className="skill-level skill-level advanced">Advanced</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">Microsoft Office</span>
                <span className="skill-level skill-level advanced">Advanced</span>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-column">
          <div className="skill-category">
            <h3>Designing Tools</h3>
            <div className="skill-list">
              <div className="skill-item">
                <span className="skill-name">Figma</span>
                <span className="skill-level skill-level advanced">Advanced</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">Mock Flow</span>
                <span className="skill-level skill-level intermediate">Intermediate</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">Draw.io</span>
                <span className="skill-level skill-level advanced">Advanced</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">Canva</span>
                <span className="skill-level skill-level advanced">Advanced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  case "careerJourney":
        return (
          <div className="resume-section">
            <div className="section-header">
              <h2 className="section-title">Career Journey</h2>
            </div>
            
            <div className="timeline-container">
              <div className="career-entry current">
                <div className="entry-header">
                  <div className="entry-title">
                    <h3>IT Project Manager Intern</h3>
                    <span className="entry-status current">2025.06.09 – 2026.06.09</span>
                  </div>
                  <div className="entry-meta">
                    <span className="institution">FYXO Global</span>
                    <span className="duration">1 year</span>
                  </div>
                </div>
                <div className="entry-content">
                  
                    <li>Assisted in planning, organizing, and coordinating project activities to ensure on-time and successful delivery</li>
                    <li>Collaborated with cross-functional teams (product, design, engineering) to monitor progress and resolve roadblocks</li>
                    <li>Maintained detailed project timelines, milestones, and deliverables aligned with business goals</li>
                    <li>Supported Agile project management practices, including sprint planning, daily stand-ups, and retrospectives</li>
                    <li>Managed project tracking tools such as JIRA, Trello, and Asana to ensure visibility and accountability</li>
                    <li>Documented project learnings, best practices, and process improvements to enhance team efficiency</li>
                    <li>Conducted basic testing and issue troubleshooting to support smooth handover and deployment</li>
                    <li>Participated in team reviews and knowledge-sharing sessions to improve collaboration and delivery quality</li>
                    <li>Stayed up to date with emerging project management trends, tools, and frameworks</li>
                  
                </div>
              </div>

              <div className="career-entry">
                <div className="entry-header">
                  <div className="entry-title">
                    <h3>Information Technology Intern</h3>
                    <span className="entry-status completed">2023.08.28 – 2024.02.28</span>
                  </div>
                  <div className="entry-meta">
                    <span className="institution">Zindhu Holdings (Pvt) Ltd</span>
                    <span className="duration">6 months</span>
                  </div>
                </div>
                <div className="entry-content">
                  
                    <li>Analyzed business requirements and contributed to the development of a web-based software application using Java and React</li>
                    <li>Performed QA manual testing with a focus on mobile apps; authored and executed detailed test cases to ensure product quality</li>
                    <li>Created and maintained Excel-based reports to document bugs and summarize QA findings</li>
                    <li>Collaborated with cross-functional teams to enhance functionality based on stakeholder feedback</li>
                    <li>Assisted in identifying inefficiencies in internal workflows and recommended process improvements</li>
                  
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`resume-container ${isVisible ? 'visible' : ''}`}>
      {/* Header */}
      <div className="resume-header">
        <div className="header-content">
          <h1 className="resume-title">Professional Resume</h1>
          <p className="resume-subtitle"></p>
          
          <button onClick={handleDownloadCV} className="download-resume-btn">
            <FaDownload className="download-icon" />
            <span>Download Resume PDF</span>
          </button>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="resume-navigation">
        <div className="nav-tabs">
          {[
            { id: "personal", icon: FaUser, text: "Personal Info" },
            { id: "education", icon: FaGraduationCap, text: "Educational Journey" },
            { id: "careerJourney", icon: FaBriefcase, text: "Career Journey" },
            { id: "skills", icon: FaCode, text: "Technical Skills" },
            { id: "projects", icon: FaProjectDiagram, text: "My Projects" },
            { id: "Sports", icon: FaRunning, text: "Sports" }
            
          ].map((tab) => (
            <button 
              key={tab.id}
              className={`nav-tab ${section === tab.id ? "active" : ""}`}
              onClick={() => setSection(tab.id)}
            >
              <tab.icon className="tab-icon" />
              <span className="tab-text">{tab.text}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="resume-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default About;