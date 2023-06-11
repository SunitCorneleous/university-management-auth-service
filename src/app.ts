import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
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

//middlewares
app.use(globalErrorHandler);

export default app;
