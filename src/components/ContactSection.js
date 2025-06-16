import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import StandardButton from './StandardButton';

const SectionContainer = styled.section`
  padding: 100px 40px;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 40px;
  background-color: #fff;
  border: 1px solid #f0f0f0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  position: relative;
  
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
  
  &:hover:before {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  color: #444;
`;

const FormInput = styled.input`
  padding: 12px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 0;
  font-size: 1rem;
  font-family: 'Playfair Display', serif;
  letter-spacing: 0.5px;
  color: #333;
  background-color: #fafafa;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #d4af37;
    background-color: #fff;
    box-shadow: 0 0 0 1px #d4af37;
  }
  
  &::placeholder {
    color: #999;
    font-style: italic;
  }
`;

const FormTextarea = styled.textarea`
  padding: 12px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 0;
  font-size: 1rem;
  font-family: 'Playfair Display', serif;
  letter-spacing: 0.5px;
  color: #333;
  background-color: #fafafa;
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #d4af37;
    background-color: #fff;
    box-shadow: 0 0 0 1px #d4af37;
  }
  
  &::placeholder {
    color: #999;
    font-style: italic;
  }
`;

const ButtonWrapper = styled.div`
  align-self: flex-start;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 40px;
  background-color: #f9f9f9;
  height: 100%;
  border: 1px solid #f0f0f0;
  position: relative;
  
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
  
  &:hover:before {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
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
  color: #d4af37;
  margin-top: 4px;
  min-width: 30px;
  text-align: center;
  transition: all 0.3s ease;
  
  ${InfoItem}:hover & {
    transform: scale(1.1);
  }
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: #1a1a1a;
  text-transform: uppercase;
  font-family: 'Playfair Display', serif;
`;

const InfoText = styled.p`
  margin: 0;
  color: #666;
  line-height: 1.8;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.3px;
  
  a {
    color: #1a1a1a;
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
      color: #d4af37;
      
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
    <SectionContainer>
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
