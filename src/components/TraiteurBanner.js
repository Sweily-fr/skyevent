import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Placeholder image - à remplacer par votre propre image
const bannerImage = 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80';

const BannerContainer = styled.section`
  height: 100vh;
  min-height: 700px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;
  margin: 100px 0;
  
  @media (max-width: 768px) {
    min-height: 600px;
    margin: 80px 0;
  }
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
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
  z-index: 2;
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: left;
  max-width: 1400px;
  width: 100%;
  padding: 0 80px;
  margin-top: 100px;
  
  @media (max-width: 992px) {
    padding: 0 40px;
  }
  
  @media (max-width: 768px) {
    padding: 0 30px;
    margin-top: 80px;
    text-align: center;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const MainTitle = styled(motion.h1)`
  font-size: 5.5rem;
  font-weight: 300;
  margin: 0;
  font-family: 'Playfair Display', serif;
  line-height: 1.1;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  position: relative;
  display: inline-block;
  padding-bottom: 20px;
  margin-bottom: 20px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 2px;
    background-color: #d4af37;
  }
  
  @media (max-width: 1200px) {
    font-size: 4.5rem;
  }
  
  @media (max-width: 992px) {
    font-size: 4rem;
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
    text-align: center;
    
    &:after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }
`;

const SubTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 300;
  margin: 30px 0 0;
  font-family: 'Playfair Display', serif;
  line-height: 1.6;
  letter-spacing: 1px;
  color: #f0f0f0;
  max-width: 600px;
  
  @media (max-width: 1200px) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 992px) {
    font-size: 2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 30px auto 0;
    text-align: center;
    max-width: 500px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
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
