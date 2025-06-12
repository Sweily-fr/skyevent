import React, { useEffect } from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'SkyEvent - Traiteur Événementiel Sur Mesure';
  }, []);

  return (
    <HomeContainer>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </HomeContainer>
  );
};

export default HomePage;
