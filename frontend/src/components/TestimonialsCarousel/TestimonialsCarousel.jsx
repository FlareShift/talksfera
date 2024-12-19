import React from "react";
import Slider from "react-slick";
import "./TestimonialsCarousel.css";

const testimonials = [
  {
    name: "Alex T.",
    role: "Photographer",
    stars: 5,
    text: `"I'm a reactive person, so when I need something, I need it urgently. I contacted a psychologist through the platform, and everything is super ok!"`,
  },
  {
    name: "Olga",
    role: "Videomaker",
    stars: 5,
    text: `"I have been looking for support for a long time after a traumatic experience. This platform helped me regain balance much faster!"`,
  },
  {
    name: "Kate",
    role: "Web-developer",
    stars: 5,
    text: `"For me, as a psychology student, this platform gave me confidence in my knowledge and skills. Thank you for this opportunity!"`,
  },
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <div className="testimonials-carousel">
      <h2 className="carousel-title">We have already helped more than 1,000 clients</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="card-header">
              <div className="card-avatar"></div>
              <div className="card-info">
                <h3 className="card-name">{testimonial.name}</h3>
                <p className="card-role">{testimonial.role}</p>
              </div>
              <div className="card-stars">
                {"★".repeat(testimonial.stars)}
                {"☆".repeat(5 - testimonial.stars)}
              </div>
            </div>
            <p className="card-text">{testimonial.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsCarousel;
