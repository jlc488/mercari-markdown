const express = require('express')
const os = require('os')
const response = require('../utils/response')
const wikiItemRoute = require('./item/WikiItem.Route')

const routes = express.Router()

routes.use(response.setHeadersForCORS)
routes.use('/api/wiki', wikiItemRoute)

routes.get('/api/getUsername', (req, res) => {
  console.log('getusername')
  res.send({
  username: os.userInfo().username
})
}
)

routes.use((req, res) => {
  response.sendNotFound(res)
})

module.exports = routes
