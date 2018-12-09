const mongoose = require('mongoose');


// mongoose.connect(`mongodb://${process.env.DB_HOST || 'localhost'}:28017/${process.env.DB}`, {
//   useNewUrlParser: true
// })
mongoose.connect(`mongodb://${process.env.DB_HOST || 'localhost'}:28017/${process.env.DB}`)
  .catch(console.log);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('connection with database succeeded');
});

exports.db = db;
