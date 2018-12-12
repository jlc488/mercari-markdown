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
  extended: {
    type: String,
    default: '{}',
    get(data) {
      try {
        return JSON.parse(data)
      } catch {
        return data
      }
    },
    set(data) {
      return JSON.stringify(data)
    },
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date,
}, {
  toJSON: {
    getters: true
  },
  toObject: {
    getters: true
  },
})

ItemSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('WikiItem', ItemSchema)
