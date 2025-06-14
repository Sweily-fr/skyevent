import React, { useLayoutEffect, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import EventTypesGrid from '../components/EventTypesGrid';
import TraiteurBanner from '../components/TraiteurBanner';
import RealisationsGrid from '../components/RealisationsGrid';
import ImageCarousel from '../components/ImageCarousel';
import ContactSection from '../components/ContactSection';
import EventBanner from '../components/EventBanner';

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
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
    document.title = 'SkyEvent - Traiteur Événementiel Sur Mesure';
  }, []);

  return (
    <HomeContainer>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        ref={ref}
      >
        <motion.div variants={fadeIn}>
          <HeroSection />
        </motion.div>
        
        <motion.div variants={fadeIn}>
          <EventTypesGrid />
        </motion.div>
        
        <motion.div variants={fadeIn}>
          <TraiteurBanner />
        </motion.div>
        
        <motion.div variants={fadeIn}>
          <RealisationsGrid />
        </motion.div>
        
        <motion.div variants={fadeIn}>
          <ImageCarousel />
        </motion.div>
        
        <motion.div variants={fadeIn}>
          <ContactSection />
        </motion.div>
        
        <motion.div variants={fadeIn}>
          <EventBanner 
            title="Une Expérience Culinaire Inoubliable"
            subtitle="Laissez-nous transformer votre événement en un moment d'exception avec une cuisine raffinée et un service irréprochable."
            backgroundImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
        </motion.div>
      </motion.div>
    </HomeContainer>
  );
};

export default HomePage;
