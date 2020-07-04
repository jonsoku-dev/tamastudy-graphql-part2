const resolver = {
  Query: {
    getAllUsers: (parent, args, { models }, info) => {
      return models.userModel;
    },
  },
};

module.exports = resolver;
