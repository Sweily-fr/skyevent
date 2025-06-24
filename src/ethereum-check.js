// This script safely checks for Ethereum provider and prevents errors
// when the provider is not available

// Execute this check when the script is loaded
(function() {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') return;
  
  // Create a safe getter for ethereum that won't throw errors
  let ethereumValue = null;
  
  // Define a safe ethereum object with default properties
  const safeEthereum = {
    selectedAddress: null,
    isConnected: function() { return false; },
    request: function() { 
      return Promise.reject(new Error('No Ethereum provider available')); 
    },
    on: function() {},
    removeListener: function() {}
  };
  
  // Override the ethereum property with a safe getter/setter
  try {
    // Save original ethereum if it exists
    if (window.ethereum) {
      ethereumValue = window.ethereum;
    } else {
      console.log('Ethereum provider not detected, creating a placeholder to prevent errors');
      ethereumValue = safeEthereum;
    }
    
    // Define a safe property that won't throw errors
    Object.defineProperty(window, 'ethereum', {
      get: function() {
        return ethereumValue;
      },
      set: function(newValue) {
        ethereumValue = newValue || safeEthereum;
      },
      configurable: true
    });
  } catch (error) {
    console.error('Failed to set up Ethereum safety checks:', error);
  }
})();
