const resolver = {
  Mutation: {
    deleteUser: async (parent, { id }, { models }, info) => {
      try {
        const user = await models.userModel.findByIdAndDelete(id);

        if (!user) {
          throw Error('유저가 존재하지 않습니다');
        }

        return user;
      } catch (error) {
        throw Error(error);
      }
    },
  },
};

module.exports = resolver;
