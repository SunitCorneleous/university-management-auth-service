import express, { Application, Request, Response } from 'express';
import usersRoute from './modules/users/users.route';
import cors from 'cors';

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route
app.use('/api/v1/users', usersRoute);

// for testing
app.get('/', (req: Request, res: Response) => {
  res.send('this is the home route 🏠');
});

export default app;
