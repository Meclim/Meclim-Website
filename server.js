const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist/meclim-website/browser')));

// Handle all routes to return the main index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/meclim-website/browser/index.html'));
});

// Start server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);});
