const { errorType } = require('./constants');

export default (errorName: string) => {
  return errorType[errorName];
};
