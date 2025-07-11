import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import StandardButton from './StandardButton';
import { VIDEO_SOURCE, FALLBACK_IMAGE } from '../utils/constants';

// Utilisation des constantes pour les sources média
const videoSource = VIDEO_SOURCE;
const fallbackImage = FALLBACK_IMAGE;

const StoryContainer = styled.section`
  position: relative;
  width: 100%;
  margin-top: -120px; /* Pour compenser la hauteur du header et éliminer l'écart */
  padding-top: 0; /* Suppression du padding pour éliminer tout espace */
  font-family: 'Playfair Display', serif;
  max-width: 100%;
  box-sizing: border-box;
  /* Ne pas utiliser overflow-x: hidden directement ici pour préserver l'effet sticky */
  
  /* Styles spécifiques pour iOS */
  @supports (-webkit-touch-callout: none) {
    width: 100%;
    max-width: 100%;
    left: 0;
    right: 0;
  }
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
  background-color: #000; /* Fond noir pour un aspect plus luxueux */
  /* Assurer que le conteneur reste sticky pendant tout le défilement */
  will-change: transform;
  max-width: 100%;
  box-sizing: border-box;
  /* Styles pour iOS */
  @supports (-webkit-touch-callout: none) {
    width: 100%;
    left: 0;
    right: 0;
    transform: translateZ(0); /* Forcer l'accélération matérielle */
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 100vw;
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
  padding-bottom: 60vh; /* Réduction du padding pour moins d'espace vide */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px; /* Espacement des lettres pour un aspect luxueux */
  pointer-events: auto; /* Réactiver les événements pour ce conteneur */
  
  @media (max-width: 768px) {
    padding-bottom: 30vh; /* Réduction de l'espace sur mobile */
  }
`;

const Logo = styled.img`
  width: 200px; /* Taille augmentée pour une meilleure visibilité */
  height: auto;
  filter: brightness(0) invert(1); /* Pour forcer la couleur blanche si le SVG est noir */
  object-fit: contain; /* Pour s'assurer que tout le logo est visible */
`;

const HeroTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 500; /* Poids réduit pour un aspect plus élégant */
  color: white;
  margin-bottom: 20px;
  font-family: 'Inter', sans-serif;
  line-height: 1.1;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: white;
  margin-top: 15px;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ScrollIndicator = styled(({ scrollY, scrollProgress, ...rest }) => <div {...rest} />)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  z-index: 4;
  opacity: ${props => props.$scrollY === 0 ? 1 : Math.max(0, 1 - props.$scrollProgress * 5)};
  transition: opacity 0.3s ease;
`;

const ScrollText = styled.p`
  font-size: 0.9rem;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.9;
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
  /* Hauteur déterminée dynamiquement par le contenu */
  width: 100%;
  overflow: visible; /* Permettre au contenu de déborder */
  /* La hauteur sera définie en JavaScript en fonction du contenu */
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

// Ancien CTAButton remplacé par le composant StandardButton

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* Hauteur déterminée dynamiquement par le contenu */
  z-index: 3;
  transition: transform 0.2s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  will-change: transform; /* Optimisation pour les navigateurs modernes */
  pointer-events: none; /* Permettre aux événements de passer à travers pour le conteneur vidéo */
  max-width: 100vw;
  box-sizing: border-box;
  /* La hauteur sera définie en JavaScript en fonction du contenu */
`;

const TextSection = styled(motion.div)`
  position: relative;
  color: white;
  text-align: center;
  width: 80%;
  max-width: 800px;
  padding: 40px 0;
  margin-bottom: 20vh; /* Réduction de la marge pour moins d'espace vide après le texte */
  pointer-events: auto; /* Réactiver les événements pour ce conteneur */
  
  @media (max-width: 768px) {
    width: 90%;
    padding: 30px 20px;
    margin-bottom: 15vh; /* Réduction de la marge sur mobile */
  }
`;

const StoryTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 600;
  margin-bottom: 30px;
  font-family: 'Inter', sans-serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StoryText = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  margin-bottom: 25px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.3px;
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
    line-height: 1.7;
  }
`;

const OurStorySection = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const textSectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  
  // Ajout d'un effet pour corriger le problème de défilement horizontal sur iOS
  useEffect(() => {
    // Fonction pour s'assurer que la largeur est correctement définie sur iOS sans casser l'effet sticky
    const fixIOSHorizontalScroll = () => {
      // Détection des appareils iOS
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                   (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      
      if (!isIOS) return; // Ne rien faire si ce n'est pas iOS
      
      // Forcer le recalcul de la largeur pour iOS
      document.documentElement.style.setProperty('--vw', `${window.innerWidth}px`);
      
      // Nouvelle approche pour iOS qui préserve l'effet sticky
      // Technique 1: Créer un élément pour masquer la bande blanche
      if (!document.getElementById('sticky-edge-fix')) {
        const edgeFix = document.createElement('div');
        edgeFix.id = 'sticky-edge-fix';
        edgeFix.style.cssText = 'position:fixed;top:0;right:0;bottom:0;width:5px;background-color:#fff;z-index:9999;pointer-events:none;';
        document.body.appendChild(edgeFix);
      }
      
      // Technique 2: Optimiser les éléments sticky
      const stickyElements = document.querySelectorAll('[style*="position: sticky"], [style*="position:sticky"]');
      stickyElements.forEach(el => {
        // Optimiser le rendu des éléments sticky
        el.style.transform = 'translateZ(0)';
        el.style.willChange = 'transform';
        el.style.backfaceVisibility = 'hidden';
        
        // S'assurer que les parents des éléments sticky n'ont pas overflow-x: hidden
        let parent = el.parentElement;
        while (parent && parent !== document.body) {
          const style = window.getComputedStyle(parent);
          if (style.overflowX === 'hidden') {
            parent.style.overflowX = 'visible';
          }
          parent = parent.parentElement;
        }
      });
    };
    
    // Appliquer immédiatement et lors des changements de taille
    fixIOSHorizontalScroll();
    window.addEventListener('resize', fixIOSHorizontalScroll);
    window.addEventListener('orientationchange', fixIOSHorizontalScroll);
    
    // Appliquer également après un court délai pour s'assurer que tout est chargé
    const timeoutId = setTimeout(fixIOSHorizontalScroll, 500);
    
    return () => {
      window.removeEventListener('resize', fixIOSHorizontalScroll);
      window.removeEventListener('orientationchange', fixIOSHorizontalScroll);
      clearTimeout(timeoutId);
    };
  }, []);
  
  // Effet pour détecter le défilement avec optimisation des performances
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Nettoyage de l'écouteur d'événement lors du démontage
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Effet pour ajuster la hauteur du conteneur sticky en fonction du contenu
  useEffect(() => {
    if (!textSectionRef.current || !containerRef.current || !contentRef.current) return;
    
    // Fonction pour calculer la hauteur nécessaire
    const calculateHeight = () => {
      // Obtenir la hauteur du contenu texte
      const textHeight = textSectionRef.current.offsetHeight;
      // Ajouter un espace supplémentaire pour l'animation et le défilement
      const viewportHeight = window.innerHeight;
      // Calculer la hauteur totale nécessaire pour que le sticky persiste jusqu'à la fin du texte
      // Formule : hauteur du viewport + hauteur du texte + espace supplémentaire pour l'animation
      const totalHeight = viewportHeight + textHeight + 200;
      
      // Définir la hauteur du conteneur
      containerRef.current.style.height = `${totalHeight}px`;
      contentRef.current.style.height = `${totalHeight}px`;
      setContentHeight(totalHeight);
    };
    
    // Calculer la hauteur initiale
    calculateHeight();
    
    // Recalculer lors du redimensionnement
    window.addEventListener('resize', calculateHeight);
    
    return () => {
      window.removeEventListener('resize', calculateHeight);
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
  // Augmentation plus lente sur mobile pour que l'overlay reste visible plus longtemps
  const overlayOpacity = window.innerWidth <= 768 
    ? Math.min(1, scrollY / 500) 
    : Math.min(1, scrollY / 300);

  // Calculer la distance de défilement maximale en fonction de la hauteur du contenu
  const maxScrollDistance = contentHeight > 0 ? contentHeight - window.innerHeight : 600;
  
  // Détecter iOS pour des ajustements spécifiques
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
               (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  
  // Calculer le facteur de parallaxe en fonction de la hauteur du contenu
  const getParallaxOffset = () => {
    // Si la hauteur du contenu n'est pas encore calculée, utiliser les valeurs par défaut
    if (contentHeight <= 0) {
      return window.innerWidth <= 768 ? Math.min(scrollY * 0.2, 400) : Math.min(scrollY * 0.3, 600);
    }
    
    // Sinon, calculer le décalage en fonction de la progression du défilement par rapport à la hauteur totale
    const scrollProgress = Math.min(scrollY / maxScrollDistance, 1);
    const maxOffset = window.innerWidth <= 768 ? 400 : 600;
    return scrollProgress * maxOffset;
  };
  
  // Appliquer des styles spécifiques pour iOS
  useEffect(() => {
    if (!isIOS) return;
    
    // S'assurer que les éléments sticky sont correctement configurés sur iOS
    const stickyElements = document.querySelectorAll('[style*="position: sticky"], [style*="position:sticky"]');
    stickyElements.forEach(el => {
      el.style.transform = 'translateZ(0)';
      el.style.willChange = 'transform';
      el.style.maxWidth = '100%';
    });
  }, [isIOS]);
  
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
          <ScrollIndicator $scrollProgress={scrollY / 500} $scrollY={scrollY}>
            <ScrollText>Découvrir</ScrollText>
            <ScrollLine />
          </ScrollIndicator>
        </VideoContainer>
        
        <ContentWrapper 
          ref={contentRef}
          style={{ 
            transform: `translateY(-${getParallaxOffset()}px)` 
          }}>
          <LogoContainer>
            <Logo src="/images/Sky Event ..svg" alt="SkyEvent Logo" />
            <HeroTitle>L'Art Culinaire</HeroTitle>
            <HeroSubtitle>Sky Event Paris</HeroSubtitle>
          </LogoContainer>
          
          <TextSection
            ref={textSectionRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <StoryTitle>{storyTexts[0].title}</StoryTitle>
            <StoryText>{storyTexts[0].text}</StoryText>
            
            <CTAContainer>
              <StandardButton to="/evenementiel" darkBackground={true}>Découvrir nos services</StandardButton>
              <StandardButton to="/realisations" darkBackground={true}>Voir nos réalisations</StandardButton>
            </CTAContainer>
          </TextSection>
        </ContentWrapper>
      </StickyContainer>
    </StoryContainer>
  );
};

export default OurStorySection;
