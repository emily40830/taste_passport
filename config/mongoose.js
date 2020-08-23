// import mongoose and set up db connection
const mongoose = require('mongoose');
const MONGODB_URL = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//set up db connection
const db = mongoose.connection;
db.on('error', () => {
  console.log('mongodb error!');
});
db.once('open', () => {
  console.log('mongodb connected!');
});
////

module.exports = db;
