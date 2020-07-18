export const typeDefs = [
  'type GetUserResponse {\n  result: String\n}\n\ntype Query {\n  GetUser: GetUserResponse\n}\n\ntype LoginResponse {\n  token: String!\n}\n\ninput LoginInput {\n  email: String!\n  password: String!\n}\n\ntype Mutation {\n  Login(input: LoginInput!): LoginResponse\n  Register(input: RegisterInput!): RegisterResponse\n}\n\ntype RegisterResponse {\n  result: String\n}\n\ninput RegisterInput {\n  email: String!\n  username: String!\n  password: String!\n}\n\ntype User {\n  _id: ID!\n  username: String!\n  email: String!\n  createdAt: String\n  updatedAt: String\n}\n',
];
/* tslint:disable */

export interface Query {
  GetUser: GetUserResponse | null;
}

export interface GetUserResponse {
  result: string | null;
}

export interface Mutation {
  Login: LoginResponse | null;
  Register: RegisterResponse | null;
}

export interface LoginMutationArgs {
  input: LoginInput;
}

export interface RegisterMutationArgs {
  input: RegisterInput;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
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
