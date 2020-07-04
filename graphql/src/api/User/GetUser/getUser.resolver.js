const users = require('../../../dummy/users');

const resolver = {
  Query: {
    getUser: (parent, args, context, info) => {
      return users.find((user) => user.id === args.id);
    },
  },
};

module.exports = resolver;
