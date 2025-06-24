import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import EventBanner from './EventBanner';
import { BANNER_TITLE, BANNER_SUBTITLE, BANNER_BACKGROUND } from '../utils/constants';

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  position: relative;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 120px; /* Hauteur du header par défaut */
  width: 100%;
  max-width: 100%;
  position: relative;
  
  @media (max-width: 768px) {
    padding-top: 60px; /* Ajustement pour mobile - correspond exactement à la hauteur de la navbar */
  }
`;

// Composant de mise en page partagé pour toutes les pages
const Layout = ({ children, showBanner = true }) => {
  // Effet pour corriger le défilement horizontal sur iOS sans casser l'effet sticky
  React.useEffect(() => {
    const fixIOSScroll = () => {
      // Forcer la largeur correcte sur tous les éléments parents
      const elements = [document.documentElement, document.body, document.getElementById('root')];
      elements.forEach(el => {
        if (el) {
          el.style.width = '100%';
          el.style.maxWidth = '100%';
          // Ne pas utiliser overflowX: hidden pour préserver l'effet sticky
        }
      });
    };
    
    fixIOSScroll();
    window.addEventListener('resize', fixIOSScroll);
    window.addEventListener('orientationchange', fixIOSScroll);
    
    return () => {
      window.removeEventListener('resize', fixIOSScroll);
      window.removeEventListener('orientationchange', fixIOSScroll);
    };
  }, []);
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        {children}
      </MainContent>
      {showBanner && (
        <EventBanner 
          title={BANNER_TITLE}
          subtitle={BANNER_SUBTITLE}
          backgroundImage={BANNER_BACKGROUND}
        />
      )}
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
