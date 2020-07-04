const resolver = {
  Query: {
    getUser: (parent, args, { models }, info) => {
      return models.userModel.find((user) => user.id === args.id);
    },
  },
};

module.exports = resolver;
