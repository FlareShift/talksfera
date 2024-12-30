import React from 'react';
import './IntroSection.css';

import introSectionImage from "../../assets/images/IntroSection/IntroSection.png"; // Импорт изображения

const IntroSection = () => {
  return (
    <div className="intro-section">
      <div className="intro-text">
        <h2 className="intro-title">
          How therapy and <br />
          psychiatry work together
        </h2>
        <p className="intro-description">
          Welcome to <span className="highlight">TalkSfera</span>, a platform dedicated to transforming the way
          you approach mental health. Whether you're seeking therapy, education, or professional growth, we
          provide a comprehensive space tailored to your needs.
        </p>
      </div>
      <div className="intro-image">
        <img
          src={introSectionImage} // Используем правильный импорт
          alt="Therapy illustration"
        />
      </div>
    </div>
  );
};

export default IntroSection;
