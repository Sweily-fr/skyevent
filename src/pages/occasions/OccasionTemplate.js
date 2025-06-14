import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ContactSection from '../../components/ContactSection';
import EventBanner from '../../components/EventBanner';
import { VIDEO_SOURCE, FALLBACK_IMAGE, BANNER_TITLE, BANNER_SUBTITLE } from '../../utils/constants';

const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
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
  background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%);
`;

const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  z-index: 0;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%);
  }
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
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 30px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContentSection = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  font-family: 'Playfair Display', serif;
`;

const InfoBlocks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 60px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoBlock = styled.div`
  background-color: #f8f8f8;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BlockTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-family: 'Playfair Display', serif;
`;

const BlockText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

const MediaSection = styled.section`
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MediaContent = styled.div`
  width: 100%;
  max-width: 800px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const MediaImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const VideoWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const CarouselSection = styled.section`
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
  background-image: url(${props => props.src || ''});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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

const OccasionTemplate = ({ 
  title,
  subtitle,
  heroImage,
  infoBlocks,
  mediaType, // 'image' ou 'video'
  mediaContent, // URL de l'image ou de la vidéo
  carouselImages,
  bannerImage,
  useVideo = true // Utiliser la vidéo au lieu de l'image pour le hero
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % carouselImages.length);
  }, [carouselImages.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + carouselImages.length) % carouselImages.length);
  }, [carouselImages.length]);

  const goToSlide = useCallback((index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <>
      <HeroContainer>
        {useVideo ? (
          <VideoContainer>
            <VideoBackground 
              autoPlay 
              loop 
              muted 
              playsInline
              onError={(e) => console.error('Erreur vidéo:', e)}
            >
              <source src={process.env.PUBLIC_URL + VIDEO_SOURCE} type="video/mp4" />
              <img 
                src={process.env.PUBLIC_URL + FALLBACK_IMAGE} 
                alt="Présentation de sushis"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }} 
              />
            </VideoBackground>
          </VideoContainer>
        ) : (
          <HeroImage src={heroImage} />
        )}
        <Overlay />
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </HeroSubtitle>
        </HeroContent>
      </HeroContainer>

      <ContentSection>
        <SectionTitle>Notre offre</SectionTitle>
        <InfoBlocks>
          {infoBlocks.map((block, index) => (
            <InfoBlock key={index}>
              <BlockTitle>{block.title}</BlockTitle>
              <BlockText>{block.text}</BlockText>
            </InfoBlock>
          ))}
        </InfoBlocks>
      </ContentSection>

      <MediaSection>
        {mediaType === 'video' ? (
          <VideoWrapper>
            <iframe
              src={mediaContent}
              title="Présentation vidéo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoWrapper>
        ) : (
          <MediaContent>
            <MediaImage src={mediaContent} alt="Présentation" />
          </MediaContent>
        )}
      </MediaSection>

      <CarouselSection>
        <CarouselTitle>Galerie photos</CarouselTitle>
        <CarouselWrapper>
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
            <CarouselImage style={{ backgroundImage: `url(${carouselImages[currentIndex]})` }} />
          </CarouselSlide>
          
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
      </CarouselSection>

      <EventBanner 
        title={BANNER_TITLE}
        subtitle={BANNER_SUBTITLE}
        backgroundImage={bannerImage}
      />
      
      <ContactSection />
    </>
  );
};

export default OccasionTemplate;
