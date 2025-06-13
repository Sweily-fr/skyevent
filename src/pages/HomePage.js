import React, { useEffect } from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import EventTypesGrid from '../components/EventTypesGrid';
import TraiteurBanner from '../components/TraiteurBanner';
import RealisationsGrid from '../components/RealisationsGrid';
import ImageCarousel from '../components/ImageCarousel';
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
      <EventTypesGrid />
      <TraiteurBanner />
      <RealisationsGrid />
      <ImageCarousel />
      <ContactSection />
    </HomeContainer>
  );
};

export default HomePage;
