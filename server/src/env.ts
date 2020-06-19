import * as dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });

export default {
  PORT: process.env.SERVER_PORT || '',
  MONGO_URI: process.env.SERVER_MONGO_URI || '',
};
