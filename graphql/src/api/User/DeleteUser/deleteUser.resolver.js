const resolver = {
  Mutation: {
    deleteUser: (parent, { id }, { models }, info) => {
      let deletedUser = {};
      models.userModel = models.userModel.filter((user) => {
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
