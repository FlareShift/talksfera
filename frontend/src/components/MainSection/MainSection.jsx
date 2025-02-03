import React from "react";
import "./MainSection.css";

import individualImage from "../../assets/images/MainSection/individual.svg";
import teensImage from "../../assets/images/MainSection/teens.svg";
import couplesImage from "../../assets/images/MainSection/couples.svg";
import coursesImage from "../../assets/images/MainSection/courses.svg";

const MainSection = () => {
  const cards = [
    {
      image: individualImage,
      title: "Individual",
      description: "For myself",
      backgroundColor: "card--green",
    },
    {
      image: teensImage,
      title: "Teens",
      description: "For my child",
      backgroundColor: "card--blue",
    },
    {
      image: couplesImage,
      title: "Couples",
      description: "For me and partner",
      backgroundColor: "card--pink",
    },
    {
      image: coursesImage,
      title: "Courses",
      description: "For studying",
      backgroundColor: "card--yellow",
    },
  ];

  return (
    <section className="main-section">
      <div className="main-section__text">
        <h1 className="main-section__title">Find the support you deserve</h1>
        <p className="main-section__subtitle">
          Discover your ideal therapist or psychologist with ease.
        </p>
      </div>

      <div className="main-section__cards">
        {cards.map((card, index) => (
          <div className={`card ${card.backgroundColor}`} key={index}>
            <img src={card.image} alt={card.title} className="card__image" />
            <h3 className="card__title">{card.title}</h3>
            <p className="card__description">
              {card.description} <span className="card__arrow">→</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainSection;
