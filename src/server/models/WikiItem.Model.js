const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const ItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  creator: {
    type: String,
    required: true
  },
  updater: {
    type: String,
  },
  content: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date,
})

ItemSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('WikiItem', ItemSchema)
