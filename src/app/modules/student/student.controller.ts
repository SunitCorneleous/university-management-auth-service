import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { IStudent } from './student.interface';
import { paginationFields } from '../../../constants/pagination';
import { studentFilterableFields } from './student.constants';
import { StudentServices } from './student.services';

const getAllStudents = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, studentFilterableFields);

  const paginationOptions = pick(req.query, paginationFields);

  const result = await StudentServices.getAllStudentsFromDB(
    filters,
    paginationOptions
  );

  sendResponse<IStudent[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Students retrived successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await StudentServices.getSingleStudentFromDB(id);

  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student retrieved successfully !',
    data: result,
  });
});

const updateStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await StudentServices.updateStudentInDB(id, updatedData);

  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student updated successfully!',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await StudentServices.deleteStudentFromDB(id);

  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student deleted successfully!',
    data: result,
  });
});

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
