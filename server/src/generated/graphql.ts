import { GraphQLResolveInfo } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateCommentResponse = {
  __typename?: 'CreateCommentResponse';
  result: Comment;
};

export type CreateCommentInput = {
  desc: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateComment?: Maybe<CreateCommentResponse>;
  DeleteComment?: Maybe<DeleteCommentResponse>;
  EditComment?: Maybe<EditCommentResponse>;
  CreatePost?: Maybe<CreatePostResponse>;
  DeletePost?: Maybe<DeletePostResponse>;
  EditPost?: Maybe<EditPostResponse>;
  Login?: Maybe<LoginResponse>;
  Register?: Maybe<RegisterResponse>;
};

export type MutationCreateCommentArgs = {
  postId: Scalars['String'];
  input: CreateCommentInput;
};

export type MutationDeleteCommentArgs = {
  postId: Scalars['String'];
  commentId: Scalars['String'];
};

export type MutationEditCommentArgs = {
  postId: Scalars['String'];
  commentId: Scalars['String'];
  input: EditCommentInput;
};

export type MutationCreatePostArgs = {
  input: CreatePostInput;
};

export type MutationDeletePostArgs = {
  postId: Scalars['String'];
};

export type MutationEditPostArgs = {
  postId: Scalars['String'];
  input: EditPostInput;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationRegisterArgs = {
  input: RegisterInput;
};

export type DeleteCommentResponse = {
  __typename?: 'DeleteCommentResponse';
  result: Scalars['String'];
};

export type EditCommentResponse = {
  __typename?: 'EditCommentResponse';
  result: Comment;
};

export type EditCommentInput = {
  desc?: Maybe<Scalars['String']>;
};

export type GetCommentListResponse = {
  __typename?: 'GetCommentListResponse';
  result: Array<Comment>;
};

export type Query = {
  __typename?: 'Query';
  GetCommentList?: Maybe<GetCommentListResponse>;
  GetPost?: Maybe<GetPostResponse>;
  GetPostList?: Maybe<GetPostListResponse>;
  Foo?: Maybe<Scalars['String']>;
  GetUser: GetUserResponse;
};

export type QueryGetCommentListArgs = {
  postId: Scalars['String'];
};

export type QueryGetPostArgs = {
  postId: Scalars['String'];
};

export type QueryFooArgs = {
  id: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  _id: Scalars['String'];
  desc?: Maybe<Scalars['String']>;
  user?: Maybe<UserForComment>;
  postId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type UserForComment = {
  __typename?: 'UserForComment';
  _id: Scalars['String'];
  username: Scalars['String'];
};

export type CreatePostResponse = {
  __typename?: 'CreatePostResponse';
  result: Post;
};

export type CreatePostInput = {
  title: Scalars['String'];
  desc: Scalars['String'];
};

export type DeletePostResponse = {
  __typename?: 'DeletePostResponse';
  result: Post;
};

export type EditPostResponse = {
  __typename?: 'EditPostResponse';
  result: Post;
};

export type EditPostInput = {
  title?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
};

export type GetPostResponse = {
  __typename?: 'GetPostResponse';
  result: Post;
};

export type GetPostListResponse = {
  __typename?: 'GetPostListResponse';
  result?: Maybe<Array<Post>>;
};

export type Post = {
  __typename?: 'Post';
  _id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  view?: Maybe<Scalars['String']>;
  user?: Maybe<UserForPost>;
  comments?: Maybe<Array<Comment>>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type UserForPost = {
  __typename?: 'UserForPost';
  _id: Scalars['String'];
  username: Scalars['String'];
};

export type GetUserResponse = {
  __typename?: 'GetUserResponse';
  result: User;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  result: User;
};

export type RegisterInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (parent: TParent, context: TContext, info: GraphQLResolveInfo) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  CreateCommentResponse: ResolverTypeWrapper<CreateCommentResponse>;
  CreateCommentInput: CreateCommentInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  Mutation: ResolverTypeWrapper<{}>;
  DeleteCommentResponse: ResolverTypeWrapper<DeleteCommentResponse>;
  EditCommentResponse: ResolverTypeWrapper<EditCommentResponse>;
  EditCommentInput: EditCommentInput;
  GetCommentListResponse: ResolverTypeWrapper<GetCommentListResponse>;
  Query: ResolverTypeWrapper<{}>;
  Comment: ResolverTypeWrapper<Comment>;
  UserForComment: ResolverTypeWrapper<UserForComment>;
  CreatePostResponse: ResolverTypeWrapper<CreatePostResponse>;
  CreatePostInput: CreatePostInput;
  DeletePostResponse: ResolverTypeWrapper<DeletePostResponse>;
  EditPostResponse: ResolverTypeWrapper<EditPostResponse>;
  EditPostInput: EditPostInput;
  GetPostResponse: ResolverTypeWrapper<GetPostResponse>;
  GetPostListResponse: ResolverTypeWrapper<GetPostListResponse>;
  Post: ResolverTypeWrapper<Post>;
  UserForPost: ResolverTypeWrapper<UserForPost>;
  GetUserResponse: ResolverTypeWrapper<GetUserResponse>;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  LoginInput: LoginInput;
  RegisterResponse: ResolverTypeWrapper<RegisterResponse>;
  RegisterInput: RegisterInput;
  User: ResolverTypeWrapper<User>;
  AdditionalEntityFields: AdditionalEntityFields;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  CreateCommentResponse: CreateCommentResponse;
  CreateCommentInput: CreateCommentInput;
  String: Scalars['String'];
  Mutation: {};
  DeleteCommentResponse: DeleteCommentResponse;
  EditCommentResponse: EditCommentResponse;
  EditCommentInput: EditCommentInput;
  GetCommentListResponse: GetCommentListResponse;
  Query: {};
  Comment: Comment;
  UserForComment: UserForComment;
  CreatePostResponse: CreatePostResponse;
  CreatePostInput: CreatePostInput;
  DeletePostResponse: DeletePostResponse;
  EditPostResponse: EditPostResponse;
  EditPostInput: EditPostInput;
  GetPostResponse: GetPostResponse;
  GetPostListResponse: GetPostListResponse;
  Post: Post;
  UserForPost: UserForPost;
  GetUserResponse: GetUserResponse;
  LoginResponse: LoginResponse;
  LoginInput: LoginInput;
  RegisterResponse: RegisterResponse;
  RegisterInput: RegisterInput;
  User: User;
  AdditionalEntityFields: AdditionalEntityFields;
  Boolean: Scalars['Boolean'];
};

export type UnionDirectiveArgs = { discriminatorField?: Maybe<Scalars['String']>; additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>> };

export type UnionDirectiveResolver<Result, Parent, ContextType = any, Args = UnionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveArgs = { discriminatorField: Scalars['String']; additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>> };

export type AbstractEntityDirectiveResolver<Result, Parent, ContextType = any, Args = AbstractEntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = { embedded?: Maybe<Scalars['Boolean']>; additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>> };

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = { overrideType?: Maybe<Scalars['String']> };

export type ColumnDirectiveResolver<Result, Parent, ContextType = any, Args = ColumnDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = {};

export type IdDirectiveResolver<Result, Parent, ContextType = any, Args = IdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = { overrideType?: Maybe<Scalars['String']> };

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = LinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = {};

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = EmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = { path: Scalars['String'] };

export type MapDirectiveResolver<Result, Parent, ContextType = any, Args = MapDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CreateCommentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateCommentResponse'] = ResolversParentTypes['CreateCommentResponse']> = {
  result?: Resolver<ResolversTypes['Comment'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  CreateComment?: Resolver<Maybe<ResolversTypes['CreateCommentResponse']>, ParentType, ContextType, RequireFields<MutationCreateCommentArgs, 'postId' | 'input'>>;
  DeleteComment?: Resolver<Maybe<ResolversTypes['DeleteCommentResponse']>, ParentType, ContextType, RequireFields<MutationDeleteCommentArgs, 'postId' | 'commentId'>>;
  EditComment?: Resolver<Maybe<ResolversTypes['EditCommentResponse']>, ParentType, ContextType, RequireFields<MutationEditCommentArgs, 'postId' | 'commentId' | 'input'>>;
  CreatePost?: Resolver<Maybe<ResolversTypes['CreatePostResponse']>, ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'input'>>;
  DeletePost?: Resolver<Maybe<ResolversTypes['DeletePostResponse']>, ParentType, ContextType, RequireFields<MutationDeletePostArgs, 'postId'>>;
  EditPost?: Resolver<Maybe<ResolversTypes['EditPostResponse']>, ParentType, ContextType, RequireFields<MutationEditPostArgs, 'postId' | 'input'>>;
  Login?: Resolver<Maybe<ResolversTypes['LoginResponse']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  Register?: Resolver<Maybe<ResolversTypes['RegisterResponse']>, ParentType, ContextType, RequireFields<MutationRegisterArgs, 'input'>>;
};

export type DeleteCommentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteCommentResponse'] = ResolversParentTypes['DeleteCommentResponse']> = {
  result?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type EditCommentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditCommentResponse'] = ResolversParentTypes['EditCommentResponse']> = {
  result?: Resolver<ResolversTypes['Comment'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type GetCommentListResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetCommentListResponse'] = ResolversParentTypes['GetCommentListResponse']> = {
  result?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  GetCommentList?: Resolver<Maybe<ResolversTypes['GetCommentListResponse']>, ParentType, ContextType, RequireFields<QueryGetCommentListArgs, 'postId'>>;
  GetPost?: Resolver<Maybe<ResolversTypes['GetPostResponse']>, ParentType, ContextType, RequireFields<QueryGetPostArgs, 'postId'>>;
  GetPostList?: Resolver<Maybe<ResolversTypes['GetPostListResponse']>, ParentType, ContextType>;
  Foo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryFooArgs, 'id'>>;
  GetUser?: Resolver<ResolversTypes['GetUserResponse'], ParentType, ContextType>;
};

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  desc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['UserForComment']>, ParentType, ContextType>;
  postId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserForCommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserForComment'] = ResolversParentTypes['UserForComment']> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CreatePostResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreatePostResponse'] = ResolversParentTypes['CreatePostResponse']> = {
  result?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type DeletePostResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeletePostResponse'] = ResolversParentTypes['DeletePostResponse']> = {
  result?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type EditPostResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditPostResponse'] = ResolversParentTypes['EditPostResponse']> = {
  result?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type GetPostResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetPostResponse'] = ResolversParentTypes['GetPostResponse']> = {
  result?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type GetPostListResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetPostListResponse'] = ResolversParentTypes['GetPostListResponse']> = {
  result?: Resolver<Maybe<Array<ResolversTypes['Post']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  desc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  view?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['UserForPost']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<ResolversTypes['Comment']>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserForPostResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserForPost'] = ResolversParentTypes['UserForPost']> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type GetUserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetUserResponse'] = ResolversParentTypes['GetUserResponse']> = {
  result?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type LoginResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type RegisterResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisterResponse'] = ResolversParentTypes['RegisterResponse']> = {
  result?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  CreateCommentResponse?: CreateCommentResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  DeleteCommentResponse?: DeleteCommentResponseResolvers<ContextType>;
  EditCommentResponse?: EditCommentResponseResolvers<ContextType>;
  GetCommentListResponse?: GetCommentListResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  UserForComment?: UserForCommentResolvers<ContextType>;
  CreatePostResponse?: CreatePostResponseResolvers<ContextType>;
  DeletePostResponse?: DeletePostResponseResolvers<ContextType>;
  EditPostResponse?: EditPostResponseResolvers<ContextType>;
  GetPostResponse?: GetPostResponseResolvers<ContextType>;
  GetPostListResponse?: GetPostListResponseResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  UserForPost?: UserForPostResolvers<ContextType>;
  GetUserResponse?: GetUserResponseResolvers<ContextType>;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  RegisterResponse?: RegisterResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  union?: UnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  column?: ColumnDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  map?: MapDirectiveResolver<any, any, ContextType>;
};

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;
import { ObjectID } from 'mongodb';
export type CommentDbObject = {
  _id: ObjectID;
  desc?: Maybe<string>;
  user?: Maybe<UserForComment>;
  postId?: Maybe<string>;
  createdAt?: Maybe<string>;
  updatedAt?: Maybe<string>;
};

export type PostDbObject = {
  _id: ObjectID;
  title?: Maybe<string>;
  desc?: Maybe<string>;
  view?: Maybe<string>;
  user?: Maybe<UserForPost>;
  comments?: Maybe<Array<Comment>>;
  createdAt?: Maybe<string>;
  updatedAt?: Maybe<string>;
};

export type UserDbObject = {
  _id: ObjectID;
  username: string;
  email: string;
  password: string;
  createdAt?: Maybe<string>;
  updatedAt?: Maybe<string>;
};
