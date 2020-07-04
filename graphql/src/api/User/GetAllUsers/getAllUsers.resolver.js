const users = require('../../../dummy/users');

const resolver = {
  Query: {
    getAllUsers: (parent, args, context, info) => {
      return users;
    },
  },
};

module.exports = resolver;
