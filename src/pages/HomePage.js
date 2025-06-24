import React, { useLayoutEffect, useRef, useEffect, lazy, Suspense, useState } from 'react';
import SEO from '../components/SEO';
import SEOSchema from '../components/SEOSchema';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import EventTypesGrid from '../components/EventTypesGrid';
import TraiteurBanner from '../components/TraiteurBanner';
import ContactSection from '../components/ContactSection';
import MobileContactSection from '../components/MobileContactSection';
import ImageCarousel from '../components/ImageCarousel';
import RealisationsGrid from '../components/RealisationsGrid';

const HomeContainer = styled.div`
  min-height: 100vh;
  font-family: 'Playfair Display', serif;
  color: #1a1a1a;
  background-color: #ffffff;
  
  @media (max-width: 768px) {
    overflow-x: hidden;
  }
`;

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' } // Réduire la durée de l'animation
  }
};

// Variante spécifique pour mobile avec moins d'espace
const fadeInMobile = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
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
      <SEO 
        title="Accueil"
        description="Découvrez SkyEvent, votre traiteur événementiel sur mesure à Paris. Mariages, anniversaires, événements d'entreprise - créez des moments uniques avec notre cuisine raffinée et notre service d'exception."
        path="/"
      />
      <SEOSchema 
        pageType="WebPage" 
        pageName="SkyEvent - Traiteur Événementiel Sur Mesure" 
        pageDescription="Créez des moments inoubliables avec nos services traiteur sur-mesure pour mariages, événements privés et professionnels." 
        pageUrl="https://skyevent.fr" 
        pageImage="/images/DSC05325.jpg" 
      />
      <motion.main
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        ref={ref}
        style={{
          overflow: 'hidden',
          width: '100%'
        }}
      >
        {/* Sections critiques chargées immédiatement */}
        <motion.section variants={fadeIn}>
          <HeroSection />
        </motion.section>
        
        <motion.section variants={isMobile ? fadeInMobile : fadeIn} style={{ marginTop: isMobile ? '-20px' : '0' }}>
          <EventTypesGrid />
        </motion.section>
        
        <motion.section variants={isMobile ? fadeInMobile : fadeIn} style={{ marginTop: isMobile ? '-20px' : '0' }}>
          <TraiteurBanner />
        </motion.section>
        
        <motion.section variants={fadeIn}>
          <RealisationsGrid />
        </motion.section>
        
        <motion.section variants={fadeIn}>
          <ImageCarousel />
        </motion.section>
        
        {/* Afficher le formulaire de contact approprié selon le type d'appareil */}
        <motion.section 
          variants={isMobile ? fadeInMobile : fadeIn} 
          id="contact-section"
          style={{
            display: 'block',
            width: '100%',
            minHeight: isMobile ? '100px' : '200px',
            margin: isMobile ? '-20px auto 0' : '0 auto'
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
