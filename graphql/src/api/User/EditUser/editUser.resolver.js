const resolver = {
  Mutation: {
    editUser: async (parent, { id, input }, { models }, info) => {
      try {
        const user = await models.userModel.findByIdAndUpdate(id, input, {
          new: true,
        });

        if (!user) {
          throw Error('존재하지 않는 유저입니다. ');
        }

        return user;
      } catch (error) {
        throw Error(error);
      }
    },
  },
};

module.exports = resolver;
