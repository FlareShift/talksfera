import React from "react";
import "./MainSection.css";

import individualImage from "../../assets/images/MainSection/individual.png";
import teensImage from "../../assets/images/MainSection/teens.png";
import couplesImage from "../../assets/images/MainSection/couples.png";
import coursesImage from "../../assets/images/MainSection/courses.png";

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="main-text">
        <h1>Find the support you deserve</h1>
        <p>Discover your ideal therapist or psychologist with ease.</p>
      </div>
      <div className="card-container">
        <div className="card" style={{ backgroundColor: "#d4e7c7" }}>
          <img src={individualImage} alt="Individual Therapy" />
          <h3>Individual</h3>
          <p>
            For myself <span className="arrow">→</span>
          </p>
        </div>
        <div className="card" style={{ backgroundColor: "#c8e7ee" }}>
          <img src={teensImage} alt="Teen Therapy" />
          <h3>Teens</h3>
          <p>
            For my child <span className="arrow">→</span>
          </p>
        </div>
        <div className="card" style={{ backgroundColor: "#f8d2d7" }}>
          <img src={couplesImage} alt="Couples Therapy" />
          <h3>Couples</h3>
          <p>
            For me and partner <span className="arrow">→</span>
          </p>
        </div>
        <div className="card" style={{ backgroundColor: "#fae3b4" }}>
          <img src={coursesImage} alt="Courses" />
          <h3>Courses</h3>
          <p>
            For studying <span className="arrow">→</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
