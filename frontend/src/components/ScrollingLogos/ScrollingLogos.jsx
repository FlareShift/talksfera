import React, { useEffect, useRef } from 'react';
import './ScrollingLogos.css';

const logos = [
  'https://via.placeholder.com/150x100?text=Logo+1',
  'https://via.placeholder.com/150x100?text=Logo+2',
  'https://via.placeholder.com/150x100?text=Logo+3',
  'https://via.placeholder.com/150x100?text=Logo+4',
  'https://via.placeholder.com/150x100?text=Logo+5',
  'https://via.placeholder.com/150x100?text=Logo+6',
];

const ScrollingLogos = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollPosition = 0;

    const animateScroll = () => {
      scrollPosition += 1; // Скорость прокрутки
      if (container) {
        container.scrollLeft = scrollPosition;
        if (scrollPosition >= container.scrollWidth / 2) {
          scrollPosition = 0; // Зацикливаем прокрутку
        }
      }
      requestAnimationFrame(animateScroll);
    };

    animateScroll();
  }, []);

  return (
    <div className="scrolling-logos-container" ref={containerRef}>
      <div className="scrolling-logos">
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="logo"
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollingLogos;
