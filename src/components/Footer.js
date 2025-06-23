import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  padding: 60px 0 30px;
  margin-top: 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
`;

const FooterLink = styled(Link)`
  color: #666;
  text-decoration: none;
  margin-bottom: 10px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #333;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #333;
  color: white;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #555;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  color: #666;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>SkyEvent</FooterTitle>
          <FooterLink to="/">Accueil</FooterLink>
          <FooterLink to="/notre-histoire">Notre histoire</FooterLink>
          <FooterLink to="/evenementiel">Évènementiel</FooterLink>
          <FooterLink to="/realisations">Réalisations</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Nos Services</FooterTitle>
          <FooterLink to="/realisations/evenements-de-marque">Évènements de marque</FooterLink>
          <FooterLink to="/realisations/evenements-dentreprise">Évènements d'entreprise</FooterLink>
          <FooterLink to="/realisations/bapteme">Baptême</FooterLink>
          <FooterLink to="/realisations/baby-shower">Baby Shower</FooterLink>
          <FooterLink to="/realisations/anniversaire">Anniversaire</FooterLink>
          <FooterLink to="/realisations/mariage">Mariage</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterLink as="a" href="mailto:contact@skyevent.fr">contact@skyevent.fr</FooterLink>
          <SocialLinks>
            <SocialIcon href="https://www.instagram.com/skyevent.fr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        © {new Date().getFullYear()} SkyEvent. Tous droits réservés.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
