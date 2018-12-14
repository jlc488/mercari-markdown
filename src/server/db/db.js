const mongoose = require('mongoose')

mongoose.Promise = require('bluebird')

mongoose.connect(`mongodb://${process.env.DB_HOST || 'localhost'}:27017/${process.env.DB}`, {
  useNewUrlParser: true
}).then(() => {
  console.log(`Succesfully Connected to the Mongodb Database..`)
})
.catch(() => {
  console.log(`Error Connecting to the Mongodb Database...`)
})

// mongoose.connect('mongodb://jlc488:97Queen$**@ds025792.mlab.com:25792/sinny_mongo_db', {
//   useNewUrlParser: true
// }).then(() => {
//   console.log(`Succesfully Connected to the Mongodb Database..`)
// })
// .catch(() => {
//     console.log(`Error Connecting to the Mongodb Database...`)
// })


// mongoose.connection.dropDatabase()

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
  console.log('connection with database succeeded')
})

exports.db = db
