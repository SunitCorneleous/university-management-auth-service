import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import { IAcademicFaculty } from './academicFaculty.interface';
import { academicFacultyServices } from './academicFaculty.services';
import sendResponse from '../../../shared/sendResponse';
import { Request, Response } from 'express';

const createAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const body = req.body;

    const result = await academicFacultyServices.createAcademicFacultyToDB(
      body
    );

    sendResponse<IAcademicFaculty>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Faculty created successfully',
      data: result,
    });
  }
);

const updateAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body;

    const result = await academicFacultyServices.updateAcademicFacultyFromDB(
      id,
      body
    );
    sendResponse<IAcademicFaculty>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Faculty updated successfully',
      data: result,
    });
  }
);

export const academicFacultyController = {
  createAcademicFaculty,
  updateAcademicFaculty,
};
