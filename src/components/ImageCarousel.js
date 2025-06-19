import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// Images de la galerie
const carouselImages = [
  '/images/DSC05410.jpg',
  '/images/DSC05407.jpg',
  '/images/DSC05400.jpg',
  '/images/DSC05351.jpg',
  '/images/DSC05372.jpg'
];

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
  transition: all 0.4s ease;
  
  &:hover {
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  }
`;

const CarouselImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
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
  transition: all 0.3s ease;
  margin: 0 4px;
  padding: 0;
  outline: none;
  flex-shrink: 0;
  
  &:hover {
    background-color: ${props => props.active ? '#d4af37' : '#c0c0c0'};
    transform: scale(1.2);
  }
`;

const CarouselArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
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
    background-color: #d4af37;
    color: white;
    border-color: #d4af37;
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
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
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    };
  },
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    };
  }
};

const ImageCarousel = () => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const [autoplay, setAutoplay] = useState(true);

  const nextSlide = () => {
    setCurrentIndex(prev => {
      const newDirection = 1;
      const newIndex = (prev[0] + 1) % carouselImages.length;
      return [newIndex, newDirection];
    });
  };

  const prevSlide = () => {
    setCurrentIndex(prev => {
      const newDirection = -1;
      const newIndex = (prev[0] - 1 + carouselImages.length) % carouselImages.length;
      return [newIndex, newDirection];
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(prev => {
      const newDirection = index > prev[0] ? 1 : -1;
      return [index, newDirection];
    });
  };

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay]);

  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <CarouselContainer>
      <CarouselTitle>Notre galerie d'images</CarouselTitle>
      <CarouselWrapper 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
            <CarouselImage src={carouselImages[currentIndex]} />
          </CarouselSlide>
        </AnimatePresence>
        
        <CarouselArrow className="prev" onClick={prevSlide}>
          &#8249;
        </CarouselArrow>
        <CarouselArrow className="next" onClick={nextSlide}>
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
