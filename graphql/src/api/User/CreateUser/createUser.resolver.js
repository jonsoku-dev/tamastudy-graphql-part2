const resolver = {
  Mutation: {
    createUser: async (parent, { input }, { models }, info) => {
      try {
        const existingUser = await models.userModel.findOne({ email: input.email });

        if (existingUser) {
          throw Error('email이 존재합니다.');
        }

        const newUser = await models.userModel.create(input);
        return newUser;
      } catch (error) {
        throw Error(error);
      }
    },
  },
};

module.exports = resolver;
