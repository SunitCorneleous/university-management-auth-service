import { IBloodGroup, IStudentGender } from './student.interface';

export const studentGender: IStudentGender[] = ['male', 'female'];
export const studentBloodGroup: IBloodGroup[] = [
  'A+',
  'A-',
  'B+',
  'B-',
  'AB+',
  'AB-',
  'O+',
  'O-',
];

export const studentSearchableFields = [
  'id',
  'email',
  'contactNo',
  'name.firstName',
  'name.middleName',
  'name.lastName',
];
export const studentFilterableFields = [
  'searchTerm',
  'id',
  'bloodGroup',
  'email',
  'contactNo',
  'emergencyContactNo',
];
