import React from "react";
import "./PsychotherapySection.css";

import FirstImg from "../../assets/images/PsychotherapySection/First.png";
import SecondImg from "../../assets/images/PsychotherapySection/Second.png";
import ThirdImg from "../../assets/images/PsychotherapySection/Third.png";
import FourthImg from "../../assets/images/PsychotherapySection/Fourth.png";

import HoverFirstImg from "../../assets/images/PsychotherapySection/hoverFirst.png";
import HoverSecondImg from "../../assets/images/PsychotherapySection/hoverSecond.png";
import HoverThirdImg from "../../assets/images/PsychotherapySection/hoverThird.png";
import HoverFourthImg from "../../assets/images/PsychotherapySection/hoverFourth.png";

const cards = [
  {
    defaultImg: FirstImg,
    hoverImg: HoverFirstImg,
    title: "Navigate life's challenges with resilience and clarity.",
  },
  {
    defaultImg: SecondImg,
    hoverImg: HoverSecondImg,
    title: "Regain control over stress and anxiety to find your inner calm.",
  },
  {
    defaultImg: ThirdImg,
    hoverImg: HoverThirdImg,
    title: "Build meaningful relationships and strengthen emotional connections.",
  },
  {
    defaultImg: FourthImg,
    hoverImg: HoverFourthImg,
    title: "Transform obstacles into opportunities for personal growth.",
  },
];

const PsychotherapySection = () => {
  return (
    <section className="psychotherapy">
      <h2 className="psychotherapy__title">
        Psychotherapy helps to make life more coherent and harmonious
      </h2>
      <div className="psychotherapy__cards">
        {cards.map((card, index) => (
          <div key={index} className="psychotherapy__card">
            <div className="psychotherapy__image-container">
              <img
                src={card.defaultImg}
                alt={`Illustration ${index + 1}`}
                className="psychotherapy__image psychotherapy__image--default"
              />
              <img
                src={card.hoverImg}
                alt={`Illustration ${index + 1} hover`}
                className="psychotherapy__image psychotherapy__image--hover"
              />
            </div>
            <p className="psychotherapy__card-title">{card.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PsychotherapySection;
