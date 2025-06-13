import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Utilisation de la même vidéo que sur la page d'accueil
const videoSource = '/videos/Sushi copy.mp4';
// Image de secours si la vidéo ne se charge pas
const fallbackImage = '/images/sushi-fallback.jpg';

const StoryContainer = styled.section`
  position: relative;
  width: 100%;
`;

const VideoContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

const StickyContainer = styled.div`
  position: relative;
  height: 300vh;
  width: 100%;
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300vh;
  z-index: 3;
`;

const TextSection = styled(motion.div)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  text-align: center;
  max-width: 800px;
  padding: 0 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const StoryTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 30px;
  font-family: 'Playfair Display', serif;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const StoryText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const OurStorySection = () => {
  const containerRef = useRef(null);
  
  // Textes à afficher lors du défilement
  const storyTexts = [
    {
      title: "Notre Histoire",
      text: "SkyEvent est né d'une passion pour la gastronomie japonaise et d'un désir de créer des expériences culinaires inoubliables. Fondé en 2015 par notre chef exécutif, notre entreprise s'est rapidement imposée comme une référence dans le domaine du traiteur événementiel haut de gamme."
    },
    {
      title: "Notre Philosophie",
      text: "Chez SkyEvent, nous croyons que chaque événement mérite une attention particulière. Notre philosophie repose sur trois piliers essentiels : des ingrédients de qualité supérieure, un savoir-faire artisanal et un service personnalisé. Nous travaillons en étroite collaboration avec des producteurs locaux pour garantir la fraîcheur et l'authenticité de nos créations."
    },
    {
      title: "Notre Engagement",
      text: "La durabilité est au cœur de notre démarche. Un engagement qui nécessite l'implication de tous sur le long terme. Un engagement qui nécessite l'humilité de remettre en question tout ce que nous faisons et comment nous le faisons, de nous améliorer constamment et d'aller plus loin. Un engagement qui nous accompagne sur le chemin que nous traçons depuis notre création."
    }
  ];

  // Référence pour le conteneur principal
  // Nous n'utilisons plus scrollYProgress mais gardons la référence pour une utilisation future si nécessaire

  return (
    <StoryContainer>
      <StickyContainer ref={containerRef}>
        <VideoContainer>
          <VideoBackground autoPlay loop muted playsInline>
            <source src={process.env.PUBLIC_URL + videoSource} type="video/mp4" />
            <img 
              src={process.env.PUBLIC_URL + fallbackImage} 
              alt="Notre histoire"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }} 
            />
          </VideoBackground>
          <Overlay />
        </VideoContainer>
        
        <ContentWrapper>
          <TextSection
            style={{ top: 'calc(50vh - 150px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <StoryTitle>{storyTexts[0].title}</StoryTitle>
            <StoryText>{storyTexts[0].text}</StoryText>
          </TextSection>
          
          <TextSection
            style={{ top: 'calc(150vh - 150px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <StoryTitle>{storyTexts[1].title}</StoryTitle>
            <StoryText>{storyTexts[1].text}</StoryText>
          </TextSection>
          
          <TextSection
            style={{ top: 'calc(250vh - 150px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <StoryTitle>{storyTexts[2].title}</StoryTitle>
            <StoryText>{storyTexts[2].text}</StoryText>
          </TextSection>
        </ContentWrapper>
      </StickyContainer>
    </StoryContainer>
  );
};

export default OurStorySection;
