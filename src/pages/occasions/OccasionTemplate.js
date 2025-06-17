import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ContactSection from '../../components/ContactSection';

// Image de secours pour la vidéo
const FALLBACK_IMAGE = '/images/DSC05261.jpg';

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



const OfferSection = styled.section`
  padding: 100px 0;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const OfferSectionTitle = styled.h2`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 60px;
  font-family: 'Playfair Display', serif;
  font-weight: 300;
  letter-spacing: 2px;
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

const OfferGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 50px;
    max-width: 600px;
  }
`;

const OfferItem = styled.div`
  position: relative;
  overflow: hidden;
  height: 600px;
  cursor: pointer;
  transition: all 0.5s ease;
  
  &:hover {
    transform: translateY(-10px);
    
    .offer-overlay {
      opacity: 0.9;
    }
    
    .offer-content {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @media (max-width: 992px) {
    height: 500px;
  }
`;

const OfferImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  transition: all 0.8s ease;
`;

const OfferOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%);
  opacity: 0.7;
  transition: all 0.5s ease;
`;

const OfferContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 30px;
  color: white;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.5s ease 0.1s;
  z-index: 2;
`;

const OfferTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 15px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: 'Playfair Display', serif;
`;

const OfferDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  font-weight: 300;
`;


const CarouselSection = styled.section`
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
  font-family: 'Playfair Display', serif;
  font-weight: 300;
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CarouselImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
`;

const CarouselControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 12px;
`;

const CarouselDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.active ? '#d4af37' : '#e0e0e0'};
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
    background-color: #d4af37;
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

// Configuration des offres par type d'occasion
const OCCASION_OFFERS = {
  'mariage': [
    {
      title: 'Cérémonie de Mariage',
      description: 'Un service traiteur raffiné pour le jour J, avec une présentation élégante et des saveurs exquises qui émerveilleront vos invités.',
      image: '/images/DSC05261.jpg'
    },
    {
      title: 'Cocktail de Mariage',
      description: 'Des bouchées sophistiquées et des boissons rafraîchissantes pour un cocktail réussi après la cérémonie.',
      image: '/images/DSC05270.jpg'
    },
    {
      title: 'Dîner de Gala',
      description: 'Un repas gastronomique servi à table, préparé par nos chefs pour un dîner de mariage mémorable.',
      image: '/images/DSC05318.jpg'
    }
  ],
  'anniversaire': [
    {
      title: 'Buffet Anniversaire',
      description: 'Un buffet varié et festif pour célébrer votre anniversaire avec style et gourmandise.',
      image: '/images/DSC05270.jpg'
    },
    {
      title: 'Atelier Sushi',
      description: 'Animation culinaire interactive où vos invités apprennent à préparer des sushis avec nos chefs.',
      image: '/images/DSC05261.jpg'
    },
    {
      title: 'Bar à Sushis',
      description: 'Un chef prépare des sushis frais devant vos invités pour une expérience culinaire unique.',
      image: '/images/DSC05318.jpg'
    }
  ],
  'babyshower': [
    {
      title: 'Buffet Bébé',
      description: 'Des mets délicats et raffinés pour célébrer l\'arrivée prochaine de bébé.',
      image: '/images/DSC05372.jpg'
    },
    {
      title: 'Desserts Thématiques',
      description: 'Des pâtisseries et douceurs sur le thème bébé pour une touche sucrée à votre événement.',
      image: '/images/DSC05381.jpg'
    },
    {
      title: 'Atelier Culinaire',
      description: 'Une activité ludique où les invités préparent des mets pour les futurs parents.',
      image: '/images/DSC05410.jpg'
    }
  ],
  'bapteme': [
    {
      title: 'Buffet de Baptême',
      description: 'Une sélection de mets raffinés pour célébrer ce jour spécial en famille.',
      image: '/images/DSC05318.jpg'
    },
    {
      title: 'Desserts de Fête',
      description: 'Des pâtisseries élégantes pour le plaisir des petits et des grands.',
      image: '/images/DSC05270.jpg'
    },
    {
      title: 'Animation Gourmande',
      description: 'Un atelier culinaire pour les enfants et leurs parents.',
      image: '/images/DSC05261.jpg'
    }
  ],
  'entreprise': [
    {
      title: 'Cocktail d\'Entreprise',
      description: 'Un service traiteur professionnel pour vos événements d\'entreprise.',
      image: '/images/DSC05261.jpg'
    },
    {
      title: 'Séminaire Gourmand',
      description: 'Des pauses gourmandes pour rythmer vos journées de travail.',
      image: '/images/DSC05270.jpg'
    },
    {
      title: 'Team Building Culinaire',
      description: 'Renforcez la cohésion d\'équipe avec un atelier cuisine animé par nos chefs.',
      image: '/images/DSC05318.jpg'
    }
  ],
  'marque': [
    {
      title: 'Événement de Marque',
      description: 'Une expérience culinaire unique qui mettra en valeur votre marque.',
      image: '/images/DSC05261.jpg'
    },
    {
      title: 'Lancement Produit',
      description: 'Un buffet créatif pour le lancement de vos nouveaux produits.',
      image: '/images/DSC05270.jpg'
    },
    {
      title: 'Showroom Culinaire',
      description: 'Mettez en scène votre marque à travers une expérience gastronomique mémorable.',
      image: '/images/DSC05318.jpg'
    }
  ]
};

const OccasionTemplate = ({ 
  title,
  subtitle,
  heroImage,
  infoBlocks,
  mediaType, // 'image' ou 'video'
  mediaContent = '/videos/IMG_0724.MP4', // URL de l'image ou de la vidéo
  carouselImages,
  bannerImage,
  useVideo = true, // Utiliser la vidéo au lieu de l'image pour le hero
  occasionType = 'mariage' // Type d'occasion pour personnaliser les offres
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [videoError, setVideoError] = useState(false);
  
  // Fonction pour gérer les erreurs de chargement vidéo
  const handleVideoError = (e) => {
    console.error('Erreur de chargement de la vidéo:', e);
    console.log('Chemin de la vidéo:', process.env.PUBLIC_URL + mediaContent);
    setVideoError(true);
  };
  

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
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: 1
          }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              onError={handleVideoError}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                minWidth: '100%',
                minHeight: '100%',
                width: 'auto',
                height: 'auto',
                transform: 'translate(-50%, -50%)',
                objectFit: 'cover'
              }}
            >
              <source 
                src={`${process.env.PUBLIC_URL}${mediaContent}`} 
                type="video/mp4"
              />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
        ) : (
          <HeroImage 
            src={videoError ? `${process.env.PUBLIC_URL}${FALLBACK_IMAGE}` : heroImage} 
            alt={title}
          />
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

      <OfferSection>
        <OfferSectionTitle>Nos Prestations Exclusives</OfferSectionTitle>
        <OfferGrid>
          {OCCASION_OFFERS[occasionType]?.map((offer, index) => (
            <OfferItem key={index}>
              <OfferImage image={process.env.PUBLIC_URL + offer.image} />
              <OfferOverlay className="offer-overlay" />
              <OfferContent className="offer-content">
                <OfferTitle>{offer.title}</OfferTitle>
                <OfferDescription>
                  {offer.description}
                </OfferDescription>
              </OfferContent>
            </OfferItem>
          ))}
        </OfferGrid>
      </OfferSection>

      <CarouselSection>
        <CarouselTitle>NOTRE GALERIE D'IMAGES</CarouselTitle>
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

      
      <ContactSection />
    </>
  );
};

export default OccasionTemplate;
