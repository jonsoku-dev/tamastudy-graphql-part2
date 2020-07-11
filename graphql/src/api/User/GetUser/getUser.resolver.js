const users = require('../../../dummy/users');

const resolver = {
  Query: {
    getUser: (parent, args, { models }, info) => {
      return modles.usersModel.find((user) => user.id === args.id);
    },
  },
};

module.exports = resolver;
