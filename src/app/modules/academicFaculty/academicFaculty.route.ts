import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicFacultyController } from './academicFaculty.controller';
import { academicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();

router.patch(
  '/:id',
  validateRequest(academicFacultyValidation.updateAcademicFacultyZodSchema),
  academicFacultyController.updateAcademicFaculty
);

router.post(
  '/create-faculty',
  validateRequest(academicFacultyValidation.createAcademicFacultyZodSchema),
  academicFacultyController.createAcademicFaculty
);
router.get('/:id', academicFacultyController.getAcademicFaculty);
router.get('/', academicFacultyController.getAllAcademicFaculties);
router.delete('/:id', academicFacultyController.deleteAcademicFaculty);

export const AcademicFacultyRoutes = router;
