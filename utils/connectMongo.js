const mongoose = require('mongoose');

const connectDB = async () => {
  if (mongoose.connection.readyState === 0) {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI, {});
  } else {
  }
};

module.exports = connectDB;
