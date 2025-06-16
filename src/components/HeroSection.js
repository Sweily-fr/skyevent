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
  left: 50px;
  max-width: 800px;
  text-align: left;
  padding: 30px;
  z-index: 3;
  background: transparent;
  width: calc(100% - 100px);
  
  @media (max-width: 992px) {
    max-width: 90%;
    left: 5%;
    right: 5%;
    width: auto;
  }
  
  @media (max-width: 768px) {
    bottom: 60px;
    padding: 20px;
    max-width: 100%;
    left: 20px;
    right: 20px;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 300;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
  color: #fff;
  letter-spacing: 4px;
  text-transform: uppercase;
  line-height: 1.1;
  max-width: 800px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 1200px) {
    font-size: 3rem;
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
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8;
  max-width: 600px;
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
  gap: 20px;
  margin: 30px 0 0;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: nowrap;
  
  /* Pour les tablettes */
  @media (max-width: 992px) {
    gap: 15px;
  }
  
  /* Pour les mobiles */
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
  
  /* Pour les très petits écrans */
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
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
          <HeroTitle 
            variants={fadeInUp}
          >
            Notre histoire traiteur
          </HeroTitle>
          <HeroSubtitle
            variants={fadeInUp}
          >
            Parce que chaque événement est unique, notre service traiteur événementiel crée des expériences sur mesure, alliant saveurs raffinées, présentation élégante et service impeccable. Mariages, anniversaires ou événements professionnels, nous sublimons vos réceptions avec créativité et savoir-faire.
          </HeroSubtitle>

        </motion.div>
        <motion.div variants={fadeInUp}>
          <ButtonContainer
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
            <StandardButton to="/realisations" darkBackground={true}>Découvrir nos réalisations</StandardButton>
            <StandardButton to="/notre-histoire" darkBackground={true}>Notre histoire</StandardButton>
          </ButtonContainer>
        </motion.div>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
