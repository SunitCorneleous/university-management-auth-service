/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
import { ErrorRequestHandler } from 'express';
import { IGenericErrorMessage } from '../../interfaces/error';
import config from '../../config';

import ApiError from '../../errors/ApiError';
import { errorLogger } from '../../shared/logger';
import ValidationErrorHandler from '../../errors/validationErrorHandler';

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  config.env === 'development'
    ? console.log('❌ globalErrorHandler ~', error)
    : errorLogger.error('❌ globalErrorHandler ~', error);

  let statusCode = 500;
  let message = 'Something went wrong!';
  let errorMessage: IGenericErrorMessage[] = [];

  // check if Validation Error
  if (error?.name === 'ValidationError') {
    const simplifiedError = ValidationErrorHandler(error);

    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessage = simplifiedError.errorMessages;
  }
  // check if the error is an instance of Api Error
  else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error?.message;
    errorMessage = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  }
  // check if the error is an instance of Error
  else if (error instanceof Error) {
    message = error?.message;
    errorMessage = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    stack: config.env !== 'production' ? error?.stack : undefined,
  });

  next();
};

export default globalErrorHandler;
