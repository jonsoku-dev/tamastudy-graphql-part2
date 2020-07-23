import { connect } from 'mongoose';
import env from '../config/env';

export default async () => {
  if (!env.MONGO_URI) {
    console.error('🤯 Please check your .env file!');
    process.exit(1);
  }
  try {
    connect(env.MONGO_URI, {
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
