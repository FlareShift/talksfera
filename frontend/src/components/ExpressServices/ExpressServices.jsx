import React from "react";
import "./ExpressServices.css";

const ExpressServices = () => {
  const services = [
    {
      id: 1,
      phoneNumbers: ["(067) 594 94 46", "(095) 913 69 41"],
      description: "Severe disorders in children and adults",
    },
    {
      id: 2,
      phoneNumbers: ["0 800 500 335", "116 123"],
      description: "Domestic violence and gender discrimination",
    },
    {
      id: 3,
      phoneNumbers: ["0 800 500 225", "116 111"],
      description: "National support line for children",
    },
    {
      id: 4,
      phoneNumbers: ["7333"],
      description: "National suicide prevention line 24/7",
    },
  ];

  return (
    <section className="express-services">
      <h2 className="express-services__title">Express Services</h2>
      <div className="express-services__container">
        {services.map((service) => (
          <div
            key={service.id}
            className="express-services__item"
            id={`service-${service.id}`}
          >
            <div className="express-services__phones">
              {service.phoneNumbers.map((phone, idx) => (
                <p key={idx} className="express-services__phone">{phone}</p>
              ))}
            </div>
            <p className="express-services__description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpressServices;
