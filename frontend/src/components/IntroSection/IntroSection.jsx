import React from 'react';
import './IntroSection.css';

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
        {/* Добавьте путь к вашему изображению или используйте временную заглушку */}
        <img
          src="https://via.placeholder.com/400x300?text=Illustration"
          alt="Therapy illustration"
        />
      </div>
    </div>
  );
};

export default IntroSection;
