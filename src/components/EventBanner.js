import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BannerContainer = styled.section.attrs(props => ({
  style: {
    backgroundImage: props.backgroundImage ? `url(${props.backgroundImage})` : 'none',
  },
}))`
  background-color: #1a1a1a;
  color: white;
  padding: 100px 20px;
  text-align: center;
  margin: 0;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.7) 50%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: 0;
  }
  
  @media (max-width: 768px) {
    padding: 80px 20px;
    background-attachment: scroll;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding: 0 20px;
`;

const Title = styled(motion.h2)`
  font-size: 3.5rem;
  margin: 0 auto 30px;
  font-family: 'Playfair Display', serif;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
  max-width: 900px;
  line-height: 1.2;
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
  
  @media (max-width: 992px) {
    font-size: 2.8rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    padding: 0 20px 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.8;
  font-weight: 300;
  letter-spacing: 0.5px;
  color: #f0f0f0;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0 20px;
  }
`;

const CtaButton = styled(motion(Link))`
  background-color: transparent;
  color: #ffffff;
  border: 1px solid #d4af37;
  padding: 16px 45px;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s ease;
  font-family: 'Playfair Display', serif;
  display: inline-block;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #d4af37;
    transition: all 0.4s ease;
    z-index: -1;
  }
  
  &:hover {
    color: #1a1a1a;
    
    &:before {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    padding: 14px 35px;
    font-size: 0.9rem;
  }
`;

const EventBanner = ({ title, subtitle, backgroundImage }) => {
  return (
    <BannerContainer backgroundImage={backgroundImage}>
      <ContentWrapper>
        <Title>{title || 'Organisez votre évènement avec nous !'}</Title>
        <Description>
          {subtitle || 'Découvrez nos services sur mesure pour faire de votre évènement un moment inoubliable. Notre équipe d\'experts est là pour vous accompagner à chaque étape.'}
        </Description>
        <CtaButton
          to="/#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Planifiez maintenant
        </CtaButton>
      </ContentWrapper>
    </BannerContainer>
  );
};

export default EventBanner;
