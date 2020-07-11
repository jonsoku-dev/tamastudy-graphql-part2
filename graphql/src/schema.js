const path = require('path');
const { makeExecutableSchema } = require('graphql-tools');
const { mergeTypes, mergeResolvers, fileLoader } = require('merge-graphql-schemas');

const alltypes = fileLoader(path.join(__dirname, '/api/**/*.graphql'));

const allResolvers = fileLoader(path.join((__dirname, '/api/**/*.resolvers.js')));

const mergedtypes = mergeTypes(alltypes);

const mergedResolvers = mergeResolvers(allResolvers);

const schema = makeExecutableSchema({
    typeDefs: mergedtypes,
    resolvers: mergedResolvers,
});

module.exports = schema
