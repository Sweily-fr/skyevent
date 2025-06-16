import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Images des réalisations
const realisationImages = {
  realisation1: '/images/DSC05270.jpg',
  realisation2: '/images/DSC05381.jpg',
  realisation3: '/images/DSC05410.jpg',
  realisation4: '/images/DSC05415.jpg',
  realisation5: '/images/DSC05372.jpg',
  realisation6: '/images/DSC05355.jpg'
};

const SectionContainer = styled.section`
  padding: 100px 40px;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px;
  color: #666;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const RealisationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const RealisationCard = styled(motion.div)`
  position: relative;
  overflow: hidden;
  aspect-ratio: 1;
  border: 1px solid #f0f0f0;
  transition: all 0.4s ease;
  cursor: pointer;
  
  &:before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: -10px;
    bottom: -10px;
    border: 1px solid #d4af37;
    z-index: -1;
    opacity: 0;
    transition: all 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    
    &:before {
      opacity: 1;
    }
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
    transform: scale(1.1);
  }
`;

const RealisationOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  align-items: flex-end;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${RealisationCard}:hover & {
    opacity: 1;
  }
`;

const RealisationTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  
  ${RealisationCard}:hover & {
    transform: translateY(-5px);
  }
  font-family: 'Playfair Display', serif;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

const ViewAllButton = styled(Link)`
  display: block;
  width: fit-content;
  margin: 40px auto 0;
  background-color: #333;
  color: white;
  padding: 12px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #555;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const RealisationsSection = () => {
  const realisations = [
    {
      id: 'realisation1',
      title: 'Mariage élégant',
      image: realisationImages.realisation1,
      link: '/realisations/mariage-elegant'
    },
    {
      id: 'realisation2',
      title: 'Soirée d\'entreprise',
      image: realisationImages.realisation2,
      link: '/realisations/soiree-entreprise'
    },
    {
      id: 'realisation3',
      title: 'Anniversaire VIP',
      image: realisationImages.realisation3,
      link: '/realisations/anniversaire-vip'
    },
    {
      id: 'realisation4',
      title: 'Lancement de produit',
      image: realisationImages.realisation4,
      link: '/realisations/lancement-produit'
    },
    {
      id: 'realisation5',
      title: 'Baby shower chic',
      image: realisationImages.realisation5,
      link: '/realisations/baby-shower-chic'
    },
    {
      id: 'realisation6',
      title: 'Baptême traditionnel',
      image: realisationImages.realisation6,
      link: '/realisations/bapteme-traditionnel'
    }
  ];

  return (
    <SectionContainer>
      <SectionTitle>Découvrez nos plus belles réalisations</SectionTitle>
      <SectionSubtitle>
        Explorez notre galerie d'événements exceptionnels où l'art culinaire japonais rencontre l'élégance française
      </SectionSubtitle>
      
      <RealisationsGrid>
        {realisations.map((realisation, index) => (
          <RealisationCard
            key={realisation.id}
            as={Link}
            to={realisation.link}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <RealisationImage src={realisation.image} />
            <RealisationOverlay>
              <RealisationTitle>{realisation.title}</RealisationTitle>
            </RealisationOverlay>
          </RealisationCard>
        ))}
      </RealisationsGrid>
      
      <ViewAllButton to="/realisations">
        Voir toutes nos réalisations
      </ViewAllButton>
    </SectionContainer>
  );
};

export default RealisationsSection;
