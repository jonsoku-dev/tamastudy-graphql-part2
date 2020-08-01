import { QueryFooArgs } from '../../../generated/graphql';

const resolvers = {
  Query: {
    Foo: (_: any, { id }: QueryFooArgs) => `$id : ${id}`,
  },
};

export default resolvers;
