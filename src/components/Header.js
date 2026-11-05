import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const MOBILE_LINKS = [
  { to: '/', label: 'Accueil', isActive: ({ pathname, hash }) => pathname === '/' && hash !== '#contact' },
  { to: '/notre-histoire', label: 'Notre histoire', isActive: ({ pathname }) => pathname === '/notre-histoire' },
  { to: '/realisations', label: 'Réalisations', isActive: ({ pathname }) => pathname.startsWith('/realisations') },
  { to: '/#contact', label: 'Prise de contact', isActive: ({ hash }) => hash === '#contact' },
];

const menuVariants = {
  closed: { opacity: 0, transition: { duration: 0.2 } },
  open: { opacity: 1, transition: { duration: 0.25, staggerChildren: 0.06, delayChildren: 0.05 } },
};

const menuItemVariants = {
  closed: { opacity: 0, y: 14 },
  open: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

const HeaderContainer = styled(({ isScrolled, ...rest }) => <header {...rest} />)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
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
  font-weight: 500;
  color: #000;
  text-decoration: none;
  font-family: 'Cormorant Garamond', serif;
  letter-spacing: 3px;
  transition: all 0.4s ease;
  text-transform: uppercase;
`;

const NavLinks = styled(({ isScrolled, ...rest }) => <nav {...rest} />)`
  display: flex;
  font-family: 'Cormorant Garamond', serif;
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
  color: #1a1a1a;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0 20px 15px;
  font-size: 13px;
  position: relative;
  font-family: 'Poppins', sans-serif;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: 10px;
    left: 50%;
    background-color: #000;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover:after, &.active:after {
    width: 20px;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  width: 44px;
  height: 44px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 8px;
  color: #000;
  -webkit-tap-highlight-color: transparent;

  @media (max-width: 768px) {
    display: block;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const MenuIconBar = styled.span`
  position: absolute;
  left: 11px;
  width: 22px;
  height: 1.5px;
  background-color: currentColor;
  transition: transform 0.3s ease, opacity 0.2s ease;

  &:nth-child(1) {
    top: 15px;
    transform: ${props => props.$open ? 'translateY(6.5px) rotate(45deg)' : 'none'};
  }

  &:nth-child(2) {
    top: 21.5px;
    opacity: ${props => props.$open ? 0 : 1};
  }

  &:nth-child(3) {
    top: 28px;
    transform: ${props => props.$open ? 'translateY(-6.5px) rotate(-45deg)' : 'none'};
  }
`;

// Le body n'est pas verrouillé (overflow) pour ne pas interférer avec les correctifs iOS :
// touch-action empêche la page de défiler derrière le menu.
const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 16px 24px calc(24px + env(safe-area-inset-bottom));
  background-color: white;
  z-index: 999;
  overflow-y: auto;
  overscroll-behavior: contain;
  touch-action: none;

  /* Écrans très bas (mobile à l'horizontale) : le contenu doit pouvoir défiler */
  @media (max-height: 560px) {
    touch-action: pan-y;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavList = styled.nav`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const MobileNavLink = styled(Link)`
  display: inline-block;
  position: relative;
  padding: 10px 4px;
  text-decoration: none;
  color: #1a1a1a;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
  font-size: clamp(1.7rem, 8vw, 2.2rem);
  letter-spacing: 1px;
  text-align: center;
  -webkit-tap-highlight-color: transparent;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 4px;
    width: ${props => props.$active ? '32px' : '0'};
    height: 1px;
    background-color: #d4af37;
    transform: translateX(-50%);
  }
`;

const MobileMenuContact = styled(motion.div)`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding-top: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);

  a {
    padding: 4px;
    color: #555;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    font-weight: 300;
    text-decoration: none;
  }

  a.instagram {
    margin-top: 4px;
    color: #1a1a1a;
    font-size: 1.25rem;
  }
`;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

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
              to="/realisations" 
              className={activeLink === '/realisations' ? 'active' : ''}
              onClick={() => handleLinkClick('/realisations')}
            >
              RÉALISATIONS
            </NavLink>
            <NavLink 
              to="/#contact" 
              className={activeLink === '/#contact' ? 'active' : ''}
              onClick={() => handleLinkClick('/#contact')}
            >
              PRISE DE CONTACT
            </NavLink>
          </NavLinks>
          
          <MobileMenuButton
            type="button"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileMenuOpen}
          >
            <MenuIconBar $open={mobileMenuOpen} />
            <MenuIconBar $open={mobileMenuOpen} />
            <MenuIconBar $open={mobileMenuOpen} />
          </MobileMenuButton>
        </MainNav>
      </HeaderContainer>

      <MotionConfig reducedMotion="user">
        <AnimatePresence>
          {mobileMenuOpen && (
            <MobileMenu
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <MobileNavList aria-label="Menu principal">
                {MOBILE_LINKS.map(({ to, label, isActive }) => {
                  const active = isActive(location);
                  return (
                    <motion.div key={to} variants={menuItemVariants}>
                      <MobileNavLink
                        to={to}
                        $active={active}
                        aria-current={active ? 'page' : undefined}
                        onClick={() => handleLinkClick(to)}
                      >
                        {label}
                      </MobileNavLink>
                    </motion.div>
                  );
                })}
              </MobileNavList>

              <MobileMenuContact variants={menuItemVariants}>
                <a href="tel:+33679159615">06 79 15 96 15</a>
                <a href="mailto:skyevent.fr@hotmail.com">skyevent.fr@hotmail.com</a>
                <a
                  className="instagram"
                  href="https://www.instagram.com/skyevent.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </MobileMenuContact>
            </MobileMenu>
          )}
        </AnimatePresence>
      </MotionConfig>
    </>
  );
};

export default Header;
