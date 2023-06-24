import config from '../../../config';
import ApiError from '../../../errors/ApiError';

import { IUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';

const createUserToDB = async (user: IUser): Promise<IUser | null> => {
  const academicSemester = {
    year: '2023',
    code: '03',
  };

  // auto incremental user id
  const id = await generateStudentId(academicSemester);

  user.id = id;

  // default user pass
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const createdUser = await User.create(user);

  if (!createdUser) {
    throw new ApiError(400, 'Failed to create user');
  }

  return createdUser;
};

export const UserService = {
  createUserToDB,
};
