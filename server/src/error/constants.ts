export interface IError {
  message: string;
  statusCode: number;
}

type ErrorMap = {
  [key in keyof typeof errorName]: IError;
};

export const errorName = {
  USER_ALREADY_EXISTS: 'USER_ALREADY_EXISTS',
  USER_NOT_EXISTS: 'USER_NOT_EXISTS',
  SERVER_ERROR: 'SERVER_ERROR',
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
  SERVER_ERROR: {
    message: 'Server error.',
    statusCode: 500,
  },
};
