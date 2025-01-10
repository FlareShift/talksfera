import React, { useState } from "react";
import "./FAQAccordion.css";
import illustration from "../../assets/images/FAQ/FAQ.svg";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "Who are the therapists?", answer: "These are qualified professionals with expertise in various psychological fields." },
    { question: "Who will be helping me?", answer: "A qualified therapist or an AI assistant will guide you based on your needs." },
    { question: "How much does it cost?", answer: "The pricing varies depending on the service. You can check the details on our pricing page." },
    { question: "Who can benefit from TalkSfera?", answer: "Anyone seeking mental health support, whether for therapy or learning." },
    { question: "How does the AI Therapist work?", answer: "The AI therapist uses advanced algorithms to provide real-time, personalized therapy." },
    { question: "Are the courses suitable for beginners?", answer: "Yes, the courses are designed for beginners and professionals alike." },
    { question: "How do I ensure my privacy is protected?", answer: "We use secure, encrypted channels to protect your privacy at all times." },
    { question: "Can I practice as a psychology student here?", answer: "Yes, TalkSfera offers practical opportunities for psychology students." },
    { question: "Is TalkSfera available in multiple languages?", answer: "Yes, TalkSfera is available in multiple languages to serve a global audience." },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-content">
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => handleToggle(index)}
              >
                <span>{faq.question}</span>
                <span>{activeIndex === index ? "▲" : "▼"}</span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="faq-illustration">
          <img src={illustration} alt="Illustration" />
        </div>
      </div>
      <div className="faq-footer">
        <a href="#more-faqs">More frequently asked questions</a>
      </div>
    </section>
  );
};

export default FAQAccordion;
