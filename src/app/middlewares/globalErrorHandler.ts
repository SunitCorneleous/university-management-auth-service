import { NextFunction, Request, Response } from 'express';
import { IGenericErrorMessage } from '../../interfaces/error';
import config from '../../config';
import handlerValidationError from '../../errors/handlerValidationError';
import { Error } from 'mongoose';
import ApiError from '../../errors/ApiError';

const globalErrorHandler = (
  err: Error.ValidationError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = 'Something went wrong!';
  let errorMessage: IGenericErrorMessage[] = [];

  if (err?.name === 'ValidationError') {
    const simplifiedError = handlerValidationError(err);

    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessage = simplifiedError.errorMessages;
  } else if (err instanceof ApiError) {
    statusCode = err?.statusCode;
    message = err?.message;
    errorMessage = err?.message
      ? [
          {
            path: '',
            message: err?.message,
          },
        ]
      : [];
  } else if (err instanceof Error) {
    message = err?.message;
    errorMessage = err?.message
      ? [
          {
            path: '',
            message: err?.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    stack: config.env !== 'production' ? err?.stack : undefined,
  });

  next();
};

export default globalErrorHandler;
