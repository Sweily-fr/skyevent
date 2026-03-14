import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import StandardButton from './StandardButton';

const SectionContainer = styled.section`
  padding: 100px 40px;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  display: block;
  width: 100%;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 1px;
    background-color: #d4af37;
  }
  
  @media (max-width: 768px) {
    padding: 60px 15px;
    display: block !important;
    visibility: visible !important;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem !important;
  text-align: center !important;
  margin-bottom: 20px !important;
  font-family: 'Cormorant Garamond', serif !important;
  font-weight: 400 !important;
  letter-spacing: 4px !important;
  text-transform: uppercase !important;
  position: relative !important;
  padding-bottom: 25px !important;
  line-height: 1.2 !important;
  color: #0a0a0a !important;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 1px;
    background-color: #d4af37;
  }

  @media (max-width: 768px) {
    font-size: 2rem !important;
    padding-bottom: 20px !important;
    margin-bottom: 15px !important;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px;
  color: #666;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    display: grid !important;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 50px;
  background-color: #fff;
  position: relative;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-family: 'Poppins', sans-serif;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  color: #444;
`;

const FormInput = styled.input`
  padding: 14px 0;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  border-radius: 0;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  letter-spacing: 0.5px;
  color: #1a1a1a;
  background-color: transparent;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-bottom-color: #000;
  }

  &::placeholder {
    color: #bbb;
    font-weight: 300;
  }
`;

const FormTextarea = styled.textarea`
  padding: 14px 0;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  border-radius: 0;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  letter-spacing: 0.5px;
  color: #1a1a1a;
  background-color: transparent;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-bottom-color: #000;
  }

  &::placeholder {
    color: #bbb;
    font-weight: 300;
  }
`;

const ButtonWrapper = styled.div`
  align-self: flex-start;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 50px;
  background-color: #0a0a0a;
  height: 100%;
  position: relative;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    transform: translateX(5px);
  }
`;

const InfoIcon = styled.div`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 4px;
  min-width: 30px;
  text-align: center;
  transition: all 0.3s ease;

  ${InfoItem}:hover & {
    transform: scale(1.1);
    color: rgba(255, 255, 255, 0.7);
  }
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 2px;
  color: #fff;
  text-transform: uppercase;
  font-family: 'Cormorant Garamond', serif;
`;

const InfoText = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.8;
  font-size: 1rem;
  font-weight: 300;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.3px;

  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background-color: #d4af37;
      transition: all 0.3s ease;
    }

    &:hover {
      color: #fff;

      &:after {
        width: 100%;
      }
    }
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: #e6f7e6;
  color: #2e7d32;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

// Composant optimisé pour mobile
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous implémenteriez la logique d'envoi du formulaire
    // Pour l'instant, on simule juste une soumission réussie
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      event: '',
      message: ''
    });
    
    // Réinitialiser le message de succès après 5 secondes
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  return (
    <SectionContainer id="contact-form-container">
      <SectionTitle>Contactez-nous pour un devis personnalisé</SectionTitle>
      <SectionSubtitle>
        Créez des moments inoubliables avec nos services traiteur sur-mesure. Que ce soit pour un mariage, 
        une réception privée ou un événement professionnel, nous vous accompagnons pour faire de votre projet une réussite totale.
      </SectionSubtitle>
      
      <ContactGrid>
        <ContactForm onSubmit={handleSubmit}>
          {formSubmitted && (
            <SuccessMessage
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Votre message a été envoyé avec succès. Nous vous contacterons très bientôt !
            </SuccessMessage>
          )}
          
          <FormGroup>
            <FormLabel htmlFor="name">Nom complet</FormLabel>
            <FormInput 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="phone">Téléphone</FormLabel>
            <FormInput 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="event">Type d'événement</FormLabel>
            <FormInput 
              type="text" 
              id="event" 
              name="event" 
              value={formData.event}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="message">Votre message</FormLabel>
            <FormTextarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          
          <ButtonWrapper>
            <StandardButton 
              as="button"
              type="submit"
              darkBackground={false}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demander un devis
            </StandardButton>
          </ButtonWrapper>
        </ContactForm>
        
        <ContactInfo>
          <InfoItem>
            <InfoIcon>📧</InfoIcon>
            <InfoContent>
              <InfoTitle>Email</InfoTitle>
              <InfoText>contact@skyevent.fr</InfoText>
            </InfoContent>
          </InfoItem>
          
          <InfoItem>
            <InfoIcon>📱</InfoIcon>
            <InfoContent>
              <InfoTitle>Téléphone</InfoTitle>
              <InfoText>+33 1 23 45 67 89</InfoText>
            </InfoContent>
          </InfoItem>
          
          <InfoItem>
            <InfoIcon>📍</InfoIcon>
            <InfoContent>
              <InfoTitle>Adresse</InfoTitle>
              <InfoText>123 Avenue des Champs-Élysées, 75008 Paris</InfoText>
            </InfoContent>
          </InfoItem>
          
          <InfoItem>
            <InfoIcon>⏰</InfoIcon>
            <InfoContent>
              <InfoTitle>Horaires</InfoTitle>
              <InfoText>Lundi - Vendredi: 9h - 18h</InfoText>
              <InfoText>Samedi: 10h - 16h</InfoText>
            </InfoContent>
          </InfoItem>
        </ContactInfo>
      </ContactGrid>
    </SectionContainer>
  );
};

export default ContactSection;
