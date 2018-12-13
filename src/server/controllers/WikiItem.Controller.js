const response = require('../utils/response')
const wikiService = require('../services/WikiItem.Service')

async function list(req, res) {
  const offset = req.query.offset || 20
  const limit = req.query.limit || 10

  try{
    const ret = await wikiService.list({}, offset, limit)

    return res.json(ret.docs)
  }catch(err){
    return response.sendNotFound(res)
  }
}

async function create(req, res) {
  try{
    const ret = await wikiService.create(req.body)

    return response.sendCreated(res, ret)

  }catch(err){
    return response.sendBadRequest(res, err)
  }
}

async function read(req, res) {
  try{
    const ret = await wikiService.read(req.params.id)

    return res.json(ret)
  }catch(err){
    return response.sendNotFound(res)
  }
}

async function update(req, res) {
  try{
    const id = req.params.id
    const wiki = req.body
    const ret = await wikiService.update(id, wiki)

    return res.json(ret)
  }catch(err){
    return response.sendBadRequest(res, err)
  }
}

async function remove(req, res) {
  try{
    const id = req.params.id

    const ret = await wikiService.remove(id)

    return ret
  }catch(err){
    return response.sendBadRequest(res, err)
  }
}

module.exports = {
  list,
  create,
  read,
  update,
  remove
}
