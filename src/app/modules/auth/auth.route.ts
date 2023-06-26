import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validation';
import { authController } from './auth.controller';
const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.loginZodSchema),
  authController.loginUser
);
/* router.get('/', AdminController.getAllAdmins);

router.delete('/:id', AdminController.deleteAdmin);

router.patch(
  '/:id',
  validateRequest(AdminValidation.updateAdmin),
  AdminController.updateAdmin
); */

export const AuthRoutes = router;
