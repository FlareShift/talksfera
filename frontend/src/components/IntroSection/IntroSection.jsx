import React from "react";
import "./IntroSection.css";
import introSectionImage from "../../assets/images/IntroSection/IntroSection.svg";
import decorativeImage from "../../assets/images/IntroSection/decorative.svg";

const IntroSection = () => {
  return (
    <section className="intro">
      <div className="intro__text">
        <h2 className="intro__title">
          <img
            src={decorativeImage}
            alt="Decorative icon"
            className="intro__decorative"
          />
          How therapy and <br />
          psychiatry work together
        </h2>
        <p className="intro__description">
          Welcome to <span className="intro__highlight">TalkSfera</span>, a platform dedicated to transforming the way
          you approach mental health. Whether you're seeking therapy, education, or professional growth, we
          provide a comprehensive space tailored to your needs.
        </p>
      </div>
      <div className="intro__image">
        <img src={introSectionImage} alt="Therapy illustration" />
      </div>
    </section>
  );
};

export default IntroSection;
