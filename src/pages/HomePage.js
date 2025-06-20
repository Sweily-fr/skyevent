import React, { useLayoutEffect, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import EventTypesGrid from '../components/EventTypesGrid';
import TraiteurBanner from '../components/TraiteurBanner';
import RealisationsGrid from '../components/RealisationsGrid';
import ImageCarousel from '../components/ImageCarousel';
import ContactSection from '../components/ContactSection';

const HomeContainer = styled.div`
  min-height: 100vh;
  font-family: 'Playfair Display', serif;
  color: #1a1a1a;
  background-color: #ffffff;
`;

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const HomePage = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    // Démarrer les animations dès que le composant est monté
    controls.start('visible');
  }, [controls]);
  
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
    document.title = 'SkyEvent - Traiteur Événementiel Sur Mesure';
  }, []);

  // Pas besoin de créer des versions animées des composants

  return (
    <HomeContainer>
      <motion.main
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        ref={ref}
      >
        <motion.section variants={fadeIn}>
          <HeroSection />
        </motion.section>
        
        <motion.section variants={fadeIn}>
          <EventTypesGrid />
        </motion.section>
        
        <motion.section variants={fadeIn}>
          <TraiteurBanner />
        </motion.section>
        
        <motion.section variants={fadeIn}>
          <RealisationsGrid />
        </motion.section>
        
        <motion.section variants={fadeIn}>
          <ImageCarousel />
        </motion.section>
        
        <motion.section variants={fadeIn}>
          <ContactSection />
        </motion.section>
      </motion.main>
    </HomeContainer>
  );
};

export default HomePage;
