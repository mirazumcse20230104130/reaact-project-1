import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header>
        <div>
          <h1>Annodaan</h1>
          <p>From surplus to support!</p>
        </div>
        <nav>
          <a href="/">Home</a> | <a href="/latest">Latest</a> | <a href="/about">About Us</a>
        </nav>
      </header>
      <div className="content">
        <h2>About Us</h2>
        <div className="section team">
          <h3>Team</h3>
          <div className="team-member">
            <p>Rafa Rafia</p>
            <p>ID: 2023104130</p>
          </div>
          <div className="team-member">
            <p>Mirazum Munira Mahin</p>
            <p>ID: 2023104130</p>
          </div>
          <div className="team-member">
            <p>Jemima Ahmed</p>
            <p>ID: 2023104133</p>
          </div>
        </div>
        <div className="section socials">
          <h3>Our Socials</h3>
          <div className="social-item">
            <span role="img" aria-label="github">👤</span>
            <a href="https://xyz.github.com">@xyz.github.com</a>
          </div>
          <div className="social-item">
            <span role="img" aria-label="github">👤</span>
            <a href="https://xyz.github.com">@xyz.github.com</a>
          </div>
          <div className="social-item">
            <span role="img" aria-label="github">👤</span>
            <a href="https://xyz.github.com">@xyz.github.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;