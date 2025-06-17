import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ContactSection from '../../components/ContactSection';

// Images par défaut pour chaque type d'occasion
const DEFAULT_HERO_IMAGES = {
  'mariage': '/images/DSC05261.jpg',
  'anniversaire': '/images/DSC05270.jpg',
  'babyshower': '/images/DSC05372.jpg',
  'bapteme': '/images/DSC05318.jpg',
  'entreprise': '/images/DSC05261.jpg',
  'marque': '/images/DSC05270.jpg'
};

const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-top: -70px;
  padding-top: 70px;
  background: #000;
`;

const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src || DEFAULT_HERO_IMAGES.mariage});
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%);
`;

const HeroContent = styled.div`
  position: absolute;
  z-index: 3;
  text-align: left;
  max-width: 800px;
  padding: 0 0 80px 80px;
  bottom: 0;
  left: 0;
  margin: 0;
  @media (max-width: 768px) {
    padding: 0 20px 40px 20px;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  line-height: 1.1;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  max-width: 600px;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const OccasionTemplate = ({ 
  title,
  subtitle,
  heroImage,
  infoBlocks,
  carouselImages,
  bannerImage,
  occasionType = 'mariage'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  // Utiliser l'image héro fournie ou une image par défaut basée sur le type d'occasion
  const heroImageSrc = heroImage || DEFAULT_HERO_IMAGES[occasionType] || DEFAULT_HERO_IMAGES.mariage;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % carouselImages.length);
  }, [carouselImages]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + carouselImages.length) % carouselImages.length);
  }, [carouselImages]);

  return (
    <>
      <HeroContainer>
        <HeroImage src={heroImageSrc} alt={title} />
        <Overlay />
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </HeroSubtitle>
        </HeroContent>
      </HeroContainer>
      
      {/* Autres sections du template */}
      
      <ContactSection />
    </>
  );
};

export default OccasionTemplate;
