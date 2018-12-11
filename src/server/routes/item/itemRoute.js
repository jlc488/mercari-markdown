const express = require('express')

const itemController = require('../../controllers/itemController')

const routes = express.Router({
  mergeParams: true
})

routes.route('/')
  .get(itemController.list)
  .post(itemController.create)

routes.route('/:id')
  .get(itemController.read)
  .put(itemController.update)

module.exports = routes
