import React, { useState } from "react";
import "./FAQAccordion.css";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    "Who are the therapists?",
    "Who will be helping me?",
    "How much does it cost?",
    "Who can benefit from TalkSfera?",
    "How does the AI Therapist work?",
    "Are the courses suitable for beginners?",
    "How do I ensure my privacy is protected?",
    "Can I practice as a psychology student here?",
    "Is TalkSfera available in multiple languages?",
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((question, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => handleToggle(index)}
            >
              <span>{question}</span>
              <span>{activeIndex === index ? "▲" : "▼"}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>
                  This is a placeholder answer for the question: "{question}".
                  Replace this text with a detailed response.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="faq-footer">
        <a href="#more-faqs">More frequently asked questions</a>
      </div>
    </div>
  );
};

export default FAQAccordion;
