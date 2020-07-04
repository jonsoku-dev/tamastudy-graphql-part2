let userId = 5;

const resolver = {
  Mutation: {
    createUser: (parent, { input }, { models }, info) => {
      const newUser = {
        id: String(userId),
        username: input.username,
        email: input.email,
      };
      models.userModel.push(newUser);
      userId = userId + 1;
      return newUser;
    },
  },
};

module.exports = resolver;
