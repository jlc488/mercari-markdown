const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

mongoose.Promise = require('bluebird')

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
  contents: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

ItemSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('WikiItem', ItemSchema)
