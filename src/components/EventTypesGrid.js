import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Placeholder images - à remplacer par vos propres images
const eventImages = {
  marque: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  entreprise: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  bapteme: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  babyShower: 'https://images.unsplash.com/photo-1554342872-034a06541948?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  anniversaire: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  mariage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
};

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
  max-width: 800px;
  margin: 0 auto 50px;
  color: #666;
  line-height: 1.6;
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
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 1;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const EventImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
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
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

const EventTypesGrid = () => {
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
            as={Link}
            to={event.link}
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
