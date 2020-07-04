const express = require('express');
const expressPlayground = require('graphql-playground-middleware-express').default;
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

let users = [
  {
    id: '1',
    username: 'jongseok',
    email: 'j@gmail.com',
  },
  {
    id: '2',
    username: 'gam',
    email: 'g@gmail.com',
  },
  {
    id: '3',
    username: 'ban',
    email: 'b@gmail.com',
  },
  {
    id: '4',
    username: 'cho',
    email: 'c@gmail.com',
  },
];

const schema = buildSchema(`
    type Query {
      getAllUsers: [User!]
      getUserById(id: ID!): User
    }
    type Mutation {
      createUser(input: CreateUserInput!): User
      editUser(id: ID!, input: EditUserInput!): User
      deleteUser(id: ID!): User
    }
    input CreateUserInput {
      username: String!
      email: String!
    }
    input EditUserInput {
      username: String
      email: String
    }
    type User {
      id: ID!
      username: String!
      email: String!
    }
    type Post {
      id: ID!
      text: String
    }
`);

let userId = 5;

const resolvers = {
  getAllUsers: () => {
    return users;
  },
  getUserById: (args, context, info) => {
    return users.find((user) => {
      return user.id === args.id;
    });
  },
  createUser: ({ input }, context, info) => {
    const newUser = {
      id: String(userId),
      username: input.username,
      email: input.email,
    };
    users.push(newUser);
    userId = userId + 1;
    return newUser;
  },
  editUser: ({ id, input }, context, info) => {
    let editedUser = {};
    users = users.map((user) => {
      if (user.id === id) {
        editedUser = {
          ...user,
          ...input,
        };
      }
      return user.id === id ? editedUser : user;
    });
    return editedUser;
  },
  deleteUser: ({ id }, context, info) => {
    let deletedUser = {};
    users = users.filter((user) => {
      if (user.id === id) {
        deletedUser = user;
      }
      return user.id !== id;
    });
    return deletedUser;
  },
};

app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
  }),
);

app.listen(4000, () => {
  console.log('PORT 4000');
});
