import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicFacultyController } from './academicFaculty.controller';
import { academicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();

router.post(
  '/create-faculty',
  validateRequest(academicFacultyValidation.createAcademicFacultyZodSchema),
  academicFacultyController.createAcademicFaculty
);

export const academicFacultyRoutes = router;
