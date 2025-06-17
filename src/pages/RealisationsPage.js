import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ContactSection from '../components/ContactSection';
import StandardButton from '../components/StandardButton';

// Liste des images des réalisations
const realisationsImages = [
  '/images/DSC05266.jpg',
  '/images/DSC05275.jpg',
  '/images/DSC05278.jpg',
  '/images/DSC05281.jpg',
  '/images/DSC05287-2.jpg',
  '/images/DSC05289.jpg',
  '/images/DSC05290.jpg',
  '/images/DSC05291.jpg',
  '/images/DSC05292.jpg',
  '/images/DSC05294.jpg',
  '/images/DSC05297.jpg',
  '/images/DSC05299.jpg',
  '/images/DSC05305.jpg',
  '/images/DSC05318.jpg',
  '/images/DSC05319.jpg',
  '/images/DSC05325.jpg',
  '/images/DSC05328.jpg',
  '/images/DSC05331.jpg',
  '/images/DSC05335.jpg',
  '/images/DSC05336.jpg',
  '/images/DSC05338.jpg',
  '/images/DSC05340.jpg',
  '/images/DSC05343.jpg',
  '/images/DSC05345.jpg',
  '/images/DSC05351.jpg',
  '/images/DSC05354.jpg',
  '/images/DSC05361.jpg',
  '/images/DSC05363.jpg',
  '/images/DSC05372.jpg',
  '/images/DSC05386.jpg',
  '/images/DSC05388.jpg',
  '/images/DSC05391.jpg',
  '/images/DSC05395.jpg',
  '/images/DSC05396.jpg',
  '/images/DSC05400.jpg',
  '/images/DSC05435.jpg'
];

const PageContainer = styled.div`
  min-height: 100vh;
  font-family: 'Playfair Display', serif;
  color: #1a1a1a;
  background-color: #ffffff; /* Fond blanc */
  overflow-x: hidden;
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
  font-family: 'Playfair Display', serif;
  font-weight: 300;
  letter-spacing: 3px;
  margin-bottom: 20px;
  color: #ffffff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeroDescription = styled.p`
  max-width: 800px;
  margin: 0 auto 30px;
  font-size: 1.2rem;
  line-height: 1.8;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const GallerySection = styled.section`
  padding: 60px 5%;
  max-width: 1600px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background-color: #1a1a1a;
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
  transition: all 0.4s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const RealisationImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
  
  ${RealisationCard}:hover & {
    transform: scale(1.05);
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
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
    document.title = 'Nos réalisations - SkyEvent';
  }, []);
  
  const [visibleImages, setVisibleImages] = useState(9); // Nombre d'images initialement visibles
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const gridRef = useRef(null);
  
  // Fonction pour charger plus d'images
  const loadMoreImages = () => {
    setVisibleImages(prev => Math.min(prev + 6, realisationsImages.length));
  };
  
  // Ouvrir l'image en modal
  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
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
          {realisationsImages.slice(0, visibleImages).map((imageSrc, index) => (
            <RealisationCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index % 6 * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              onClick={() => openImageModal(imageSrc)}
            >
              <RealisationImage src={imageSrc} />
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
          <CloseButton onClick={closeImageModal}>×</CloseButton>
          {selectedImage && <ModalImage src={selectedImage} />}
        </ImageModal>
      </GallerySection>
      
      <ContactSection />
    </PageContainer>
  );
};

export default RealisationsPage;
