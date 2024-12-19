import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import ScrollingLogos from "./components/ScrollingLogos/ScrollingLogos";
import IntroSection from "./components/IntroSection/IntroSection";
import PsychotherapySection from "./components/PsychotherapySection/PsychotherapySection";
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection";
import TestimonialsCarousel from "./components/TestimonialsCarousel/TestimonialsCarousel";
import ComparisonTable from "./components/ComparisonTable/ComparisonTable";
import FAQAccordion from "./components/FAQAccordion/FAQAccordion";
import ExpressServices from "./components/ExpressServices/ExpressServices";
import Footer from "./components/Footer/Footer";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
    const [message, setMessage] = useState('');

    // useEffect для вызова API
      useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/sample/')
          .then(response => {
            setMessage(response.data.message); // Сохраняем полученное сообщение в стейте
          })
          .catch(error => {
            console.error("There was an error!", error);
          });
      }, []);

  return (
    <div>
      <Header />
      <MainSection message={message} /> {/* Передаем данные из API в компонент */}
      <ScrollingLogos />
      <IntroSection />
      <PsychotherapySection />
      <HowItWorksSection />
      <TestimonialsCarousel />
      <ComparisonTable />
      <FAQAccordion />
      <ExpressServices />
      <Footer />
    </div>
  );
}

export default App;
