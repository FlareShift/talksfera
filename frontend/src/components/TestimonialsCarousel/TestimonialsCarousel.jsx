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
  {
    name: "John D.",
    role: "Designer",
    stars: 4,
    text: `"Amazing platform with helpful professionals. My experience was delightful!"`,
  },
  {
    name: "Sophia L.",
    role: "Writer",
    stars: 5,
    text: `"I love the simplicity of use and the level of support I got here. Highly recommended!"`,
  },
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonials">
      <h2 className="testimonials__title">We have already helped more than 1,000 clients</h2>
      <Slider {...settings} className="testimonials__slider">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonials__card">
            <div className="testimonials__header">
              <div className="testimonials__avatar"></div>
              <div className="testimonials__info">
                <h3 className="testimonials__name">{testimonial.name}</h3>
                <p className="testimonials__role">{testimonial.role}</p>
              </div>
              <div className="testimonials__stars">
                {"★".repeat(testimonial.stars)}
                {"☆".repeat(5 - testimonial.stars)}
              </div>
            </div>
            <p className="testimonials__text">{testimonial.text}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialsCarousel;
