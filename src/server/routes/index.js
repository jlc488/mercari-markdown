import express from 'express';

import response from '../utils/response';

const routes = express.Router();

routes.use(response.setHeadersForCORS);

routes.use('/', '');
