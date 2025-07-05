const mongoose = require('mongoose'); // or import mongoose from 'mongoose';
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // <- This part!
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

export default connectDB; // or module.exports = connectDB;
