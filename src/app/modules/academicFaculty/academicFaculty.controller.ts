import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import { IAcademicFaculty } from './academicFaculty.interface';
import { academicFacultyServices } from './academicFaculty.services';
import sendResponse from '../../../shared/sendResponse';
import { Request, Response } from 'express';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { academicFacultyFilterableFields } from './academicFaculty.constants';

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

const getAllAcademicFaculties = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, academicFacultyFilterableFields);

    const paginationOptions = pick(req.query, paginationFields);

    const result = await academicFacultyServices.getAllFaculties(
      filters,
      paginationOptions
    );

    sendResponse<IAcademicFaculty[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faculties retrieved successfully',
      meta: result.meta,
      data: result.data,
    });
  }
);

const getAcademicFaculty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await academicFacultyServices.getSingleFacultyFromDB(id);

  sendResponse<IAcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty retrieved successfully',
    data: result,
  });
});

export const academicFacultyController = {
  createAcademicFaculty,
  updateAcademicFaculty,
  getAllAcademicFaculties,
  getAcademicFaculty,
};
