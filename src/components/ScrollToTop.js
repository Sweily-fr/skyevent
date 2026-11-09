import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const getOffset = () => (window.innerWidth <= 768 ? 60 : 100);

const getAnchorTop = (element) =>
  element.getBoundingClientRect().top + window.scrollY - getOffset();

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    // Désactive le comportement de restauration de défilement du navigateur
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const cameFromOtherPage = previousPathname.current !== pathname;
    previousPathname.current = pathname;

    // Défilement instantané vers le haut
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }

    // Défilement vers une ancre (ex: /#contact)
    const id = decodeURIComponent(hash.slice(1));
    const timers = [];
    let cancelled = false;
    let attempts = 0;

    // Si l'utilisateur fait défiler lui-même, on arrête de corriger la position
    const stop = () => { cancelled = true; };
    const userEvents = ['wheel', 'touchstart', 'keydown'];
    userEvents.forEach((evt) => window.addEventListener(evt, stop, { passive: true }));

    const jumpToAnchor = () => {
      if (cancelled) return;
      const element = document.getElementById(id);
      if (element) {
        const top = getAnchorTop(element);
        if (Math.abs(window.scrollY - top) > 2) {
          window.scrollTo({ top, behavior: 'auto' });
        }
      }
    };

    const start = () => {
      const element = document.getElementById(id);
      if (!element) {
        // La page n'est peut-être pas encore rendue
        if (attempts++ < 40) timers.push(setTimeout(start, 50));
        return;
      }

      if (cameFromOtherPage) {
        // Arrivée depuis une autre page : la page se construit encore
        // (images, carrousel, animations), on se positionne directement sur
        // l'ancre puis on réajuste pendant que la mise en page se stabilise.
        jumpToAnchor();
        [100, 250, 500, 800, 1200, 1800].forEach((delay) => {
          timers.push(setTimeout(jumpToAnchor, delay));
        });
      } else {
        // Même page : défilement fluide
        window.scrollTo({ top: getAnchorTop(element), behavior: 'smooth' });
      }
    };

    start();

    return () => {
      timers.forEach(clearTimeout);
      userEvents.forEach((evt) => window.removeEventListener(evt, stop));
    };
  }, [pathname, hash, key]);

  return null;
}
