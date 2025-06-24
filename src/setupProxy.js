// This file is automatically detected by react-scripts and used to configure the development server

module.exports = function(app) {
  // Add headers to disable browser translation features
  app.use(function(req, res, next) {
    // Disable content language detection
    res.setHeader('Content-Language', 'fr');
    // Disable translation
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    // Prevent automatic translation
    res.setHeader('X-No-Translation', 'true');
    next();
  });
};
