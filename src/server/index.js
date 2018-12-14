/* eslint-disable no-unused-vars */
const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const routes = require('./routes')
const db = require('./db/db')
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

app.use('/', routes)
console.log('server index')
app.listen(port, () => console.log(`Listening on port ${port}`))

module.exports = app
