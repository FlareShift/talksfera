import React from "react";
import "./MainSection.css";

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="main-text">
        <h1>Find the support you deserve</h1>
        <p>Discover your ideal therapist or psychologist with ease.</p>
      </div>
      <div className="card-container">
        <div className="card" style={{ backgroundColor: "#d4e7c7" }}>
          <img src="/individual.png" alt="Individual Therapy" />
          <h3>Individual</h3>
          <p>For myself</p>
        </div>
        <div className="card" style={{ backgroundColor: "#c8e7ee" }}>
          <img src="/teens.png" alt="Teen Therapy" />
          <h3>Teens</h3>
          <p>For my child</p>
        </div>
        <div className="card" style={{ backgroundColor: "#f8d2d7" }}>
          <img src="/couples.png" alt="Couples Therapy" />
          <h3>Couples</h3>
          <p>For me and partner</p>
        </div>
        <div className="card" style={{ backgroundColor: "#fae3b4" }}>
          <img src="/courses.png" alt="Courses" />
          <h3>Courses</h3>
          <p>For studying</p>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
