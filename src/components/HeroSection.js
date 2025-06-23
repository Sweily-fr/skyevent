import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import styled from 'styled-components';
import StandardButton from './StandardButton';

// Chemin vers la vidéo locale dans le dossier public
const videoSource = '/videos/IMG_0724.MP4';

// Image de secours
const fallbackImage = '/images/DSC05331.jpg';

// Remarque : Pour une utilisation en production, il est recommandé de télécharger la vidéo
// et de l'héberger sur votre propre serveur pour des raisons de performance et de fiabilité.

const HeroContainer = styled.section`
  height: 100vh;
  min-height: 600px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;
  margin-top: -70px; /* Pour compenser la hauteur du header */
  padding-top: 70px;
  background: #000;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  background: #000;
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
`;

const HeroContent = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%); /* Compatibilité iOS */
  max-width: 800px;
  text-align: center;
  padding: 30px;
  z-index: 3;
  background: transparent;
  width: 90%;
  -webkit-backface-visibility: hidden; /* Prévenir le scintillement sur iOS */
  -webkit-transform-style: preserve-3d; /* Améliorer le rendu sur iOS */
  
  @media (max-width: 992px) {
    max-width: 90%;
    width: 90%;
  }
  
  @media (max-width: 768px) {
    bottom: 60px;
    padding: 20px;
    max-width: 100%;
    width: 90%;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: 'Inter', sans-serif;
  color: #fff;
  letter-spacing: 3px;
  text-transform: uppercase;
  line-height: 1.2;
  max-width: 800px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 992px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    letter-spacing: 3px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin: 0 auto 30px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8;
  max-width: 600px;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 15px;
  margin: 30px auto 0;
  justify-content: center;
  width: 100%;
  flex-wrap: nowrap;
  
  & > a {
    white-space: nowrap;
    font-size: 0.9rem;
    padding: 10px 15px;
  }
  
  /* Pour les tablettes */
  @media (max-width: 992px) {
    gap: 12px;
    
    & > a {
      padding: 8px 12px;
      font-size: 0.85rem;
    }
  }
  
  /* Pour les mobiles */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
    
    & > a {
      width: 100%;
      max-width: 280px;
      text-align: center;
      padding: 10px 15px;
      font-size: 0.9rem;
    }
  }
`;

// PrimaryButton remplacé par le composant StandardButton

// SecondaryButton remplacé par le composant StandardButton

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    }
  }
};

const HeroSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  return (
    <HeroContainer ref={ref}>
      <VideoContainer>
        <VideoBackground 
          autoPlay 
          loop 
          muted 
          playsInline
          onError={(e) => console.error('Erreur vidéo:', e)}
        >
          <source src={process.env.PUBLIC_URL + videoSource} type="video/mp4" />
          <img 
            src={process.env.PUBLIC_URL + fallbackImage} 
            alt="Présentation de sushis"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }} 
          />
        </VideoBackground>
      </VideoContainer>
      <Overlay />
      <HeroContent>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2
              }
            }
          }}
        >
          <HeroSubtitle variants={fadeInUp}>
            L'événementiel, un savoir-faire
          </HeroSubtitle>
          <HeroTitle variants={fadeInUp}>
            Notre histoire traiteur
          </HeroTitle>
        </motion.div>
        <motion.div 
          variants={fadeInUp}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              delay: 0.8,
              duration: 0.6,
              ease: 'easeOut' 
            }
          }}
        >
          <ButtonContainer>
            <StandardButton to="/realisations" darkBackground={true}>Découvrir nos réalisations</StandardButton>
            <StandardButton to="/notre-histoire" darkBackground={true}>Notre histoire</StandardButton>
          </ButtonContainer>
        </motion.div>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
