import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  background-color: #0a0a0a;
  padding: 80px 0 40px;
  margin-top: 0;
  color: #fff;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  padding: 0 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 25px;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #fff;
`;

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  margin-bottom: 12px;
  transition: color 0.3s ease;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 0.5px;

  &:hover {
    color: #fff;
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
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;

  &:hover {
    border-color: #fff;
    color: #fff;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding-top: 40px;
  margin-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.35);
  font-size: 13px;
  letter-spacing: 0.5px;
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
