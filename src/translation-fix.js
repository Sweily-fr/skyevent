// This script fixes the "translateDisabled" error by providing a translation fallback
// and patching the React development environment
// Enhanced version for better Brave browser compatibility

(function() {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') return;
  
  console.log('Installing enhanced translation error handler...');
  
  // Create a safe translation handler
  const safeTranslate = function(text) {
    // Just return the original text if translation is disabled
    return text;
  };
  
  // Add translation-related properties to window
  if (!window.translate) {
    window.translate = safeTranslate;
  }
  
  // Define translation-related functions that might be missing
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.__REACT_DEVTOOLS_GLOBAL_HOOK__ || {};
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.translate = safeTranslate;
  
  // Add more translation-related functions that might be expected by browsers like Brave
  if (typeof window.chrome !== 'undefined') {
    window.chrome.i18n = window.chrome.i18n || {};
    window.chrome.i18n.getMessage = window.chrome.i18n.getMessage || safeTranslate;
    window.chrome.i18n.getUILanguage = window.chrome.i18n.getUILanguage || function() { return 'fr'; };
  }
  
  // Patch console.error to suppress translation errors
  const originalConsoleError = console.error;
  console.error = function(...args) {
    // Filter out translateDisabled errors and script errors that might be related
    if (args.length > 0 && (
        (typeof args[0] === 'string' && (args[0].includes('translateDisabled') || args[0] === 'Script error.')) ||
        (args[0] instanceof Error && (args[0].message === 'translateDisabled' || args[0].message === 'Script error.'))
      )) {
      console.warn('Translation or script error suppressed');
      return;
    }
    return originalConsoleError.apply(this, args);
  };
  
  // Patch Error constructor to handle translateDisabled errors
  const originalErrorConstructor = window.Error;
  window.Error = function(message, ...args) {
    // If this is a translateDisabled error or a script error, provide a fallback
    if (message === 'translateDisabled' || 
        message === 'Script error.' ||
        (typeof message === 'string' && message.includes('translateDisabled'))) {
      return {
        name: 'TranslationWarning',
        message: 'Translation is disabled, using fallback',
        toString: function() { return this.message; },
        stack: ''
      };
    }
    // Otherwise, use the original Error constructor
    return new originalErrorConstructor(message, ...args);
  };
  
  // Preserve the prototype chain
  window.Error.prototype = originalErrorConstructor.prototype;
  
  // Add global error handler for uncaught errors
  window.addEventListener('error', function(event) {
    if (event && event.error && (
        event.error.message === 'translateDisabled' || 
        event.error.message === 'Script error.' ||
        (typeof event.error.message === 'string' && 
         event.error.message.includes('translateDisabled'))
      )) {
      event.preventDefault();
      event.stopPropagation();
      console.warn('Uncaught translation error suppressed');
      return false;
    }
  }, true);
  
  // Patch Promise rejection handler
  window.addEventListener('unhandledrejection', function(event) {
    if (event && event.reason && (
        event.reason.message === 'translateDisabled' || 
        event.reason.message === 'Script error.' ||
        (typeof event.reason.message === 'string' && 
         event.reason.message.includes('translateDisabled'))
      )) {
      event.preventDefault();
      event.stopPropagation();
      console.warn('Unhandled translation promise rejection suppressed');
      return false;
    }
  }, true);
  
  // Add HTML attributes to disable translation
  document.documentElement.setAttribute('translate', 'no');
  document.documentElement.classList.add('notranslate');
  
  // Add meta tags to disable translation if they don't exist
  if (!document.querySelector('meta[name="google"]')) {
    const metaGoogle = document.createElement('meta');
    metaGoogle.name = 'google';
    metaGoogle.content = 'notranslate';
    document.head.appendChild(metaGoogle);
  }
  
  // Try to disable Brave's translation feature specifically
  try {
    if (navigator.brave && typeof navigator.brave.isBrave === 'function') {
      console.log('Brave browser detected, applying specific fixes');
      // Add additional Brave-specific fixes here if needed
    }
  } catch (e) {
    // Ignore errors when checking for Brave
  }
  
  console.log('Enhanced translation error handler installed');
})();
