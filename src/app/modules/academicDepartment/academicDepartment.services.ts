import { IAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartment } from './academicDepartment.model';

const createAcademicDepartmentToDB = async (
  data: string
): Promise<IAcademicDepartment> => {
  const result = await AcademicDepartment.create(data);

  return result;
};

export const academicDepartmentServices = {
  createAcademicDepartmentToDB,
};
