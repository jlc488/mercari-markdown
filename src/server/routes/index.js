const express = require('express');

const response = require('../utils/response');
const itemRoute = require('./item/itemRoute');

const routes = express.Router();

routes.use(response.setHeadersForCORS);

routes.use('/api/item', itemRoute);

routes.get('/', (req, res) => {
  res.status(200).json({
    message: 'ok'
  });
});

routes.use((req, res) => {
  response.sendNotFound(res);
});

module.exports = routes;
