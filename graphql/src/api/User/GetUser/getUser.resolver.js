const resolver = {
  Query: {
    getUser: async (parent, { id }, { models }, info) => {
      try {
        const user = await models.userModel.findById(id);

        if (!user) {
          throw Error(`${id}에 해당하는 유저가 존재하지 않습니다. `);
        }

        return user;
      } catch (error) {
        throw Error(error);
      }
    },
  },
};

module.exports = resolver;
