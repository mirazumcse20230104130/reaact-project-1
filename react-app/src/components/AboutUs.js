import React, { useState } from 'react';
import './AboutUs.css';
import headerImage from './header.jpg'; // Adjust path if in a different folder (e.g., './assets/header.jpg')

const AboutUs = () => {
  const [showMission, setShowMission] = useState(false);
  const [showTeam, setShowTeam] = useState(false);

  return (
    <div className="about-us-container">
      <header>
        <div>
          <h1>Annodaan</h1>
          <p>From Surplus to Support!</p>
        </div>
        <nav>
          <a href="/">Home</a> | <a href="/latest">Latest</a> | <a href="/about">About Us</a>
        </nav>
      </header>
      <div className="main-layout">
        <div className="sidebar">
          <div className="bar" onClick={() => { setShowMission(true); setShowTeam(false); }}>
            Our Mission and Impact
          </div>
          <div className="bar" onClick={() => { setShowTeam(true); setShowMission(false); }}>
            Our Team
          </div>
        </div>
        <div className="content-section">
          <div className="header-image">
            <img src={headerImage} alt="Header" />
            <div className="overlay-text">Our Mission & Impact</div>
          </div>
          {showMission && (
            <div className="mission-boxes">
              <div className="box">Food Distributed: 10,000+ Meals</div>
              <div className="box">Communities Served: 50+</div>
              <div className="box">Volunteers: 200+</div>
              <div className="box">Sustainability Rate: 85%</div>
            </div>
          )}
          {showTeam && (
            <div className="team-boxes">
              <div className="team-box names">
                <p><strong>Rafa Rafia</strong> - ID: 2023104130</p>
                <p><strong>Mirazum Munira Mahin</strong> - ID: 2023104130</p>
                <p><strong>Jemima Ahmed</strong> - ID: 2023104133</p>
              </div>
              <div className="team-box git">
                <p><a href="https://github.com/rafa" target="_blank" rel="noopener noreferrer">github.com/rafa</a></p>
                <p><a href="https://github.com/mirazum" target="_blank" rel="noopener noreferrer">github.com/mirazum</a></p>
                <p><a href="https://github.com/jemima" target="_blank" rel="noopener noreferrer">github.com/jemima</a></p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;