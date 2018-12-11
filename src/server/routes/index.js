const express = require('express')
const os = require('os')
const response = require('../utils/response')
const itemRoute = require('./item/itemRoute')

const routes = express.Router()

routes.use(response.setHeadersForCORS)

routes.use('/api/wiki', itemRoute)

routes.get('/api/getUsername', (req, res) => res.send({
  username: os.userInfo().username
}))

routes.get('/', (req, res) => {
  res.status(200).json({
    message: 'ok'
  })
})

routes.use((req, res) => {
  response.sendNotFound(res)
})

module.exports = routes
