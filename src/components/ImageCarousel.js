import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// Images de la galerie avec attributs alt pour le SEO
// Images préchargées pour éviter les problèmes de performance
const carouselImages = [
  { src: '/images/DSC05410.jpg', alt: 'Service traiteur événementiel de luxe par SkyEvent' },
  { src: '/images/DSC05407.jpg', alt: 'Décoration élégante pour réception par SkyEvent' },
  { src: '/images/DSC05400.jpg', alt: 'Présentation culinaire raffinée pour événement' },
  { src: '/images/DSC05351.jpg', alt: 'Buffet gastronomique pour mariage par SkyEvent' },
  { src: '/images/DSC05372.jpg', alt: 'Aménagement d\'espace pour événement corporate' }
];

// Préchargement des images
const preloadImages = () => {
  carouselImages.forEach(image => {
    const img = new Image();
    img.src = image.src;
  });
};

const CarouselContainer = styled.section`
  padding: 100px 0;
  background-color: #ffffff;
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, #d4af37, transparent);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, #d4af37, transparent);
  }
  
  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const CarouselTitle = styled.h2`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 60px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  position: relative;
  padding-bottom: 20px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 1px;
    background-color: #d4af37;
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    padding: 0 20px 20px;
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  height: 600px;
  padding: 0 20px;
  box-sizing: border-box;
  overflow: hidden;
  perspective: 1000px; /* Ajout d'une perspective pour les animations 3D */
  -webkit-backface-visibility: hidden; /* Empêche les effets de scintillement sur iOS */
  -webkit-transform-style: preserve-3d; /* Optimisation pour les animations */
  
  @media (max-width: 1200px) {
    height: 500px;
  }
  
  @media (max-width: 768px) {
    height: 350px;
    padding: 0 15px;
  }
  
  @media (max-width: 480px) {
    height: 250px;
    padding: 0 10px;
  }
`;

const CarouselSlide = styled(motion.div)`
  position: absolute;
  width: calc(100% - 40px);
  left: 20px;
  right: 20px;
  height: 100%;
  overflow: hidden;
  border: 1px solid #f0f0f0;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  will-change: transform, opacity; /* Optimisation des performances */
  backface-visibility: hidden; /* Empêche les effets de scintillement */
  -webkit-backface-visibility: hidden;
  -webkit-transform-style: preserve-3d;
  transform: translateZ(0); /* Force l'accélération matérielle */
  -webkit-transform: translateZ(0);
  
  /* Désactiver les animations au survol sur mobile */
  @media (hover: hover) {
    &:hover {
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
    }
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  will-change: transform; /* Optimisation des performances */
  transform: translateZ(0); /* Force l'accélération matérielle */
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`;

const CarouselControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 15px;
`;

const CarouselDot = styled.button`
  width: 12px;
  height: 12px;
  min-width: 12px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#d4af37' : '#e0e0e0'};
  border: none;
  cursor: pointer;
  margin: 0 4px;
  padding: 0;
  outline: none;
  flex-shrink: 0;
  
  /* Désactiver les transitions sur iOS pour éviter les sauts */
  @media not all and (-webkit-min-device-pixel-ratio:0) {
    transition: all 0.3s ease;
  }
  
  /* Désactiver les animations sur iOS */
  @supports (-webkit-touch-callout: none) {
    &:hover {
      background-color: ${props => props.active ? '#d4af37' : '#c0c0c0'};
    }
  }
  
  /* Activer les animations sur les autres navigateurs */
  @supports not (-webkit-touch-callout: none) {
    &:hover {
      background-color: ${props => props.active ? '#d4af37' : '#c0c0c0'};
      transform: scale(1.2);
    }
  }
`;

// Suppression de la détection de navigateur qui était coûteuse

const CarouselArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateZ(0);
  -webkit-transform: translateY(-50%) translateZ(0);
  z-index: 1000;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #f0f0f0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  color: #333;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  outline: none;
  margin: 0 20px;
  
  &:hover {
    background-color: #d4af37 !important;
    color: white;
    border-color: #d4af37 !important;
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3) !important;
    transform: translateY(-50%) scale(1.1) translateZ(0);
    -webkit-transform: translateY(-50%) scale(1.1) translateZ(0);
  }
  
  /* Styles spécifiques pour le mode tactile sur iOS */
  @media (hover: none) and (pointer: coarse) {
    &:active {
      background-color: #d4af37 !important;
      transform: translateY(-50%) scale(0.95) translateZ(0);
      -webkit-transform: translateY(-50%) scale(0.95) translateZ(0);
    }
  }
  
  &.prev {
    left: 20px;
  }
  
  &.next {
    right: 20px;
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

const slideVariants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? '101%' : '-101%', // 101% pour éviter les bordures visibles
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 35 },
        opacity: { duration: 0.1 }
      }
    };
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 35 },
      opacity: { duration: 0.1 }
    }
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? '101%' : '-101%',
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 35 },
        opacity: { duration: 0.1 }
      }
    };
  }
};

const ImageCarousel = () => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const [autoplay, setAutoplay] = useState(true);
  
  // Précharger les images au montage du composant
  useEffect(() => {
    preloadImages();
  }, []);

  const nextSlide = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setCurrentIndex(prev => {
      const newDirection = 1;
      const newIndex = (prev[0] + 1) % carouselImages.length;
      return [newIndex, newDirection];
    });
  };

  const prevSlide = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setCurrentIndex(prev => {
      const newDirection = -1;
      const newIndex = (prev[0] - 1 + carouselImages.length) % carouselImages.length;
      return [newIndex, newDirection];
    });
  };
  
  // Gestion des touches du clavier
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(prev => {
      const newDirection = index > prev[0] ? 1 : -1;
      return [index, newDirection];
    });
  };

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(nextSlide, 7000); // Augmenter l'intervalle pour réduire les re-renders
    }
    return () => clearInterval(interval);
  }, [autoplay]);

  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <CarouselContainer>
      <CarouselTitle>Notre galerie d'images</CarouselTitle>
      <CarouselWrapper 
        className="carousel-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="region"
        aria-label="Galerie d'images"
        tabIndex="0"
        style={{
          WebkitOverflowScrolling: 'touch',
          WebkitTransform: 'translateZ(0)'
        }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <CarouselSlide
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <CarouselImage 
            src={carouselImages[currentIndex].src} 
            alt={carouselImages[currentIndex].alt} 
          />
          </CarouselSlide>
        </AnimatePresence>
        
        <CarouselArrow 
          className="prev" 
          onClick={prevSlide}
          aria-label="Image précédente"
          onKeyDown={(e) => e.key === 'Enter' && prevSlide(e)}
          tabIndex={0}
        >
          &#8249;
        </CarouselArrow>
        <CarouselArrow 
          className="next" 
          onClick={nextSlide}
          aria-label="Image suivante"
          onKeyDown={(e) => e.key === 'Enter' && nextSlide(e)}
          tabIndex={0}
        >
          &#8250;
        </CarouselArrow>
      </CarouselWrapper>
      
      <CarouselControls>
        {carouselImages.map((_, index) => (
          <CarouselDot 
            key={index}
            active={index === currentIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </CarouselControls>
    </CarouselContainer>
  );
};

export default ImageCarousel;
