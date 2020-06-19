import { makeExecutableSchema } from 'graphql-tools';
import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';

// api폴더 안에 있는 모든 하위 폴더의
// .graphql 로 끝나는 파일을 모두 가져온다.
const allTypes: any = fileLoader(path.join(__dirname, './api/**/*.graphql'));

// api폴더 안에 있는 모든 하위 폴더의
// .resolvers.* 로 끝나는 파일을 모두 가져온다.
// * 을 하는 이유는 build한 후론 js가 될 것이기 때문에
const allResolvers: any = fileLoader(
  path.join(__dirname, './api/**/*.resolvers.*'),
);

const mergedTypes: any = mergeTypes(allTypes);
const mergedResolvers: any = mergeResolvers(allResolvers);

// makeExecutableSchema 가 하는 일은 schema 들을 하나로 합쳐주는 일을 한다.
const schema = makeExecutableSchema({
  typeDefs: mergedTypes,
  resolvers: mergedResolvers,
});

export default schema;
