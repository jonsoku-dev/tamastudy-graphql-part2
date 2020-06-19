import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import 'reflect-metadata';
import mongoose from './db/mongoose';
import getErrorCode from './error/getErrorCode';
import schema from './schema';

const main = async () => {
  const server = new ApolloServer({
    schema,
    formatError: (err) => {
      const error = getErrorCode(err.message);
      return { message: error.message, statusCode: error.statusCode };
    },
  });

  const app = Express();

  server.applyMiddleware({ app });

  app.listen({ port: 3333 }, () => {
    console.log(
      `🚀 Server ready and listening at ==> http://localhost:3333${server.graphqlPath}`,
    );
  });
};

main()
  .then(() => {
    mongoose();
  })
  .catch((error) => {
    console.log(error, 'error!');
  });
