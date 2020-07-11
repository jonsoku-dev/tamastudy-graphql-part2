const users = require('../../../dummy/users');

let userId = 5;

const resolver = {
  Mutation: {
    createUser: (parent, { input }, context, info) => {
      const newUser = {
        id: String(userId),
        username: input.username,
        email: input.email,
      };
      users.push(newUser);
      userId = userId + 1;
      return newUser;
    },
  },
};

module.exports = resolver;
