export const typeDefs = [
  'type Query {\n  GetUser: String\n}\n\ntype RegisterResponse {\n  result: String\n}\n\ninput RegisterInput {\n  email: String!\n  username: String!\n  password: String!\n}\n\ntype Mutation {\n  Register(input: RegisterInput!): RegisterResponse\n}\n\ntype User {\n  _id: ID!\n  username: String!\n  email: String!\n  createdAt: String\n  updatedAt: String\n}\n',
];
/* tslint:disable */

export interface Query {
  GetUser: string | null;
}

export interface Mutation {
  Register: RegisterResponse | null;
}

export interface RegisterMutationArgs {
  input: RegisterInput;
}

export interface RegisterInput {
  email: string;
  username: string;
  password: string;
}

export interface RegisterResponse {
  result: string | null;
}

export interface User {
  _id: string;
  username: string;
  email: string;
  createdAt: string | null;
  updatedAt: string | null;
}
