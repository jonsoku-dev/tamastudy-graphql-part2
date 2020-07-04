const resolver = {
  Mutation: {
    editUser: (parent, { id, input }, { models }, info) => {
      let editedUser = {};
      models.userModel = models.userModel.map((user) => {
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
