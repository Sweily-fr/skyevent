import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import StandardButton from './StandardButton';

// Version simplifiée et optimisée pour mobile
const SectionContainer = styled.section`
  padding: 40px 15px;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  display: block;
  width: 100%;
  background-color: #fff;
  
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
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem !important;
  text-align: center !important;
  margin-bottom: 10px !important;
  font-family: 'Inter', sans-serif !important;
  font-weight: 700 !important;
  letter-spacing: 2px !important;
  text-transform: uppercase !important;
  position: relative !important;
  padding-bottom: 10px !important;
  line-height: 1.3 !important;
  
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
`;

const SectionSubtitle = styled.p`
  font-size: 1rem;
  text-align: center;
  max-width: 100%;
  margin: 0 auto 20px;
  color: #666;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.5;
  padding: 0 5px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 15px;
  background-color: #fff;
  border: 1px solid #f0f0f0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);
  position: relative;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

const FormLabel = styled.label`
  font-family: 'Poppins', sans-serif;
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  color: #444;
`;

const FormInput = styled.input`
  padding: 10px 12px;
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
  padding: 10px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 0;
  font-size: 1rem;
  font-family: 'Playfair Display', serif;
  letter-spacing: 0.5px;
  color: #333;
  background-color: #fafafa;
  resize: vertical;
  min-height: 80px;
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
  align-self: center;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 25px 15px;
  background-color: #f9f9f9;
  border: 1px solid #f0f0f0;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const InfoIcon = styled.div`
  font-size: 1.3rem;
  color: #d4af37;
  margin-top: 2px;
  min-width: 25px;
  text-align: center;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoTitle = styled.h3`
  margin: 0 0 5px;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: #1a1a1a;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
`;

const InfoText = styled.p`
  margin: 0;
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
  font-weight: 300;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.3px;
  
  a {
    color: #1a1a1a;
    text-decoration: none;
    
    &:hover {
      color: #d4af37;
    }
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: #e6f7e6;
  color: #2e7d32;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 15px;
  font-size: 0.9rem;
`;

// Composant spécifique pour mobile
const MobileContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  return (
    <SectionContainer id="mobile-contact-form">
      <SectionTitle>Contactez-nous</SectionTitle>
      <SectionSubtitle>
        Nous sommes là pour faire de votre événement un moment inoubliable
      </SectionSubtitle>
      
      <ContactForm onSubmit={handleSubmit}>
        {formSubmitted && (
          <SuccessMessage
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Message envoyé avec succès !
          </SuccessMessage>
        )}
        
        <FormGroup>
          <FormLabel htmlFor="mobile-name">Nom complet</FormLabel>
          <FormInput 
            type="text" 
            id="mobile-name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </FormGroup>
        
        <FormGroup>
          <FormLabel htmlFor="mobile-email">Email</FormLabel>
          <FormInput 
            type="email" 
            id="mobile-email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </FormGroup>
        
        <FormGroup>
          <FormLabel htmlFor="mobile-phone">Téléphone</FormLabel>
          <FormInput 
            type="tel" 
            id="mobile-phone" 
            name="phone" 
            value={formData.phone}
            onChange={handleChange}
            required 
          />
        </FormGroup>
        
        <FormGroup>
          <FormLabel htmlFor="mobile-message">Votre message</FormLabel>
          <FormTextarea 
            id="mobile-message" 
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
            style={{ width: '100%', maxWidth: '250px' }}
          >
            Envoyer
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
      </ContactInfo>
    </SectionContainer>
  );
};

export default MobileContactSection;
