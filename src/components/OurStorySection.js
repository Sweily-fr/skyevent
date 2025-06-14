import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Utilisation de la même vidéo que sur la page d'accueil
const videoSource = '/videos/Sushi copy.mp4';
// Image de secours si la vidéo ne se charge pas
const fallbackImage = '/images/sushi-fallback.jpg';

const StoryContainer = styled.section`
  position: relative;
  width: 100%;
  margin-top: -120px; /* Pour compenser la hauteur du header et éliminer l'écart */
  padding-top: 0; /* Suppression du padding pour éliminer tout espace */
`;

const VideoContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  background: rgba(0, 0, 0, ${props => props.opacity * 0.4});
  z-index: 2;
  transition: background 0.3s ease;
`;

const LogoContainer = styled.div`
  position: relative;
  text-align: center;
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 30vh;
  padding-bottom: 60vh; /* Changement de margin-bottom en padding-bottom pour un meilleur centrage */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 200px; /* Taille augmentée pour une meilleure visibilité */
  height: auto;
  filter: brightness(0) invert(1); /* Pour forcer la couleur blanche si le SVG est noir */
  object-fit: contain; /* Pour s'assurer que tout le logo est visible */
`;

const HeroTitle = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: white;
  margin-top: 10px;
  font-weight: 300;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  z-index: 4;
  opacity: ${props => props.scrollY === 0 ? 1 : Math.max(0, 1 - props.scrollProgress * 5)};
  transition: opacity 0.3s ease;
`;

const ScrollText = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
  font-weight: 300;
  letter-spacing: 1px;
`;

const ScrollLine = styled.div`
  width: 1px;
  height: 30px; /* Trait plus court */
  background-color: white;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    animation: lineAnimation 1.5s ease-in-out infinite;
  }
  
  @keyframes lineAnimation {
    0% {
      height: 30%;
      top: 0;
    }
    50% {
      height: 70%;
      top: 0;
    }
    100% {
      height: 30%;
      top: 0;
    }
  }
`;

const StickyContainer = styled.div`
  position: relative;
  height: 200vh; /* Augmentation de la hauteur pour un défilement plus long */
  width: 100%;
`;

const CTAContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  background-color: ${props => props.primary ? 'white' : 'transparent'};
  color: ${props => props.primary ? '#000' : 'white'};
  border: 2px solid white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    background-color: ${props => props.primary ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.1)'};
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400vh;
  z-index: 3;
  transition: transform 0.1s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextSection = styled(motion.div)`
  position: relative;
  color: white;
  text-align: center;
  width: 80%;
  max-width: 800px;
  padding: 40px 0;
  margin-bottom: 30vh;
  
  @media (max-width: 768px) {
    width: 90%;
    padding: 40px 20px;
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
  const [scrollY, setScrollY] = useState(0);
  
  // Effet pour détecter le défilement
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Nettoyage de l'écouteur d'événement lors du démontage
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Texte à afficher lors du défilement
  const storyTexts = [
    {
      title: 'Notre Histoire',
      text: 'Fondée en 2010, SkyEvent a rapidement établi sa réputation grâce à son approche unique de la restauration événementielle. Notre histoire est marquée par des moments de partage, de créativité et d\'innovation, qui nous ont permis de grandir et de nous développer tout en restant fidèles à nos valeurs fondamentales.'
    }
  ];
  
  // Calcul de l'opacité de l'overlay en fonction du défilement
  const overlayOpacity = Math.min(1, scrollY / 300); // Augmente progressivement jusqu'à 1 après 300px de défilement

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
          <Overlay opacity={overlayOpacity} />
          <ScrollIndicator scrollProgress={scrollY / 500} scrollY={scrollY}>
            <ScrollText>Découvrir</ScrollText>
            <ScrollLine />
          </ScrollIndicator>
        </VideoContainer>
        
        <ContentWrapper style={{ transform: `translateY(-${scrollY * 0.5}px)` }}>
          <LogoContainer>
            <Logo src="/images/Sky Event ..svg" alt="SkyEvent Logo" />
            <HeroTitle>Notre Voyage Culinaire</HeroTitle>
            <HeroSubtitle>Gastronomie Événementielle</HeroSubtitle>
          </LogoContainer>
          
          <TextSection
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <StoryTitle>{storyTexts[0].title}</StoryTitle>
            <StoryText>{storyTexts[0].text}</StoryText>
            
            <CTAContainer>
              <CTAButton to="/evenementiel" primary>Découvrir nos services</CTAButton>
              <CTAButton to="/realisations">Voir nos réalisations</CTAButton>
            </CTAContainer>
          </TextSection>
        </ContentWrapper>
      </StickyContainer>
    </StoryContainer>
  );
};

export default OurStorySection;
