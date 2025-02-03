import React from 'react';
import Header from '../components/Header/Header';
import FloatingMenu from '../components/FloatingMenu/FloatingMenu';
import MainSection from '../components/MainSection/MainSection';
import ScrollingLogos from '../components/ScrollingLogos/ScrollingLogos';
import IntroSection from '../components/IntroSection/IntroSection';
import PsychotherapySection from '../components/PsychotherapySection/PsychotherapySection';
import HowItWorksSection from '../components/HowItWorksSection/HowItWorksSection';
import TestimonialsCarousel from '../components/TestimonialsCarousel/TestimonialsCarousel';
import ComparisonTable from '../components/ComparisonTable/ComparisonTable';
import FAQAccordion from '../components/FAQAccordion/FAQAccordion';
import ExpressServices from '../components/ExpressServices/ExpressServices';
import Footer from '../components/Footer/Footer';

const MainPage = () => {
  return (
    <>
      <Header />
      <FloatingMenu />
      <MainSection />
      <ScrollingLogos />
      <IntroSection />
      <PsychotherapySection />
      <HowItWorksSection />
      <TestimonialsCarousel />
      <ComparisonTable />
      <FAQAccordion />
      <ExpressServices />
      <Footer />
    </>
  );
};

export default MainPage;
