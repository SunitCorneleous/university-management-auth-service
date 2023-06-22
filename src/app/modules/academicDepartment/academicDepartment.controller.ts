import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { academicDepartmentServices } from './academicDepartment.services';
import { IAcademicDepartment } from './academicDepartment.interface';
import pick from '../../../shared/pick';
import { academicDepartmentFilterableFields } from './academicDepartment.constants';
import { paginationFields } from '../../../constants/pagination';

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

const getAllAcademicDepartments = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, academicDepartmentFilterableFields);

    const paginationOptions = pick(req.query, paginationFields);

    const result = await academicDepartmentServices.getAllDepartments(
      filters,
      paginationOptions
    );

    sendResponse<IAcademicDepartment[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Departments retrieved successfully',
      meta: result.meta,
      data: result.data,
    });
  }
);

export const academicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartments,
};
