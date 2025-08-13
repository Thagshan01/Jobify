import mongoose from "mongoose"

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI environment variable is not set');
    }

    mongoose.connection.on('connected', () => console.log('Database Connected'))
    mongoose.connection.on('error', (err) => console.log('Database Error:', err))
    mongoose.connection.on('disconnected', () => console.log('Database Disconnected'))

    // Set connection options with timeout
    const options = {
      serverSelectionTimeoutMS: 5000, // 5 second timeout
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
      minPoolSize: 1
    };

    await mongoose.connect(`${process.env.MONGODB_URI}/jobify`, options)
  } catch (error) {
    console.error('Database connection error:', error.message);
    throw error;
  }
};

export default connectDB;

