import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import 'reflect-metadata';
import mongoose from './db/mongoose';
import env from './config/env';
import schema from './schema';
import context from './context';
import formatError from './error/formatError';

const app = express();
mongoose();

const server = new ApolloServer({
  schema,
  context,
  formatError,
});

server.applyMiddleware({ app });

app.listen({ port: env.PORT }, () => {
  console.log(`🚀 Server ready and listening at ==> http://localhost:${env.PORT}${server.graphqlPath}`);
});
