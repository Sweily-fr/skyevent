import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Images des différents types d'événements
const eventImages = {
  marque: '/images/DSC05297.jpg',
  entreprise: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  bapteme: '/images/DSC05354.jpg',
  babyShower: '/images/DSC05351.jpg',
  anniversaire: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  mariage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
};

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
  max-width: 800px;
  margin: 0 auto 60px;
  color: #666;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const EventCard = styled(motion.div)`
  position: relative;
  overflow: hidden;
  aspect-ratio: 1;
  border: 1px solid #f0f0f0;
  transition: all 0.4s ease;
  cursor: pointer;
  
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
  
  &:hover {
    transform: translateY(-5px);
    
    &:before {
      opacity: 1;
    }
  }
`;

const EventImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${props => `url(${props.src})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.5s ease;
  
  ${EventCard}:hover & {
    transform: scale(1.1);
  }
`;

const EventOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  align-items: flex-end;
  padding: 20px;
`;

const EventTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  
  ${EventCard}:hover & {
    transform: translateY(-5px);
  }
`;

const EventTypesGrid = () => {
  const navigate = useNavigate();
  
  const events = [
    {
      id: 'babyShower',
      title: 'Baby Shower',
      image: eventImages.babyShower,
      link: '/realisations/baby-shower'
    },
    {
      id: 'anniversaire',
      title: 'Anniversaire',
      image: eventImages.anniversaire,
      link: '/realisations/anniversaire'
    },
    {
      id: 'bapteme',
      title: 'Baptême',
      image: eventImages.bapteme,
      link: '/realisations/bapteme'
    },
    {
      id: 'mariage',
      title: 'Mariage',
      image: eventImages.mariage,
      link: '/realisations/mariage'
    },
    {
      id: 'entreprise',
      title: 'Évènement d\'entreprise',
      image: eventImages.entreprise,
      link: '/realisations/evenements-dentreprise'
    },
    {
      id: 'marque',
      title: 'Évènement de marque',
      image: eventImages.marque,
      link: '/realisations/evenements-de-marque'
    }
  ];

  return (
    <SectionContainer>
      <SectionTitle>Des sushis pour chaque occasion</SectionTitle>
      <SectionSubtitle>
        Parce que chaque événement est unique, notre service traiteur événementiel crée des expériences sur mesure, 
        alliant saveurs raffinées, présentation élégante et service impeccable. Mariages, anniversaires ou événements 
        professionnels, nous sublimons vos réceptions avec créativité et savoir-faire.
      </SectionSubtitle>
      
      <EventsGrid>
        {events.map((event, index) => (
          <EventCard
            key={event.id}
            onClick={() => {
              // Navigue sans forcer le défilement
              navigate(event.link, { 
                replace: true
              });
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <EventImage src={event.image} />
            <EventOverlay>
              <EventTitle>{event.title}</EventTitle>
            </EventOverlay>
          </EventCard>
        ))}
      </EventsGrid>
    </SectionContainer>
  );
};

export default EventTypesGrid;
