const express = require('express');
const expressPlayground = require('graphql-playground-middleware-express').default;
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const userModel = require('./dummy/users');

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
  })),
);

app.listen(4000, () => {
  console.log('PORT 4000');
});
