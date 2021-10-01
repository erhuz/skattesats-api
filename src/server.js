require('dotenv').config();
const express = require('express');
const logger = require('./logger');
const router = require('./routes');

const app = express();

// Use router
app.use('/', router);

// Catch all unknown routes and return 404
app.use((req, res, next) => {
  res.status(404).json('Not Found');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => logger.info(`Express server listening on port ${PORT}`));
