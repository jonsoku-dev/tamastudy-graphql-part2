import mongoose from 'mongoose';
import env from '../config/env';

export default async () => {
  // mongoose.set('debug', true);
  if (!env.MONGO_URI) {
    console.error('🤯 Please check your .env file!');
    process.exit(1);
  }
  try {
    mongoose.connect(env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('😇 Connected Mongo Database');
  } catch (error) {
    console.error(error, '🤬 Error Database!');
    process.exit(1);
  }
};
