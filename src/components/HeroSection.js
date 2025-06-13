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
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
`;

const HeroContent = styled.div`
  max-width: 800px;
  text-align: center;
  padding: 0 20px;
  position: relative;
  z-index: 3;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 20px;
  justify-content: center;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
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
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handleCanPlay = () => {
        console.log('La vidéo peut être lue');
        video.play().catch(error => {
          console.error('Erreur lors de la lecture automatique:', error);
        });
      };
      
      const handleError = (e) => {
        console.error('Erreur de chargement de la vidéo:', e);
        console.log('Source vidéo:', videoSource);
      };
      
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);
      
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  return (
    <HeroContainer>
      <VideoContainer>
        <VideoBackground 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          onError={(e) => console.error('Erreur vidéo:', e)}
          src={process.env.PUBLIC_URL + videoSource}
          type="video/mp4"
        >
          Votre navigateur ne supporte pas la lecture de vidéos.
        </VideoBackground>
        <img 
          src={process.env.PUBLIC_URL + fallbackImage} 
          alt="Présentation de sushis"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
            display: 'none' // Ne s'affichera que si la vidéo échoue
          }} 
        />
      </VideoContainer>
      <Overlay />
      <HeroContent>
        <HeroTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Traiteur Événementiel Sur Mesure
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Nos services de traiteur événementiel : Bien plus qu'un simple repas
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
