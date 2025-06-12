import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionContainer = styled.section`
  padding: 80px 20px;
  background-color: #f8f8f8;
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  font-family: 'Playfair Display', serif;
`;

const TestimonialsWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding: 20px 0;
`;

const TestimonialsSlider = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${props => props.offset}px);
`;

const TestimonialCard = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  margin: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  min-width: calc(33.333% - 20px);
  
  @media (max-width: 992px) {
    min-width: calc(50% - 20px);
  }
  
  @media (max-width: 576px) {
    min-width: calc(100% - 20px);
  }
`;

const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: 20px;
  color: #666;
  line-height: 1.6;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  margin-right: 15px;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h4`
  margin: 0;
  font-weight: 600;
`;

const AuthorRole = styled.p`
  margin: 0;
  color: #999;
  font-size: 0.9rem;
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
`;

const SliderButton = styled.button`
  background-color: ${props => props.active ? '#333' : '#ddd'};
  border: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#333' : '#bbb'};
  }
`;

const TestimonialsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      text: "SkyEvent a transformé notre mariage en une expérience culinaire inoubliable. Les sushis étaient non seulement délicieux mais aussi présentés comme de véritables œuvres d'art. Nos invités en parlent encore !",
      author: "Sophie et Thomas",
      role: "Mariage à Paris",
      image: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 2,
      text: "Pour l'inauguration de notre nouvelle boutique, nous voulions marquer les esprits. SkyEvent a parfaitement compris notre vision et a créé un buffet qui reflétait l'identité de notre marque. Un service impeccable !",
      author: "Marie Dupont",
      role: "Directrice Marketing",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 3,
      text: "Notre baby shower a été un véritable succès grâce à SkyEvent. L'équipe a été attentive à nos besoins et a su s'adapter à nos demandes spécifiques. La qualité des produits et le professionnalisme sont au rendez-vous.",
      author: "Émilie Laurent",
      role: "Baby Shower",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 4,
      text: "Pour notre séminaire d'entreprise, SkyEvent a assuré un service traiteur d'exception. La variété et la qualité des sushis ont impressionné tous nos collaborateurs. Une collaboration que nous renouvellerons sans hésiter.",
      author: "Jean Moreau",
      role: "Directeur Général",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 5,
      text: "Pour mes 30 ans, je voulais quelque chose de spécial. SkyEvent a dépassé mes attentes avec un buffet de sushis personnalisé qui a fait sensation. Un grand merci pour cette soirée mémorable !",
      author: "Lucas Martin",
      role: "Anniversaire",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    }
  ];
  
  const slidesPerView = window.innerWidth > 992 ? 3 : window.innerWidth > 576 ? 2 : 1;
  const totalSlides = Math.ceil(testimonials.length / slidesPerView);
  
  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };
  
  const getSlideOffset = () => {
    const cardWidth = window.innerWidth > 992 ? 
      (window.innerWidth * 0.8) / 3 : 
      window.innerWidth > 576 ? 
        (window.innerWidth * 0.8) / 2 : 
        window.innerWidth * 0.8;
    
    return -activeSlide * cardWidth * slidesPerView;
  };
  
  return (
    <SectionContainer>
      <SectionContent>
        <SectionTitle>Ce que nos clients disent</SectionTitle>
        
        <TestimonialsWrapper>
          <TestimonialsSlider offset={getSlideOffset()}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <TestimonialText>"{testimonial.text}"</TestimonialText>
                <TestimonialAuthor>
                  <AuthorImage src={testimonial.image} />
                  <AuthorInfo>
                    <AuthorName>{testimonial.author}</AuthorName>
                    <AuthorRole>{testimonial.role}</AuthorRole>
                  </AuthorInfo>
                </TestimonialAuthor>
              </TestimonialCard>
            ))}
          </TestimonialsSlider>
        </TestimonialsWrapper>
        
        <SliderControls>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <SliderButton 
              key={index} 
              active={activeSlide === index}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </SliderControls>
      </SectionContent>
    </SectionContainer>
  );
};

export default TestimonialsSection;
