import { IAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

const createAcademicFacultyToDB = async (
  data: string
): Promise<IAcademicFaculty> => {
  const result = await AcademicFaculty.create(data);

  return result;
};

const updateAcademicFacultyFromDB = async (
  id: string,
  payload: IAcademicFaculty
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicFaculty.findByIdAndUpdate(id, payload, {
    new: true,
  });

  return result;
};

export const academicFacultyServices = {
  createAcademicFacultyToDB,
  updateAcademicFacultyFromDB,
};
