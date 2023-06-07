import express, { Application, Request, Response } from 'express';
import usersRoute from './app/modules/users/users.route';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route
app.use('/api/v1/users', usersRoute);

//middlewares
app.use(globalErrorHandler);

// for testing
app.get('/', (req: Request, res: Response) => {
  res.send('this is the home route 🏠');
});

export default app;
