const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '.env') });
const express = require('express');
const expressPlayground = require('graphql-playground-middleware-express').default;
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const userModel = require('./entities/user.entity');

const mongoose = require('mongoose');

// env
const MONGO_URI = process.env.SERVER_MONGO_URI_LOCAL;
const PORT = process.env.SERVER_PORT;
if (!MONGO_URI || !PORT) {
  process.exit(1);
}

mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log('💎 DB connected');
  },
);

const app = express();

app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

app.use(
  '/graphql',
  graphqlHTTP((req) => ({
    schema,
    context: {
      models: {
        userModel,
      },
    },
    customFormatErrorFn: (error) => ({
      message: error.message,
    }),
  })),
);

app.listen(PORT, () => {
  console.log(`🚀 Server running at ${PORT}!`);
});
