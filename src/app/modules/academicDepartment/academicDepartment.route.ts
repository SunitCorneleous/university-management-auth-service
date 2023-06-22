import express from 'express';
import { academicDepartmentValidation } from './academicDepartment.validation';
import validateRequest from '../../middlewares/validateRequest';
import { academicDepartmentController } from './academicDepartment.controller';

const router = express.Router();

router.get('/', academicDepartmentController.getAllAcademicDepartments);

router.get('/:id', academicDepartmentController.getAcademicDepartment);

router.post(
  '/create-department',
  validateRequest(
    academicDepartmentValidation.createAcademicDepartmentZodSchema
  ),
  academicDepartmentController.createAcademicDepartment
);

router.patch(
  '/update-department/:id',
  validateRequest(
    academicDepartmentValidation.updateAcademicDepartmentZodSchema
  ),
  academicDepartmentController.updateAcademicDepartment
);

router.delete('/:id', academicDepartmentController.deleteAcademicDepartment);

export const academicDepartmentRoutes = router;
