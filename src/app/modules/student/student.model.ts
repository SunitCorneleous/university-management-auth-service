import { Schema, model } from 'mongoose';
import { IStudent, IStudentModel } from './student.interface';
import { studentBloodGroup, studentGender } from './student.constants';

const studentSchema = new Schema<IStudent, IStudentModel>(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      firstName: { type: String, required: true },
      middleName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    gender: { type: String, enum: studentGender, required: true },
    dateOfBirth: { type: String, required: true },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    bloodGroup: {
      type: String,
      enum: studentBloodGroup,
    }, // Assuming it's an optional field
    guardian: {
      fatherName: { type: String, required: true },
      fatherOccupation: { type: String, required: true },
      fatherContactNo: { type: String, required: true },
      motherName: { type: String, required: true },
      motherOccupation: { type: String, required: true },
      motherContactNo: { type: String, required: true },
      address: { type: String, required: true },
    },
    localGuardian: {
      name: { type: String, required: true },
      occupation: { type: String, required: true },
      contactNo: { type: String, required: true },
      address: { type: String, required: true },
    },
    academicSemester: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicSemester',
      required: true,
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicDepartment',
      required: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
      required: true,
    },
    profileImage: {
      type: String,
      // required: true
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Student = model<IStudent, IStudentModel>('Student', studentSchema);
