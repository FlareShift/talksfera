import React from 'react';
import './PsychotherapySection.css';

const cards = [
  {
    img: 'https://via.placeholder.com/150x150?text=Illustration+1',
    title: "Navigate life's challenges with resilience and clarity.",
  },
  {
    img: 'https://via.placeholder.com/150x150?text=Illustration+2',
    title: 'Regain control over stress and anxiety to find your inner calm.',
  },
  {
    img: 'https://via.placeholder.com/150x150?text=Illustration+3',
    title: 'Build meaningful relationships and strengthen emotional connections.',
  },
  {
    img: 'https://via.placeholder.com/150x150?text=Illustration+4',
    title: 'Transform obstacles into opportunities for personal growth.',
  },
];

const PsychotherapySection = () => {
  return (
    <div className="psychotherapy-section">
      <h2 className="section-title">
        Psychotherapy helps to make life more coherent and harmonious
      </h2>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.img} alt={`Illustration ${index + 1}`} className="card-image" />
            <p className="card-title">{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PsychotherapySection;
