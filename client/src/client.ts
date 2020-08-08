import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// @ts-ignore
import CLIENT_SCHEMA from './client/Client.graphql';
import { IsLoggedInDocument } from './generated/graphql';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = sessionStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  typeDefs: CLIENT_SCHEMA,
  resolvers: {},
});

cache.writeQuery({
  query: IsLoggedInDocument,
  data: {
    isLoggedIn: !!sessionStorage.getItem('token'),
  },
});

export default client;
