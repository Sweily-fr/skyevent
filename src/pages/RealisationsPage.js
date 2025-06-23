import React, { useState, useEffect, useRef } from 'react';
import SEOSchema from '../components/SEOSchema';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ContactSection from '../components/ContactSection';
import StandardButton from '../components/StandardButton';

// Liste des images des réalisations avec descriptions pour le SEO
const realisationsImages = [
  { src: '/images/DSC05266.jpg', alt: 'Décoration élégante pour événement SkyEvent' },
  { src: '/images/DSC05275.jpg', alt: 'Buffet gastronomique préparé par SkyEvent' },
  { src: '/images/DSC05278.jpg', alt: 'Présentation culinaire raffinée pour réception' },
  { src: '/images/DSC05281.jpg', alt: 'Décoration de table pour mariage par SkyEvent' },
  { src: '/images/DSC05287-2.jpg', alt: 'Mise en place événementielle professionnelle' },
  { src: '/images/DSC05289.jpg', alt: 'Cocktail dînatoire pour événement d\'entreprise' },
  { src: '/images/DSC05290.jpg', alt: 'Présentation artistique de plats pour réception' },
  { src: '/images/DSC05291.jpg', alt: 'Décoration florale pour événement de prestige' },
  { src: '/images/DSC05292.jpg', alt: 'Service traiteur haut de gamme pour soirée' },
  { src: '/images/DSC05294.jpg', alt: 'Aménagement d\'espace pour événement corporate' },
  { src: '/images/DSC05297.jpg', alt: 'Buffet cocktail pour réception privée' },
  { src: '/images/DSC05299.jpg', alt: 'Décoration de salle pour événement spécial' },
  { src: '/images/DSC05305.jpg', alt: 'Présentation culinaire créative SkyEvent' },
  { src: '/images/DSC05318.jpg', alt: 'Mise en scène événementielle pour gala' },
  { src: '/images/DSC05319.jpg', alt: 'Décoration de table pour dîner d\'exception' },
  { src: '/images/DSC05325.jpg', alt: 'Service traiteur pour événement luxueux' },
  { src: '/images/DSC05328.jpg', alt: 'Préparation culinaire pour événement privé' },
  { src: '/images/DSC05331.jpg', alt: 'Décoration florale pour réception de mariage' },
  { src: '/images/DSC05335.jpg', alt: 'Buffet gastronomique pour événement corporate' },
  { src: '/images/DSC05336.jpg', alt: 'Aménagement d\'espace pour cocktail dînatoire' },
  { src: '/images/DSC05338.jpg', alt: 'Présentation de desserts pour événement' },
  { src: '/images/DSC05340.jpg', alt: 'Décoration de salle pour gala d\'entreprise' },
  { src: '/images/DSC05343.jpg', alt: 'Service traiteur élégant pour réception' },
  { src: '/images/DSC05345.jpg', alt: 'Mise en place de table pour dîner de gala' },
  { src: '/images/DSC05351.jpg', alt: 'Buffet raffiné pour événement professionnel' },
  { src: '/images/DSC05354.jpg', alt: 'Décoration événementielle sur mesure' },
  { src: '/images/DSC05361.jpg', alt: 'Présentation artistique de mets pour réception' },
  { src: '/images/DSC05363.jpg', alt: 'Service traiteur pour soirée d\'exception' },
  { src: '/images/DSC05372.jpg', alt: 'Aménagement d\'espace pour événement de luxe' },
  { src: '/images/DSC05386.jpg', alt: 'Buffet gastronomique pour réception privée' },
  { src: '/images/DSC05388.jpg', alt: 'Décoration florale pour événement corporate' },
  { src: '/images/DSC05391.jpg', alt: 'Service traiteur pour mariage élégant' },
  { src: '/images/DSC05395.jpg', alt: 'Mise en scène culinaire pour événement VIP' },
  { src: '/images/DSC05396.jpg', alt: 'Décoration de table pour dîner de prestige' },
  { src: '/images/DSC05400.jpg', alt: 'Buffet cocktail pour événement d\'entreprise' },
  { src: '/images/DSC05435.jpg', alt: 'Présentation gastronomique pour réception SkyEvent' }
];

const PageContainer = styled.div`
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  color: #1a1a1a;
  background-color: #ffffff;
  overflow-x: hidden;
  line-height: 1.6;
`;

const HeroSection = styled.section`
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-align: center;
  padding: 40px 20px;
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/DSC05291.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 60px;
  /* L'image d'arrière-plan est décorative, le texte du titre et de la description fournit le contexte */
  
  & > * {
    position: relative;
    z-index: 2;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 20px;
  color: #ffffff;
  text-transform: uppercase;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeroDescription = styled.p`
  max-width: 800px;
  margin: 0 auto 30px;
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    width: 100%;
    max-width: 300px;
  }
`;

const GallerySection = styled.section`
  padding: 60px 5%;
  max-width: 1600px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem !important;
  font-family: 'Inter', sans-serif !important;
  font-weight: 600 !important;
  margin-bottom: 40px !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
  position: relative !important;
  display: inline-block !important;
  padding-bottom: 10px !important;
  color: #1a1a1a !important;
  line-height: 1.3 !important;
  
  @media (max-width: 768px) {
    font-size: 1.8rem !important;
    margin-bottom: 30px !important;
    line-height: 1.3 !important;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background-color: #d4af37;
  }
`;

const RealisationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const RealisationCard = styled(motion.div)`
  overflow: hidden;
  position: relative;
  aspect-ratio: 1;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  will-change: transform, opacity;
  
  /* Désactiver le z-index sur mobile */
  @media (min-width: 769px) {
    &:hover {
      z-index: 2;
    }
  }
`;

const RealisationImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  
  /* Activer le zoom uniquement sur desktop */
  @media (min-width: 769px) {
    transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
    will-change: transform;
    
    ${RealisationCard}:hover & {
      transform: scale(1.05);
    }
  }
`;

const ImagePlaceholder = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f8f8f8;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, #f8f8f8 0px, #f0f0f0 50%, #f8f8f8 100%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite linear;
  }
  
  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const ImageModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
  /* L'attribut alt sera ajouté dynamiquement */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

const RealisationsPage = () => {
  const [visibleImages, setVisibleImages] = useState(9);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const gridRef = useRef(null);
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
    document.title = 'Nos réalisations - SkyEvent';
    
    // Préchargement des images
    realisationsImages.forEach((image) => {
      const img = new Image();
      img.src = image.src;
      img.onload = () => {
        setLoadedImages(prev => ({
          ...prev,
          [image.src]: true
        }));
      };
    });
  }, []);
  
  // Fonction pour charger plus d'images
  const loadMoreImages = () => {
    setVisibleImages(prev => Math.min(prev + 6, realisationsImages.length));
  };
  
  // Ouvrir l'image en modal
  const openImageModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Empêcher le scroll du body
  };
  
  // Fermer le modal
  const closeImageModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Réactiver le scroll du body
  };

  return (
    <PageContainer>
      <SEOSchema 
        pageType="CollectionPage" 
        pageName="Nos Réalisations | SkyEvent - Traiteur Événementiel" 
        pageDescription="Découvrez nos réalisations en matière d'événementiel et de traiteur. Mariages, événements d'entreprise, anniversaires et plus encore." 
        pageUrl="https://skyevent.fr/realisations" 
        pageImage="/images/DSC05266.jpg" 
      />
      <HeroSection>
        <HeroTitle>Nos Réalisations</HeroTitle>
        <HeroDescription>
          Découvrez un aperçu de nos dernières créations et réalisations événementielles.
          Chaque image raconte une histoire unique de succès et d'innovation.
        </HeroDescription>
        <ButtonWrapper>
          <StandardButton to="/evenementiel" darkBackground={true}>
            Nos prestations
          </StandardButton>
          <StandardButton to="/contact" darkBackground={true}>
            Demander un devis
          </StandardButton>
        </ButtonWrapper>
      </HeroSection>
      
      <GallerySection>
        <SectionTitle>Galerie Photos</SectionTitle>
        <RealisationsGrid ref={gridRef}>
          {realisationsImages.slice(0, visibleImages).map((image, index) => (
            <RealisationCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: loadedImages[image.src] ? 1 : 0,
                y: loadedImages[image.src] ? 0 : 30
              }}
              transition={{
                opacity: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                y: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                delay: index % 6 * 0.05
              }}
              viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
              onClick={() => openImageModal(image)}
            >
              <RealisationImage 
                src={image.src}
                alt={image.alt}
                initial={false}
                animate={{
                  opacity: loadedImages[image.src] ? 1 : 0,
                  scale: loadedImages[image.src] ? 1 : 0.97
                }}
                transition={{
                  opacity: { duration: 0.3 },
                  scale: { 
                    duration: 0.4, 
                    ease: [0.4, 0, 0.2, 1],
                    delay: window.innerWidth < 769 ? 0 : 0.1
                  }
                }}
                style={{
                  transformOrigin: 'center center',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden'
                }}
              />
              {!loadedImages[image.src] && (
                <ImagePlaceholder 
                  initial={{ opacity: 1 }}
                  animate={{ opacity: loadedImages[image.src] ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </RealisationCard>
          ))}
        </RealisationsGrid>
        
        {visibleImages < realisationsImages.length && (
          <div style={{ textAlign: 'center', margin: '40px 0' }}>
            <StandardButton onClick={loadMoreImages}>
              Voir plus de réalisations
            </StandardButton>
          </div>
        )}
        
        {visibleImages === realisationsImages.length && (
          <div style={{ marginTop: '40px' }}>
            <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
              Vous souhaitez en voir plus ou discuter de votre projet ?
            </p>
            <ButtonWrapper style={{ justifyContent: 'center' }}>
              <StandardButton to="/contact" darkBackground={false}>
                Contactez-nous
              </StandardButton>
            </ButtonWrapper>
          </div>
        )}
        
        <ImageModal isOpen={isModalOpen} onClick={closeImageModal}>
          {selectedImage && (
            <ModalImage src={selectedImage.src} alt={selectedImage.alt} />
          )}
          <CloseButton onClick={closeImageModal} aria-label="Fermer l'image">&times;</CloseButton>
        </ImageModal>
      </GallerySection>
      
      <ContactSection />
    </PageContainer>
  );
};

export default RealisationsPage;
