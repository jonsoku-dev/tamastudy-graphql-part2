const users = require('../../../dummy/users');

const resolver = {
  Mutation: {
    deleteUser: (parent, { id }, context, info) => {
      let deletedUser = {};
      users = users.filter((user) => {
        if (user.id === id) {
          deletedUser = user;
        }
        return user.id !== id;
      });
      return deletedUser;
    },
  },
};

module.exports = resolver;
