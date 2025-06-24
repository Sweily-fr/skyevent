// Fichier spécifique pour corriger les problèmes de traduction dans Brave
// À inclure dans index.js

(function() {
  // Vérifier si nous sommes dans un environnement navigateur
  if (typeof window === 'undefined') return;
  
  console.log('Installation du correctif spécifique pour Brave...');
  
  // Détecter si nous sommes dans Brave
  const isBrave = () => {
    try {
      return navigator.brave && typeof navigator.brave.isBrave === 'function';
    } catch (e) {
      // Tester d'autres caractéristiques spécifiques à Brave
      return window.navigator.userAgent.includes('Brave');
    }
  };
  
  if (isBrave()) {
    console.log('Navigateur Brave détecté, application des correctifs spécifiques');
    
    // Désactiver les fonctionnalités de traduction de Brave
    document.documentElement.setAttribute('translate', 'no');
    document.documentElement.setAttribute('x-translate', 'no');
    document.documentElement.setAttribute('data-translate', 'no');
    
    // Ajouter un style pour désactiver les fonctionnalités de traduction
    const style = document.createElement('style');
    style.textContent = `
      .translate-tooltip, 
      .translation-notification, 
      [data-translation-element] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
    `;
    document.head.appendChild(style);
    
    // Intercepter les erreurs spécifiques à Brave
    window.addEventListener('error', function(event) {
      if (event && event.error && 
          (event.error.message === 'translateDisabled' || 
           event.error.message === 'Script error.' ||
           (typeof event.error.message === 'string' && 
            event.error.message.includes('translate')))) {
        event.preventDefault();
        event.stopPropagation();
        console.warn('Erreur de traduction Brave interceptée et supprimée');
        return false;
      }
    }, true);
    
    // Créer un objet de traduction fictif pour Brave
    window.braveTranslate = {
      isEnabled: false,
      enable: function() { return false; },
      disable: function() { return true; },
      translate: function(text) { return text; }
    };
    
    // Patch pour les fonctions de traduction manquantes
    if (typeof window.chrome !== 'undefined') {
      window.chrome.i18n = window.chrome.i18n || {};
      window.chrome.i18n.getMessage = window.chrome.i18n.getMessage || function(text) { return text; };
      window.chrome.i18n.getUILanguage = window.chrome.i18n.getUILanguage || function() { return 'fr'; };
      window.chrome.i18n.detectLanguage = window.chrome.i18n.detectLanguage || function() { 
        return { isReliable: true, languages: [{ language: 'fr', percentage: 100 }] };
      };
    }
  }
  
  console.log('Correctif pour Brave installé');
})();
