import React from "react";
import logo from "../../assets/images/ComparisonTable/logo.svg";
import "./ComparisonTable.css";

const ComparisonTable = () => {
  const data = [
    { feature: "Qualified Therapists", talksfera: "Yes", inOffice: "Yes" },
    { feature: "In-Office Visits", talksfera: "No", inOffice: "Yes" },
    { feature: "24/7 Messaging", talksfera: "Yes", inOffice: "No" },
    { feature: "Real-Time Chat Sessions", talksfera: "Yes", inOffice: "No" },
    { feature: "Phone Sessions", talksfera: "Yes", inOffice: "Yes" },
    { feature: "Video Sessions", talksfera: "Yes", inOffice: "Yes" },
    { feature: "AI Therapist Support", talksfera: "Yes", inOffice: "No" },
    { feature: "Smart Therapist Matching", talksfera: "Yes", inOffice: "No" },
    { feature: "Easy Scheduling", talksfera: "Yes", inOffice: "No" },
    { feature: "Courses and Training", talksfera: "Yes", inOffice: "No" },
    { feature: "Hands-On Training for Students", talksfera: "Yes", inOffice: "No" },
    { feature: "Support for Veterans", talksfera: "Yes", inOffice: "No" },
    { feature: "Flexible Therapist Switching", talksfera: "Yes", inOffice: "No" },
    { feature: "Digital Resources", talksfera: "Yes", inOffice: "No" },
    { feature: "Accessibility from Anywhere", talksfera: "Yes", inOffice: "No" },
  ];

  return (
    <section className="comparison-container"> {/* Обертка для применения фона */}
      <div className="comparison__intro">
        <h2 className="comparison__title">
          <span className="comparison__highlight">TalkSfera</span> vs. traditional in-office therapy
        </h2>
      </div>

      <section className="comparison">
        <div className="comparison__header">
          <div className="comparison__cell comparison__feature">Features</div>
          <div className="comparison__cell comparison__brand">
            <img src={logo} alt="TalkSfera Logo" className="comparison__logo" />
            TalkSfera
          </div>
          <div className="comparison__cell comparison__office">In-office</div>
        </div>
        {data.map((item, index) => (
          <div className="comparison__row" key={index}>
            <div className="comparison__cell comparison__feature">{item.feature}</div>
            <div className="comparison__cell comparison__brand">{item.talksfera}</div>
            <div className="comparison__cell comparison__office">{item.inOffice}</div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default ComparisonTable;
