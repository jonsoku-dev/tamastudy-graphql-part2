const users = require('../../../dummy/users');

const resolver = {
  Mutation: {
    editUser: (parent, { id, input }, { models }, info) => {
      let editedUser = {};
      models.userModel = users.map((user) => {
        if (user.id === id) {
          editedUser = {
            ...user,
            ...input,
          };
        }
        return user.id === id ? editedUser : user;
      });
      return editedUser;
    },
  },
};

module.exports = resolver;
