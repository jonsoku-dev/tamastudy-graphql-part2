import * as dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });

const checkEnv = <T extends string>(env: T): T => {
  if (env.length > 0) return env;
  else {
    console.log('🤯 Please check your .env file');
    process.exit(1);
  }
};

export default {
  PORT: checkEnv(process.env.SERVER_PORT || ''),
  MONGO_URI: checkEnv(process.env.SERVER_MONGO_URI || ''),
  JWT_SECRET: checkEnv(process.env.SERVER_JWT_SECRET || ''),
};
