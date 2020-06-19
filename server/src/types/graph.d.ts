export const typeDefs = ["type GetAllUsersResponse {\n  result: [User]\n}\n\ntype Query {\n  GetAllUsers: GetAllUsersResponse!\n  GetUser(_id: ID!): GetUserResponse\n}\n\ntype GetUserResponse {\n  result: User\n}\n\ntype User {\n  _id: ID!\n  username: String!\n  email: String!\n  createdAt: String!\n  updatedAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  GetAllUsers: GetAllUsersResponse;
  GetUser: GetUserResponse | null;
}

export interface GetUserQueryArgs {
  _id: string;
}

export interface GetAllUsersResponse {
  result: Array<User> | null;
}

export interface User {
  _id: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface GetUserResponse {
  result: User | null;
}
