const functions = require('@google-cloud/functions-framework');
const fs = require('fs');
const path = require('path');

// MIME type mapping
const MIME_TYPES = {
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8'
};

// Cache duration (1 year for immutable assets)
const CACHE_CONTROL = 'public, max-age=31536000, immutable';

functions.http('serveWidget', (req, res) => {
  // CORS headers
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  // Parse requested file path
  let filePath = req.path === '/' ? '/widget.js' : req.path;
  filePath = filePath.replace(/^\//, ''); // Remove leading slash

  // Security: prevent directory traversal
  if (filePath.includes('..')) {
    res.status(403).send('Forbidden');
    return;
  }

  // Whitelist allowed files
  const allowedFiles = [
    'widget.js',
    'widget.css',
    'config.js',
    'landing-page.js',
    'chat-window.js',
    'channel-detail.js'
  ];

  if (!allowedFiles.includes(filePath)) {
    res.status(404).send('Not Found');
    return;
  }

  // Read and serve file
  const fullPath = path.join(__dirname, '..', filePath);
  const ext = path.extname(filePath);

  fs.readFile(fullPath, (err, data) => {
    if (err) {
      res.status(404).send('File not found');
      return;
    }

    res.set('Content-Type', MIME_TYPES[ext] || 'application/octet-stream');
    res.set('Cache-Control', CACHE_CONTROL);
    res.status(200).send(data);
  });
});
