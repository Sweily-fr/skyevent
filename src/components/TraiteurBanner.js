import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import StandardButton from './StandardButton';

// Image de bannière personnalisée
const bannerImage = '/images/DSC05331.jpg';

const BannerContainer = styled.section`
  height: 100vh;
  min-height: 700px;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: white;
  overflow: hidden;
  margin: 100px 0;
  
  @media (max-width: 768px) {
    min-height: 600px;
    margin: 80px 0;
    align-items: center;
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
  padding: 0 80px 100px 80px;
  margin-top: auto;
  
  @media (max-width: 992px) {
    padding: 0 40px;
  }
  
  @media (max-width: 768px) {
    padding: 0 30px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const MainTitle = styled(motion.h1)`
  font-size: 2.8rem;
  font-weight: 700;
  margin: 0 0 10px 0;
  font-family: 'Inter', sans-serif;
  color: #fff;
  letter-spacing: 3px;
  text-transform: uppercase;
  line-height: 1.2;
  max-width: 800px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  position: relative;
  display: block;
  
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
  font-size: 1.8rem;
  font-weight: 300;
  margin: 5px 0 0;
  font-family: 'Inter', sans-serif;
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

const ButtonWrapper = styled.div`
  margin-top: 15px;
  white-space: nowrap;
  
  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
    
    & > a {
      display: inline-block;
      padding: 8px 12px;
      font-size: 0.8rem;
      white-space: nowrap;
    }
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
            Services événementiels
          </SubTitle>
        </TitleContainer>
        <ButtonWrapper>
          <StandardButton
            to="/realisations"
            darkBackground={true}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Découvrir les événements
          </StandardButton>
        </ButtonWrapper>
      </BannerContent>
    </BannerContainer>
  );
};

export default TraiteurBanner;
