const path = require('path');
const { makeExecutableSchema } = require('graphql-tools');
const { mergeTypes, mergeResolvers, fileLoader } = require('merge-graphql-schemas');

const allTypes = fileLoader(path.join(__dirname, '/api/**/*.graphql'));

const allResolvers = fileLoader(path.join(__dirname, '/api/**/*.resolver.js'));

const mergedTypes = mergeTypes(allTypes);

const mergedResolvers = mergeResolvers(allResolvers);

const schema = makeExecutableSchema({
  typeDefs: mergedTypes,
  resolvers: mergedResolvers,
});

module.exports = schema;
