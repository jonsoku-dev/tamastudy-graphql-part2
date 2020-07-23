export interface IError {
  message: string;
  statusCode: number;
  path?: any;
  locations?: any;
}

type ErrorMap = {
  [key in keyof typeof errorName]: IError;
};

export const errorName = {
  USER_ALREADY_EXISTS: 'USER_ALREADY_EXISTS',
  USER_NOT_EXISTS: 'USER_NOT_EXISTS',
  SERVER_ERROR: 'SERVER_ERROR',
  IS_AUTHENTICATED_ERROR: 'IS_AUTHENTICATED_ERROR',
};

export const errorType: ErrorMap = {
  USER_ALREADY_EXISTS: {
    message: 'User is already exists.',
    statusCode: 403,
  },
  USER_NOT_EXISTS: {
    message: 'User is not exists.',
    statusCode: 403,
  },
  IS_AUTHENTICATED_ERROR: {
    message: 'Do not have permission',
    statusCode: 401,
  },
  SERVER_ERROR: {
    message: 'Server error.',
    statusCode: 500,
  },
};
