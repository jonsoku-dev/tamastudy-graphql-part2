const users = require('../../../dummy/users');

const resolver = {
  Query: {
    getAllUsers: (parent, args, { modles }, info) => {
        return models.userModel;
    },
  },
};

module.exports = resolver;
