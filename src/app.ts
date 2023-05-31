import express, { Application, Request, Response } from 'express';
import config from './config';
import cors from 'cors';

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// for testing
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
