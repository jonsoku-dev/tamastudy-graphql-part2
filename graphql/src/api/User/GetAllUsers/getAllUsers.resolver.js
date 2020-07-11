const resolver = {
  Query: {
    getAllUsers: async (parent, args, { models }, info) => {
      try {
        const users = await models.userModel.find();
        return users;
      } catch (error) {
        throw Error(error);
      }
    },
  },
};

module.exports = resolver;
