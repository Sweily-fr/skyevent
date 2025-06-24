import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { createGlobalStyle } from 'styled-components';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import NotrHistoirePage from './pages/NotrHistoirePage';
import EvenementielPage from './pages/EvenementielPage';
import RealisationsPage from './pages/RealisationsPage';
import BabyShowerPage from './pages/occasions/BabyShowerPage';
import AnniversairePage from './pages/occasions/AnniversairePage';
import BaptemePage from './pages/occasions/BaptemePage';
import MariagePage from './pages/occasions/MariagePage';
import EntreprisePage from './pages/occasions/EntreprisePage';
import MarquePage from './pages/occasions/MarquePage';


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  /* Styles pour empêcher le défilement horizontal sans casser l'effet sticky */
  html, body {
    width: 100%;
    max-width: 100%;
    position: relative;
  }
  
  /* Styles spécifiques pour iOS */
  @supports (-webkit-touch-callout: none) {
    html, body {
      width: 100%;
      position: relative;
    }
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    color: #333;
    background-color: #fff;
    line-height: 1.5;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 600;
  }
  
  /* Fix pour les éléments qui pourraient causer un défilement horizontal */
  #root {
    width: 100%;
    max-width: 100%;
  }
`;

// Les styles de conteneur ont été déplacés vers le composant Layout

function App() {
  // Effet pour corriger le défilement horizontal sur iOS sans casser l'effet sticky
  React.useEffect(() => {
    // Détection des appareils iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                 (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    
    if (!isIOS) return; // Ne rien faire si ce n'est pas iOS
    
    // Solution complète pour iOS
    const fixIOSScroll = () => {
      // Technique 1: Ajuster la largeur du viewport sans overflow-x: hidden
      document.documentElement.style.width = '100%';
      document.documentElement.style.maxWidth = '100%';
      document.body.style.width = '100%';
      document.body.style.maxWidth = '100%';
      // Ne pas utiliser overflow-x: hidden sur les éléments parents pour préserver l'effet sticky
      
      // Technique 2: Définir la variable CSS vw pour iOS
      document.documentElement.style.setProperty('--vw', `${window.innerWidth}px`);
      
      // Technique 3: Ajuster les éléments sticky pour iOS
      const stickyElements = document.querySelectorAll('[style*="position: sticky"], [style*="position:sticky"]');
      stickyElements.forEach(el => {
        el.style.transform = 'translateZ(0)';
        el.style.willChange = 'transform';
        // Permettre aux éléments sticky de déborder sans causer de défilement horizontal
        el.style.overflow = 'visible';
      });
      
      // Technique 4: Traiter uniquement les conteneurs non-sticky sans affecter les parents des éléments sticky
      const nonStickyContainers = document.querySelectorAll('.non-sticky-container, .ios-fix-container');
      nonStickyContainers.forEach(el => {
        // Vérifier si cet élément ne contient pas d'éléments sticky
        const hasStickyChildren = el.querySelector('[style*="position: sticky"], [style*="position:sticky"]');
        if (!hasStickyChildren) {
          el.style.width = '100%';
          el.style.maxWidth = '100%';
        }
      });
    };
    
    // Appliquer immédiatement et lors des changements de taille
    fixIOSScroll();
    window.addEventListener('resize', fixIOSScroll);
    window.addEventListener('orientationchange', fixIOSScroll);
    
    // Appliquer également après un court délai pour s'assurer que tout est chargé
    const timeoutId = setTimeout(fixIOSScroll, 500);
    
    return () => {
      window.removeEventListener('resize', fixIOSScroll);
      window.removeEventListener('orientationchange', fixIOSScroll);
      clearTimeout(timeoutId);
    };
  }, []);
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalStyle />
      <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notre-histoire" element={<NotrHistoirePage />} />
            <Route path="/evenementiel" element={<EvenementielPage />} />
            <Route path="/realisations" element={<RealisationsPage />} />
            
            {/* Routes pour les pages d'occasions */}
            <Route path="/realisations/baby-shower" element={<BabyShowerPage />} />
            <Route path="/realisations/anniversaire" element={<AnniversairePage />} />
            <Route path="/realisations/bapteme" element={<BaptemePage />} />
            <Route path="/realisations/mariage" element={<MariagePage />} />
            <Route path="/realisations/evenements-dentreprise" element={<EntreprisePage />} />
            <Route path="/realisations/evenements-de-marque" element={<MarquePage />} />
          </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
