import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Placeholder image - à remplacer par votre propre image
const bannerImage = 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80';

const BannerContainer = styled.section`
  height: 100vh;
  min-height: 600px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;
`;

const BannerImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: left;
  max-width: 1200px;
  width: 100%;
  padding: 0 40px;
  margin-top: 100px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
    margin-top: 80px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const MainTitle = styled(motion.h1)`
  font-size: 6rem;
  font-weight: 400;
  margin: 0;
  font-family: 'Playfair Display', serif;
  line-height: 1;
  letter-spacing: 2px;
  
  @media (max-width: 1024px) {
    font-size: 5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.8rem;
  }
`;

const SubTitle = styled(motion.h2)`
  font-size: 4rem;
  font-weight: 300;
  margin: 0;
  font-family: 'Playfair Display', serif;
  line-height: 1.2;
  letter-spacing: 1px;
  margin-top: 10px;
  
  @media (max-width: 1024px) {
    font-size: 3.2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const BannerButton = styled(motion(Link))`
  display: inline-block;
  background-color: transparent;
  color: white;
  padding: 15px 40px;
  border: 1px solid white;
  border-radius: 0;
  text-decoration: none;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  margin-top: 30px;
  
  &:hover {
    background-color: white;
    color: #333;
    transform: translateY(-3px);
  }
  
  @media (max-width: 768px) {
    padding: 12px 30px;
    font-size: 0.9rem;
  }
`;

const TraiteurBanner = () => {
  return (
    <BannerContainer>
      <BannerImage src={bannerImage} />
      <Overlay />
      <BannerContent>
        <TitleContainer>
          <MainTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Traiteur
          </MainTitle>
          <SubTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Services Événementiels
          </SubTitle>
        </TitleContainer>
        <BannerButton
          to="/realisations"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ letterSpacing: '2px' }}
          whileTap={{ scale: 0.98 }}
        >
          Découvrir les événements
        </BannerButton>
      </BannerContent>
    </BannerContainer>
  );
};

export default TraiteurBanner;
