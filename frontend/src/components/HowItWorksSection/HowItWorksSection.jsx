import React from "react";
import "./HowItWorksSection.css";
import DecorativeLine from "../../assets/images/HowItWorksSection/decorative.svg";

import FirstImg from "../../assets/images/HowItWorksSection/First.svg";
import SecondImg from "../../assets/images/HowItWorksSection/Second.svg";
import ThirdImg from "../../assets/images/HowItWorksSection/Third.svg";
import FourthImg from "../../assets/images/HowItWorksSection/Fourth.svg";
import FifthImg from "../../assets/images/HowItWorksSection/Fifth.svg";

const steps = [
  {
    title: "Find Your Best Match",
    description:
      "Answer a few questions to help us understand your needs. Get matched with a licensed therapist who fits your preferences or browse our extensive directory to choose on your own.",
    img: FirstImg,
  },
  {
    title: "Flexible Communication",
    description:
      "Connect with your therapist the way you’re most comfortable—via video calls, phone, text, or our secure chat platform.",
    img: SecondImg,
  },
  {
    title: "Start Your Journey Anytime",
    description:
      "Message your therapist whenever you need. Schedule live sessions at your convenience and access care from any device, wherever you are.",
    img: ThirdImg,
  },
  {
    title: "Learn and Grow",
    description:
      "Explore our courses, practice real-world psychological cases, or access resources tailored for veterans, students, and beyond.",
    img: FourthImg,
  },
  {
    title: "Track Your Progress",
    description:
      "Stay on top of your mental health journey with session summaries, tailored insights, and actionable next steps for continued growth.",
    img: FifthImg,
  },
];

const HowItWorksSection = () => {
  return (
    <section className="how-it-works">
      {/* Decorative line */}
      <img
        src={DecorativeLine}
        alt="Decorative Line"
        className="how-it-works__decorative-line"
      />

      <h2 className="how-it-works__title">How It Works</h2>
      <div className="how-it-works__steps">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`how-it-works__step ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="how-it-works__content">
              <div className="how-it-works__text">
                <h3 className="how-it-works__step-title">{step.title}</h3>
                <p className="how-it-works__step-description">
                  {step.description}
                </p>
              </div>
              <div className="how-it-works__image">
                <img src={step.img} alt={`Step ${index + 1}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
