import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// Placeholder images - à remplacer par vos propres images
const carouselImages = [
  'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1563612116625-3012372fccce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
];

const CarouselContainer = styled.section`
  padding: 80px 0;
  background-color: #f8f8f8;
  overflow: hidden;
`;

const CarouselTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  font-family: 'Playfair Display', serif;
`;

const CarouselWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  height: 500px;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const CarouselSlide = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
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
  border-radius: 50%;
  background-color: ${props => props.active ? '#333' : '#ddd'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#333' : '#bbb'};
  }
`;

const CarouselArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
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
