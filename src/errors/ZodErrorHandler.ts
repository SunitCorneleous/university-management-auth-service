import { ZodError, ZodIssue } from 'zod';
import { IGenericErrorMessage } from '../interfaces/error';

const zodErrorHandler = (error: ZodError) => {
  const statusCode = 400;

  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    };
  });

  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  };
};

export default zodErrorHandler;
