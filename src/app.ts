import express, { Application } from 'express';
import { UserRoutes } from './app/modules/users/user.route';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route
app.use('/api/v1/users', UserRoutes);

// for testing
app.get('/', (req, res) => {
  // throw new ApiError(400, 'errorororor');

  res.send('this is home route 🏠');
});

//middlewares
app.use(globalErrorHandler);

export default app;
