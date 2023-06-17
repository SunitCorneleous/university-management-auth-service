import { IAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

const createAcademicFacultyToDB = async (
  data: string
): Promise<IAcademicFaculty> => {
  const result = await AcademicFaculty.create(data);

  return result;
};

export const academicFacultyServices = {
  createAcademicFacultyToDB,
};
