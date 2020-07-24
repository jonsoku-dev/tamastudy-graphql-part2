import gql from 'graphql-tag';
import { ApolloCache } from 'apollo-cache';
import { Resolvers } from '@apollo/client';

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    cartItems: [ID!]!
  }

  extend type Launch {
    isInCart: Boolean!
  }

  extend type Mutation {
    addOrRemoveFromCart(id: ID!): [ID!]!
  }
`;

type ResolverFn = (parent: any, args: any, { cache }: { cache: ApolloCache<any> }) => any;

interface ResolverMap {
  [field: string]: ResolverFn;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppResolvers extends Resolvers {
  // We will update this with our app's resolvers later
}

export const resolvers = {};
