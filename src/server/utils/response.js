const sendCreated = (res, data) => res.status(201).send(data)

const sendBadRequest = (res, message) => res.status(400).send({
  success: false,
  message
})

const sendUnauthorized = (res, message) => res.status(401).send({
  success: false,
  message
})

const sendForbidden = res => res.status(403).send({
  success: false,
  message: 'You do not have rights to access this resource.'
})

const sendNotFound = res => res.status(404).send({
  success: false,
  message: 'Resource not found.'
})

const setHeadersForCORS = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-Access-Token, Content-Type, Accept')
  next()
}


module.exports = {
  setHeadersForCORS,
  sendBadRequest,
  sendCreated,
  sendForbidden,
  sendNotFound,
  sendUnauthorized
}
