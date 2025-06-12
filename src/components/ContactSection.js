import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionContainer = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 50px;
  color: #666;
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
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  margin-bottom: 8px;
  font-weight: 500;
`;

const FormInput = styled.input`
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #333;
  }
`;

const FormTextarea = styled.textarea`
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #333;
  }
`;

const FormButton = styled(motion.button)`
  background-color: #333;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  
  &:hover {
    background-color: #555;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
`;

const InfoIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const InfoContent = styled.div``;

const InfoTitle = styled.h3`
  margin: 0 0 5px 0;
  font-size: 1.2rem;
`;

const InfoText = styled.p`
  margin: 0;
  color: #666;
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
      <SectionTitle>Organisez votre évènement avec nous !</SectionTitle>
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
          
          <FormButton 
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Demander un devis
          </FormButton>
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
