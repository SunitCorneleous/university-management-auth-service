import config from '../../config';
import { IUser } from './users.interface';
import { User } from './users.model';
import { generateUserId } from './users.utils';

const createUserToDB = async (user: IUser): Promise<IUser | null> => {
  // auto incremental user id

  const id = await generateUserId();

  user.id = id;

  // default user pass
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const createdUser = await User.create(user);

  if (!createdUser) {
    throw new Error('Failed to create user');
  }

  return createdUser;
};

export default {
  createUserToDB,
};
