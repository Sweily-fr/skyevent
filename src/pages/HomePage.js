import React, { useLayoutEffect, useRef, useEffect, lazy, Suspense, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import EventTypesGrid from '../components/EventTypesGrid';
import TraiteurBanner from '../components/TraiteurBanner';
import ContactSection from '../components/ContactSection';
import MobileContactSection from '../components/MobileContactSection';

// Chargement paresseux uniquement pour les composants moins critiques
const RealisationsGrid = lazy(() => import('../components/RealisationsGrid'));
const ImageCarousel = lazy(() => import('../components/ImageCarousel'));

const HomeContainer = styled.div`
  min-height: 100vh;
  font-family: 'Playfair Display', serif;
  color: #1a1a1a;
  background-color: #ffffff;
`;

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' } // Réduire la durée de l'animation
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Réduire le délai entre les animations
      delayChildren: 0.1 // Réduire le délai initial
    }
  }
};

const HomePage = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Détecter si l'appareil est mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Vérifier au chargement initial
    checkIfMobile();
    
    // Vérifier à chaque redimensionnement
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  useEffect(() => {
    // Démarrer les animations avec un léger délai pour permettre le rendu initial
    const timer = setTimeout(() => {
      controls.start('visible');
    }, 100);
    return () => clearTimeout(timer);
  }, [controls]);
  
  useLayoutEffect(() => {
    // Utiliser scrollTo sans comportement fluide pour de meilleures performances
    window.scrollTo(0, 0);
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
        {/* Sections critiques chargées immédiatement */}
        <motion.section variants={fadeIn}>
          <HeroSection />
        </motion.section>
        
        <motion.section variants={fadeIn}>
          <EventTypesGrid />
        </motion.section>
        
        <motion.section variants={fadeIn}>
          <TraiteurBanner />
        </motion.section>
        
        {/* Sections moins critiques chargées paresseusement */}
        <Suspense fallback={<div style={{ height: '400px' }}></div>}>
          <motion.section variants={fadeIn}>
            <RealisationsGrid />
          </motion.section>
        </Suspense>
        
        <Suspense fallback={<div style={{ height: '400px' }}></div>}>
          <motion.section variants={fadeIn}>
            <ImageCarousel />
          </motion.section>
        </Suspense>
        
        {/* Afficher le formulaire de contact approprié selon le type d'appareil */}
        <motion.section 
          variants={fadeIn} 
          id="contact-section"
          style={{
            display: 'block',
            width: '100%',
            minHeight: '200px',
            margin: '0 auto'
          }}
        >
          {isMobile ? (
            <MobileContactSection />
          ) : (
            <ContactSection />
          )}
        </motion.section>
      </motion.main>
    </HomeContainer>
  );
};

export default HomePage;
