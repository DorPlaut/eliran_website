const moongose = require('mongoose');
// const { options } = require('../routes/tasks');

const connectDB = async () => {
  console.log('connectinng to DB..');
  return moongose.connect(process.env.MONGO_URI, {});
};

module.exports = connectDB;
