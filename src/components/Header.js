import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const HeaderContainer = styled(({ isScrolled, ...rest }) => <header {...rest} />)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  height: ${props => props.isScrolled ? '60px' : '120px'};
  transform: ${props => props.isScrolled === 'hidden' ? 'translateY(-100%)' : 'translateY(0)'};
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    height: 60px;
    box-shadow: none;
    border-bottom: none;
  }
`;

const MainNav = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  padding: 0 20px;
`;

const LogoContainer = styled(({ isScrolled, ...rest }) => <div {...rest} />)`
  text-align: center;
  transition: all 0.4s ease;
  margin-bottom: ${props => props.isScrolled ? '0' : '20px'};
  
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const Logo = styled(({ isScrolled, ...rest }) => <Link {...rest} />)`
  font-size: ${props => props.isScrolled ? '24px' : '32px'};
  font-weight: bold;
  color: #333;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  letter-spacing: 1px;
  transition: all 0.4s ease;
  text-transform: uppercase;
`;

const NavLinks = styled(({ isScrolled, ...rest }) => <nav {...rest} />)`
  display: flex;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  transition: all 0.4s ease;
  opacity: ${props => props.isScrolled ? 0 : 1};
  max-height: ${props => props.isScrolled ? '0' : '50px'};
  overflow: hidden;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0 20px 15px;
  font-size: 14px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: 10px;
    left: 50%;
    background-color: #333;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover:after, &.active:after {
    width: 20px;
  }
`;

const MobileMenuButton = styled(({ isScrolled, ...rest }) => <button {...rest} />)`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: ${props => props.isScrolled ? '15px' : '30px'};
  transition: all 0.4s ease;
  color: #000;
  
  @media (max-width: 768px) {
    display: block;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background-color: white;
  padding: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  display: none;
  flex-direction: column;
  gap: 15px;
  z-index: 999;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  
  &.visible {
    display: flex;
    opacity: 1;
    animation: fadeIn 0.3s ease-in-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const MobileNavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  text-align: center;
`;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  useEffect(() => {
    const path = window.location.pathname;
    setActiveLink(path);
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth <= 768;
      
      // Sur mobile, on ne fait rien (pas d'effet de scroll)
      if (isMobile) {
        return;
      }
      
      // Sur desktop, effet de scroll normal
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrolled(true);
      } 
      else if (currentScrollY < lastScrollY) {
        setIsScrolled(false);
      }
      
      if (currentScrollY < 50) {
        setIsScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  // Effet séparé pour gérer le mode mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsScrolled(false);
      }
    };
    
    // Initialisation
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const handleLinkClick = (path) => {
    setActiveLink(path);
    // Ajouter un délai avant de fermer le menu mobile pour permettre à la page de se charger correctement
    setTimeout(() => {
      setMobileMenuOpen(false);
    }, 50);
  };
  
  return (
    <>
      <HeaderContainer isScrolled={isScrolled}>
        <MainNav>
          <LogoContainer isScrolled={isScrolled}>
            <Logo to="/" isScrolled={isScrolled}>SkyEvent</Logo>
          </LogoContainer>
          
          <NavLinks isScrolled={isScrolled}>
            <NavLink 
              to="/" 
              className={activeLink === '/' ? 'active' : ''}
              onClick={() => handleLinkClick('/')}
            >
              ACCUEIL
            </NavLink>
            <NavLink 
              to="/notre-histoire" 
              className={activeLink === '/notre-histoire' ? 'active' : ''}
              onClick={() => handleLinkClick('/notre-histoire')}
            >
              NOTRE HISTOIRE
            </NavLink>
            <NavLink 
              to="/evenementiel" 
              className={activeLink === '/evenementiel' ? 'active' : ''}
              onClick={() => handleLinkClick('/evenementiel')}
            >
              ÉVÈNEMENTIEL
            </NavLink>
            <NavLink 
              to="/realisations" 
              className={activeLink === '/realisations' ? 'active' : ''}
              onClick={() => handleLinkClick('/realisations')}
            >
              RÉALISATIONS
            </NavLink>
          </NavLinks>
          
          <MobileMenuButton isScrolled={isScrolled} onClick={toggleMobileMenu}>
            {mobileMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>
        </MainNav>
      </HeaderContainer>
      
      <MobileMenu 
        $isScrolled={isScrolled}
        className={mobileMenuOpen ? 'visible' : ''}
      >
        <MobileNavLink 
          to="/" 
          onClick={() => handleLinkClick('/')}
        >
          ACCUEIL
        </MobileNavLink>
        <MobileNavLink 
          to="/notre-histoire" 
          onClick={() => handleLinkClick('/notre-histoire')}
        >
          NOTRE HISTOIRE
        </MobileNavLink>
        <MobileNavLink 
          to="/evenementiel" 
          onClick={() => handleLinkClick('/evenementiel')}
        >
          ÉVÈNEMENTIEL
        </MobileNavLink>
        <MobileNavLink 
          to="/realisations" 
          onClick={() => handleLinkClick('/realisations')}
        >
          RÉALISATIONS
        </MobileNavLink>
      </MobileMenu>
    </>
  );
};

export default Header;
