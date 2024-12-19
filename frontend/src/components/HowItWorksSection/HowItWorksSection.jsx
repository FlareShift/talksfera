import React from 'react';
import './HowItWorksSection.css';

const steps = [
  {
    title: 'Find Your Best Match',
    description:
      'Answer a few questions to help us understand your needs. Get matched with a licensed therapist who fits your preferences or browse our extensive directory to choose on your own.',
    img: 'https://via.placeholder.com/100x100?text=Step+1',
  },
  {
    title: 'Flexible Communication',
    description:
      'Connect with your therapist the way you’re most comfortable—via video calls, phone, text, or our secure chat platform.',
    img: 'https://via.placeholder.com/100x100?text=Step+2',
  },
  {
    title: 'Start Your Journey Anytime',
    description:
      'Message your therapist whenever you need. Schedule live sessions at your convenience and access care from any device, wherever you are.',
    img: 'https://via.placeholder.com/100x100?text=Step+3',
  },
  {
    title: 'Learn and Grow',
    description:
      'Explore our courses, practice real-world psychological cases, or access resources tailored for veterans, students, and beyond.',
    img: 'https://via.placeholder.com/100x100?text=Step+4',
  },
  {
    title: 'Track Your Progress',
    description:
      'Stay on top of your mental health journey with session summaries, tailored insights, and actionable next steps for continued growth.',
    img: 'https://via.placeholder.com/100x100?text=Step+5',
  },
];

const HowItWorksSection = () => {
  return (
    <div className="how-it-works-section">
      <h2 className="section-title">How It Works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="step-image">
              <img src={step.img} alt={`Step ${index + 1}`} />
            </div>
            <div className="step-content">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksSection;
