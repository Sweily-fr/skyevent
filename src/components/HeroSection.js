import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Chemin vers la vidéo locale dans le dossier public
const videoSource = '/videos/Sushi copy.mp4';

// Image de secours
const fallbackImage = '/images/sushi-fallback.jpg';

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
  max-width: 600px;
  text-align: left;
  padding: 30px;
  z-index: 3;
  background: transparent;
  
  @media (max-width: 768px) {
    left: 20px;
    bottom: 60px;
    right: 20px;
    max-width: none;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 15px;
  font-family: 'Playfair Display', serif;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 15px;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-block;
  background-color: white;
  color: #333;
  padding: 12px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-block;
  background-color: transparent;
  color: white;
  padding: 12px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  border: 2px solid white;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
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
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Traiteur Événementiel Sur Mesure
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Découvrez une expérience culinaire exceptionnelle pour vos événements spéciaux. Notre équipe de chefs passionnés crée des mets délicats qui éveilleront tous les sens de vos invités.
        </HeroSubtitle>
        <ButtonContainer
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <PrimaryButton to="/realisations">Découvrir nos réalisations</PrimaryButton>
          <SecondaryButton to="/notre-histoire">Notre histoire</SecondaryButton>
        </ButtonContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
