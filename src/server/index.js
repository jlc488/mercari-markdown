/* eslint-disable no-unused-vars */
const express = require('express');
const os = require('os');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const db = require('./db/db');
const itemModel = require('./models/itemModel');
const routes = require('./routes');

const port = process.env.PORT || 8080;
const app = express();


app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) => res.send({
  username: os.userInfo().username
}));

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
