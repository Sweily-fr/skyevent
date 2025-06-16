import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Composant de bouton standardisé qui s'adapte au fond (clair ou sombre)
// Il prend en compte les propriétés suivantes:
// - to: lien de destination (si c'est un lien)
// - darkBackground: true si le fond est sombre, false si le fond est clair
// - small: true pour un bouton plus petit (padding et taille de police réduits)
// - as: élément HTML à utiliser (par défaut 'button')
// - children: contenu du bouton
// - ...props: autres propriétés à passer au bouton

// Conteneur pour aligner plusieurs boutons sur une seule ligne
export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const ButtonBase = styled(motion.div)`
  display: inline-block;
  padding: ${props => props.small ? '8px 20px' : '12px 30px'};
  text-decoration: none;
  font-weight: 300;
  letter-spacing: ${props => props.small ? '1px' : '2px'};
  text-transform: uppercase;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  font-family: 'Playfair Display', serif;
  background-color: transparent;
  font-size: ${props => props.small ? '0.85rem' : '1rem'};
  
  /* Style adaptatif selon le fond */
  color: ${props => props.darkBackground ? '#ffffff' : '#1a1a1a'};
  border: 1px solid ${props => props.darkBackground ? '#ffffff' : '#1a1a1a'};
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: ${props => props.darkBackground ? '#ffffff' : '#1a1a1a'};
    transition: all 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    color: ${props => props.darkBackground ? '#1a1a1a' : '#ffffff'};
    
    &:after {
      height: 100%;
    }
  }
`;

// Composant qui détermine si c'est un lien ou un bouton
const StandardButton = ({ to, darkBackground = false, small = false, as, children, ...props }) => {
  if (to) {
    return (
      <ButtonBase
        as={motion(Link)}
        to={to}
        darkBackground={darkBackground}
        small={small}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </ButtonBase>
    );
  }
  
  return (
    <ButtonBase
      as={as || 'button'}
      darkBackground={darkBackground}
      small={small}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};

export default StandardButton;
