import React from "react";
import "./ExpressServices.css";

const ExpressServices = () => {
  const services = [
    {
      phoneNumbers: ["(067) 594 94 46", "(095) 913 69 41"],
      description: "Severe disorders in children and adults",
    },
    {
      phoneNumbers: ["0 800 500 335", "116 123"],
      description: "Domestic violence and gender discrimination",
    },
    {
      phoneNumbers: ["0 800 500 225", "116 111"],
      description: "National support line for children",
    },
    {
      phoneNumbers: ["7333"],
      description: "National suicide prevention line 24/7",
    },
  ];

  return (
    <div className="express-services">
      <h2>Express services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="phone-numbers">
              {service.phoneNumbers.map((phone, idx) => (
                <p key={idx}>{phone}</p>
              ))}
            </div>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpressServices;
