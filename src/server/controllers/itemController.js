import mongoose from 'mongoose';
import response from '../utils/response';
import request from '../utils/request';
import pagination from '../utils/pagination';

const ItemModel = mongoose.model('Item');

function list(req, res) {
  if (!req.currentUser.canRead(req.locals.user)) return response.sendForbidden(res);
  const query = Object.assign({
    owner: req.params.userId
  }, request.getFilteringOptions(req, ['name']));
  ItemModel.paginate(query, request.getRequestOptions(req), (err, result) => {
    if (err) return response.sendNotFound(res);
    pagination.setPaginationHeaders(res, result);
    res.json(result.docs);
  });
}

function create(req, res) {
  const user = req.locals;
  if (!req.currentUser.canEdit(user)) return response.sendForbidden(res);

  const item = new ItemModel(req.body);
  item.owner = user;
  item.save((err, item) => {
    if (err) return response.sendBadRequest(res, err);

    response.sendCreated(res, item);
  });
}

function read(req, res) {
  ItemModel.findById(req.params.id, (err, item) => {
    if (err) return response.sendNotFound(res);
    if (!req.currentUser.canRead(item)) return response.sendForbidden(res);
    res.json(item);
  });
}

function update(req, res) {
  ItemModel.findOneAndUpdate({
    _id: req.params.id
  }, req.body, {
    new: true
  }, (err, item) => {
    if (err) return response.sendBadRequest(res, err);
    if (!req.currentUser.canEdit(item)) return response.sendForbidden(res);
    res.json(item);
  });
}

module.exports = {
  list,
  create,
  read,
  update,
};
