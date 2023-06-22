import express from 'express';
import { academicDepartmentValidation } from './academicDepartment.validation';
import validateRequest from '../../middlewares/validateRequest';
import { academicDepartmentController } from './academicDepartment.controller';

const router = express.Router();

router.post(
  '/create-department',
  validateRequest(
    academicDepartmentValidation.createAcademicDepartmentZodSchema
  ),
  academicDepartmentController.createAcademicDepartment
);

export const academicDepartmentRoutes = router;
