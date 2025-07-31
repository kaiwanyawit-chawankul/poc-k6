// app.js or server.js
const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const config = require('./config.json'); // Load configuration from config.json
const app = express();

// Load SSL certificate and key
const sslOptions = {
  key: fs.readFileSync(path.join(__dirname, 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert.pem')),
};

// Basic route
app.get('/', (req, res) => {
  res.send('Hello HTTPS world!');
});

// Create HTTPS server
https.createServer(sslOptions, app).listen(config.port, () => {
  console.log(`HTTPS Server running on https://localhost${config.port}`); // Log the server start
});
