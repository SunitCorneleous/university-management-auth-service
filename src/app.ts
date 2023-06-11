import express, { Application, Request, Response } from 'express';
import { UserRoutes } from './app/modules/user/user.route';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route';

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/academic-semester', AcademicSemesterRoutes);

// for testing
app.get('/', (req: Request, res: Response) => {
  res.send('this is home route 🏠');
});

//middlewares
app.use(globalErrorHandler);

export default app;
