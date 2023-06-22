import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { academicDepartmentServices } from './academicDepartment.services';
import { IAcademicDepartment } from './academicDepartment.interface';

const createAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const body = req.body;

    const result =
      await academicDepartmentServices.createAcademicDepartmentToDB(body);

    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department created successfully',
      data: result,
    });
  }
);

export const academicDepartmentController = {
  createAcademicDepartment,
};
