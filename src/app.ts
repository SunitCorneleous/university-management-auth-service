import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';
const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route
app.use('/api/v1/', routes);

// for testing
app.get('/', (req: Request, res: Response) => {
  res.send('this is home route 🏠');
});

// not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not found!',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'API not found',
      },
    ],
  });

  next();
});

//middlewares
app.use(globalErrorHandler);

export default app;
