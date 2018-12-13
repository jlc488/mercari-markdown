/* eslint-disable no-unused-vars */
const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const db = require('./db/db')
const itemModel = require('./models/itemModel')
const routes = require('./routes')

const port = process.env.PORT || 8080
const app = express()


app.use(helmet())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

app.use('/', routes)

app.listen(port, () => console.log(`Listening on port ${port}`))

module.exports = app
