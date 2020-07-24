import { ApolloClient, gql, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createHttpLink } from '@apollo/client';
import { resolvers, typeDefs } from '../resolvers';

const isDev = process.env.NODE_ENV === 'development';
if (isDev) {
  console.log('DEVELOP MODE');
}

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('loginToken');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const httpLink = createHttpLink({
  uri: '/graphql',
});

const cache = new InMemoryCache();

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link: authLink.concat(httpLink),
  typeDefs,
  resolvers,
});

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

cache.writeQuery({
  query: IS_LOGGED_IN,
  data: {
    isLoggedIn: !!localStorage.getItem('loginToken'),
  },
});

export default client;
