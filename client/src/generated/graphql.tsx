import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};


export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
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
  Foo?: Maybe<Scalars['String']>;
  GetCommentList?: Maybe<GetCommentListResponse>;
  GetPost?: Maybe<GetPostResponse>;
  GetPostList?: Maybe<GetPostListResponse>;
  GetUser: GetUserResponse;
  isLoggedIn: Scalars['Boolean'];
};


export type QueryFooArgs = {
  id: Scalars['String'];
};


export type QueryGetCommentListArgs = {
  postId: Scalars['String'];
};


export type QueryGetPostArgs = {
  postId: Scalars['String'];
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

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { GetUser: (
    { __typename?: 'GetUserResponse' }
    & { result: (
      { __typename?: 'User' }
      & Pick<User, 'email'>
    ) }
  ) }
);

export type IsLoggedInQueryVariables = Exact<{ [key: string]: never; }>;


export type IsLoggedInQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'isLoggedIn'>
);

export type DeleteCommentMutationVariables = Exact<{
  postId: Scalars['String'];
  commentId: Scalars['String'];
}>;


export type DeleteCommentMutation = (
  { __typename?: 'Mutation' }
  & { DeleteComment?: Maybe<(
    { __typename?: 'DeleteCommentResponse' }
    & Pick<DeleteCommentResponse, 'result'>
  )> }
);

export type EditCommentMutationVariables = Exact<{
  postId: Scalars['String'];
  commentId: Scalars['String'];
  input: EditCommentInput;
}>;


export type EditCommentMutation = (
  { __typename?: 'Mutation' }
  & { EditComment?: Maybe<(
    { __typename?: 'EditCommentResponse' }
    & { result: (
      { __typename?: 'Comment' }
      & Pick<Comment, '_id' | 'desc' | 'postId' | 'createdAt' | 'updatedAt'>
      & { user?: Maybe<(
        { __typename?: 'UserForComment' }
        & Pick<UserForComment, '_id' | 'username'>
      )> }
    ) }
  )> }
);

export type CreateCommentMutationVariables = Exact<{
  postId: Scalars['String'];
  input: CreateCommentInput;
}>;


export type CreateCommentMutation = (
  { __typename?: 'Mutation' }
  & { CreateComment?: Maybe<(
    { __typename?: 'CreateCommentResponse' }
    & { result: (
      { __typename?: 'Comment' }
      & Pick<Comment, '_id' | 'desc' | 'postId'>
    ) }
  )> }
);

export type GetCommentListQueryVariables = Exact<{
  postId: Scalars['String'];
}>;


export type GetCommentListQuery = (
  { __typename?: 'Query' }
  & { GetCommentList?: Maybe<(
    { __typename?: 'GetCommentListResponse' }
    & { result: Array<(
      { __typename?: 'Comment' }
      & Pick<Comment, '_id' | 'desc' | 'createdAt' | 'updatedAt'>
      & { user?: Maybe<(
        { __typename?: 'UserForComment' }
        & Pick<UserForComment, '_id' | 'username'>
      )> }
    )> }
  )> }
);

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { Login?: Maybe<(
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'token'>
  )> }
);

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { Register?: Maybe<(
    { __typename?: 'RegisterResponse' }
    & { result: (
      { __typename?: 'User' }
      & Pick<User, 'email' | 'username' | 'createdAt' | 'updatedAt'>
    ) }
  )> }
);

export type CreatePostMutationVariables = Exact<{
  input: CreatePostInput;
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { CreatePost?: Maybe<(
    { __typename?: 'CreatePostResponse' }
    & { result: (
      { __typename?: 'Post' }
      & Pick<Post, '_id' | 'title' | 'desc' | 'view' | 'createdAt' | 'updatedAt'>
      & { user?: Maybe<(
        { __typename?: 'UserForPost' }
        & Pick<UserForPost, '_id' | 'username'>
      )> }
    ) }
  )> }
);

export type EditPostMutationVariables = Exact<{
  postId: Scalars['String'];
  input: EditPostInput;
}>;


export type EditPostMutation = (
  { __typename?: 'Mutation' }
  & { EditPost?: Maybe<(
    { __typename?: 'EditPostResponse' }
    & { result: (
      { __typename?: 'Post' }
      & Pick<Post, '_id' | 'title' | 'desc' | 'view' | 'createdAt' | 'updatedAt'>
      & { user?: Maybe<(
        { __typename?: 'UserForPost' }
        & Pick<UserForPost, '_id' | 'username'>
      )> }
    ) }
  )> }
);

export type GetPostQueryVariables = Exact<{
  postId: Scalars['String'];
}>;


export type GetPostQuery = (
  { __typename?: 'Query' }
  & { GetPost?: Maybe<(
    { __typename?: 'GetPostResponse' }
    & { result: (
      { __typename?: 'Post' }
      & Pick<Post, '_id' | 'title' | 'desc' | 'view' | 'createdAt' | 'updatedAt'>
      & { user?: Maybe<(
        { __typename?: 'UserForPost' }
        & Pick<UserForPost, '_id' | 'username'>
      )> }
    ) }
  )> }
);

export type GetPostListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostListQuery = (
  { __typename?: 'Query' }
  & { GetPostList?: Maybe<(
    { __typename?: 'GetPostListResponse' }
    & { result?: Maybe<Array<(
      { __typename?: 'Post' }
      & Pick<Post, '_id' | 'title' | 'desc' | 'view' | 'createdAt' | 'updatedAt'>
      & { user?: Maybe<(
        { __typename?: 'UserForPost' }
        & Pick<UserForPost, '_id' | 'username'>
      )> }
    )>> }
  )> }
);


export const GetUserDocument = gql`
    query GetUser {
  GetUser {
    result {
      email
    }
  }
}
    `;
export type GetUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetUserQuery, GetUserQueryVariables>, 'query'>;

    export const GetUserComponent = (props: GetUserComponentProps) => (
      <ApolloReactComponents.Query<GetUserQuery, GetUserQueryVariables> query={GetUserDocument} {...props} />
    );
    
export type GetUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetUserQuery, GetUserQueryVariables>
    } & TChildProps;
export function withGetUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetUserQuery,
  GetUserQueryVariables,
  GetUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetUserQuery, GetUserQueryVariables, GetUserProps<TChildProps, TDataName>>(GetUserDocument, {
      alias: 'getUser',
      ...operationOptions
    });
};
export type GetUserQueryResult = ApolloReactCommon.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const IsLoggedInDocument = gql`
    query IsLoggedIn {
  isLoggedIn @client
}
    `;
export type IsLoggedInComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<IsLoggedInQuery, IsLoggedInQueryVariables>, 'query'>;

    export const IsLoggedInComponent = (props: IsLoggedInComponentProps) => (
      <ApolloReactComponents.Query<IsLoggedInQuery, IsLoggedInQueryVariables> query={IsLoggedInDocument} {...props} />
    );
    
export type IsLoggedInProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<IsLoggedInQuery, IsLoggedInQueryVariables>
    } & TChildProps;
export function withIsLoggedIn<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IsLoggedInQuery,
  IsLoggedInQueryVariables,
  IsLoggedInProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, IsLoggedInQuery, IsLoggedInQueryVariables, IsLoggedInProps<TChildProps, TDataName>>(IsLoggedInDocument, {
      alias: 'isLoggedIn',
      ...operationOptions
    });
};
export type IsLoggedInQueryResult = ApolloReactCommon.QueryResult<IsLoggedInQuery, IsLoggedInQueryVariables>;
export const DeleteCommentDocument = gql`
    mutation DeleteComment($postId: String!, $commentId: String!) {
  DeleteComment(postId: $postId, commentId: $commentId) {
    result
  }
}
    `;
export type DeleteCommentMutationFn = ApolloReactCommon.MutationFunction<DeleteCommentMutation, DeleteCommentMutationVariables>;
export type DeleteCommentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteCommentMutation, DeleteCommentMutationVariables>, 'mutation'>;

    export const DeleteCommentComponent = (props: DeleteCommentComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteCommentMutation, DeleteCommentMutationVariables> mutation={DeleteCommentDocument} {...props} />
    );
    
export type DeleteCommentProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<DeleteCommentMutation, DeleteCommentMutationVariables>
    } & TChildProps;
export function withDeleteComment<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteCommentMutation,
  DeleteCommentMutationVariables,
  DeleteCommentProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteCommentMutation, DeleteCommentMutationVariables, DeleteCommentProps<TChildProps, TDataName>>(DeleteCommentDocument, {
      alias: 'deleteComment',
      ...operationOptions
    });
};
export type DeleteCommentMutationResult = ApolloReactCommon.MutationResult<DeleteCommentMutation>;
export type DeleteCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const EditCommentDocument = gql`
    mutation EditComment($postId: String!, $commentId: String!, $input: EditCommentInput!) {
  EditComment(postId: $postId, commentId: $commentId, input: $input) {
    result {
      _id
      desc
      user {
        _id
        username
      }
      postId
      createdAt
      updatedAt
    }
  }
}
    `;
export type EditCommentMutationFn = ApolloReactCommon.MutationFunction<EditCommentMutation, EditCommentMutationVariables>;
export type EditCommentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<EditCommentMutation, EditCommentMutationVariables>, 'mutation'>;

    export const EditCommentComponent = (props: EditCommentComponentProps) => (
      <ApolloReactComponents.Mutation<EditCommentMutation, EditCommentMutationVariables> mutation={EditCommentDocument} {...props} />
    );
    
export type EditCommentProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<EditCommentMutation, EditCommentMutationVariables>
    } & TChildProps;
export function withEditComment<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditCommentMutation,
  EditCommentMutationVariables,
  EditCommentProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, EditCommentMutation, EditCommentMutationVariables, EditCommentProps<TChildProps, TDataName>>(EditCommentDocument, {
      alias: 'editComment',
      ...operationOptions
    });
};
export type EditCommentMutationResult = ApolloReactCommon.MutationResult<EditCommentMutation>;
export type EditCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<EditCommentMutation, EditCommentMutationVariables>;
export const CreateCommentDocument = gql`
    mutation CreateComment($postId: String!, $input: CreateCommentInput!) {
  CreateComment(postId: $postId, input: $input) {
    result {
      _id
      desc
      postId
    }
  }
}
    `;
export type CreateCommentMutationFn = ApolloReactCommon.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;
export type CreateCommentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateCommentMutation, CreateCommentMutationVariables>, 'mutation'>;

    export const CreateCommentComponent = (props: CreateCommentComponentProps) => (
      <ApolloReactComponents.Mutation<CreateCommentMutation, CreateCommentMutationVariables> mutation={CreateCommentDocument} {...props} />
    );
    
export type CreateCommentProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>
    } & TChildProps;
export function withCreateComment<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateCommentMutation,
  CreateCommentMutationVariables,
  CreateCommentProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateCommentMutation, CreateCommentMutationVariables, CreateCommentProps<TChildProps, TDataName>>(CreateCommentDocument, {
      alias: 'createComment',
      ...operationOptions
    });
};
export type CreateCommentMutationResult = ApolloReactCommon.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const GetCommentListDocument = gql`
    query GetCommentList($postId: String!) {
  GetCommentList(postId: $postId) {
    result {
      _id
      desc
      user {
        _id
        username
      }
      createdAt
      updatedAt
    }
  }
}
    `;
export type GetCommentListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetCommentListQuery, GetCommentListQueryVariables>, 'query'> & ({ variables: GetCommentListQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetCommentListComponent = (props: GetCommentListComponentProps) => (
      <ApolloReactComponents.Query<GetCommentListQuery, GetCommentListQueryVariables> query={GetCommentListDocument} {...props} />
    );
    
export type GetCommentListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetCommentListQuery, GetCommentListQueryVariables>
    } & TChildProps;
export function withGetCommentList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetCommentListQuery,
  GetCommentListQueryVariables,
  GetCommentListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetCommentListQuery, GetCommentListQueryVariables, GetCommentListProps<TChildProps, TDataName>>(GetCommentListDocument, {
      alias: 'getCommentList',
      ...operationOptions
    });
};
export type GetCommentListQueryResult = ApolloReactCommon.QueryResult<GetCommentListQuery, GetCommentListQueryVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  Login(input: $input) {
    token
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    
export type LoginProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>
    } & TChildProps;
export function withLogin<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginMutation,
  LoginMutationVariables,
  LoginProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, LoginMutation, LoginMutationVariables, LoginProps<TChildProps, TDataName>>(LoginDocument, {
      alias: 'login',
      ...operationOptions
    });
};
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($input: RegisterInput!) {
  Register(input: $input) {
    result {
      email
      username
      createdAt
      updatedAt
    }
  }
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;
export type RegisterComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RegisterMutation, RegisterMutationVariables>, 'mutation'>;

    export const RegisterComponent = (props: RegisterComponentProps) => (
      <ApolloReactComponents.Mutation<RegisterMutation, RegisterMutationVariables> mutation={RegisterDocument} {...props} />
    );
    
export type RegisterProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>
    } & TChildProps;
export function withRegister<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RegisterMutation,
  RegisterMutationVariables,
  RegisterProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, RegisterMutation, RegisterMutationVariables, RegisterProps<TChildProps, TDataName>>(RegisterDocument, {
      alias: 'register',
      ...operationOptions
    });
};
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CreatePostDocument = gql`
    mutation CreatePost($input: CreatePostInput!) {
  CreatePost(input: $input) {
    result {
      _id
      title
      desc
      view
      user {
        _id
        username
      }
      createdAt
      updatedAt
    }
  }
}
    `;
export type CreatePostMutationFn = ApolloReactCommon.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;
export type CreatePostComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreatePostMutation, CreatePostMutationVariables>, 'mutation'>;

    export const CreatePostComponent = (props: CreatePostComponentProps) => (
      <ApolloReactComponents.Mutation<CreatePostMutation, CreatePostMutationVariables> mutation={CreatePostDocument} {...props} />
    );
    
export type CreatePostProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreatePostMutation, CreatePostMutationVariables>
    } & TChildProps;
export function withCreatePost<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreatePostMutation,
  CreatePostMutationVariables,
  CreatePostProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreatePostMutation, CreatePostMutationVariables, CreatePostProps<TChildProps, TDataName>>(CreatePostDocument, {
      alias: 'createPost',
      ...operationOptions
    });
};
export type CreatePostMutationResult = ApolloReactCommon.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const EditPostDocument = gql`
    mutation EditPost($postId: String!, $input: EditPostInput!) {
  EditPost(postId: $postId, input: $input) {
    result {
      _id
      title
      desc
      view
      user {
        _id
        username
      }
      createdAt
      updatedAt
    }
  }
}
    `;
export type EditPostMutationFn = ApolloReactCommon.MutationFunction<EditPostMutation, EditPostMutationVariables>;
export type EditPostComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<EditPostMutation, EditPostMutationVariables>, 'mutation'>;

    export const EditPostComponent = (props: EditPostComponentProps) => (
      <ApolloReactComponents.Mutation<EditPostMutation, EditPostMutationVariables> mutation={EditPostDocument} {...props} />
    );
    
export type EditPostProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<EditPostMutation, EditPostMutationVariables>
    } & TChildProps;
export function withEditPost<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditPostMutation,
  EditPostMutationVariables,
  EditPostProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, EditPostMutation, EditPostMutationVariables, EditPostProps<TChildProps, TDataName>>(EditPostDocument, {
      alias: 'editPost',
      ...operationOptions
    });
};
export type EditPostMutationResult = ApolloReactCommon.MutationResult<EditPostMutation>;
export type EditPostMutationOptions = ApolloReactCommon.BaseMutationOptions<EditPostMutation, EditPostMutationVariables>;
export const GetPostDocument = gql`
    query GetPost($postId: String!) {
  GetPost(postId: $postId) {
    result {
      _id
      title
      desc
      view
      user {
        _id
        username
      }
      createdAt
      updatedAt
    }
  }
}
    `;
export type GetPostComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPostQuery, GetPostQueryVariables>, 'query'> & ({ variables: GetPostQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetPostComponent = (props: GetPostComponentProps) => (
      <ApolloReactComponents.Query<GetPostQuery, GetPostQueryVariables> query={GetPostDocument} {...props} />
    );
    
export type GetPostProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPostQuery, GetPostQueryVariables>
    } & TChildProps;
export function withGetPost<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPostQuery,
  GetPostQueryVariables,
  GetPostProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPostQuery, GetPostQueryVariables, GetPostProps<TChildProps, TDataName>>(GetPostDocument, {
      alias: 'getPost',
      ...operationOptions
    });
};
export type GetPostQueryResult = ApolloReactCommon.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const GetPostListDocument = gql`
    query GetPostList {
  GetPostList {
    result {
      _id
      title
      desc
      view
      user {
        _id
        username
      }
      createdAt
      updatedAt
    }
  }
}
    `;
export type GetPostListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPostListQuery, GetPostListQueryVariables>, 'query'>;

    export const GetPostListComponent = (props: GetPostListComponentProps) => (
      <ApolloReactComponents.Query<GetPostListQuery, GetPostListQueryVariables> query={GetPostListDocument} {...props} />
    );
    
export type GetPostListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPostListQuery, GetPostListQueryVariables>
    } & TChildProps;
export function withGetPostList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPostListQuery,
  GetPostListQueryVariables,
  GetPostListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPostListQuery, GetPostListQueryVariables, GetPostListProps<TChildProps, TDataName>>(GetPostListDocument, {
      alias: 'getPostList',
      ...operationOptions
    });
};
export type GetPostListQueryResult = ApolloReactCommon.QueryResult<GetPostListQuery, GetPostListQueryVariables>;