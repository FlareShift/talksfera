import React from 'react';
import './PsychotherapySection.css';

import FirstImg from "../../assets/images/PsychotherapySection/First.png";
import SecondImg from "../../assets/images/PsychotherapySection/Second.png";
import ThirdImg from "../../assets/images/PsychotherapySection/Third.png";
import FourthImg from "../../assets/images/PsychotherapySection/Fourth.png";

const cards = [
  {
    defaultImg: FirstImg,
    hoverImg: "https://via.placeholder.com/250x170/ffb3b3/333333?text=Hover+Image+1", // Временно заменено на цвет
    title: "Navigate life's challenges with resilience and clarity.",
  },
  {
    defaultImg: SecondImg,
    hoverImg: "https://via.placeholder.com/250x170/99c2ff/333333?text=Hover+Image+2", // Временно заменено на цвет
    title: 'Regain control over stress and anxiety to find your inner calm.',
  },
  {
    defaultImg: ThirdImg,
    hoverImg: "https://via.placeholder.com/250x170/ffcccc/333333?text=Hover+Image+3", // Временно заменено на цвет
    title: 'Build meaningful relationships and strengthen emotional connections.',
  },
  {
    defaultImg: FourthImg,
    hoverImg: "https://via.placeholder.com/250x170/ffffb3/333333?text=Hover+Image+4", // Временно заменено на цвет
    title: 'Transform obstacles into opportunities for personal growth.',
  },
];

const PsychotherapySection = () => {
  return (
    <div className="psychotherapy-section">
      <h2 className="section-title">
        Psychotherapy helps to make life more coherent and harmonious
      </h2>
      <div className="card-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="image-container">
              <img
                src={card.defaultImg}
                alt={`Illustration ${index + 1}`}
                className="card-image default"
              />
              <img
                src={card.hoverImg}
                alt={`Illustration ${index + 1} hover`}
                className="card-image hover"
              />
            </div>
            <p className="card-title">{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PsychotherapySection;
