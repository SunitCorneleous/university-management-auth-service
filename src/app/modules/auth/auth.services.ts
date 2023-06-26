import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { User } from '../user/user.model';
import { ILoginUser } from './auth.interface';
import jwt from 'jsonwebtoken';

const loginUser = async (payload: ILoginUser) => {
  const { id, password } = payload;

  // user instance
  const user = new User();

  // check user exist
  const isUserExist = await user.isUserExists(id);

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exists');
  }

  // match password
  if (
    isUserExist.password &&
    !user.isPasswordMatched(password, isUserExist.password)
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  // create access token & refresh token
  const accessToken = jwt.sign(
    {
      id: isUserExist?.id,
      role: isUserExist?.role,
    },
    '',
    { expiresIn: '1h' }
  );

  return {
    needsPasswordChange: isUserExist?.needsPasswordChange,
    accessToken,
  };
};

export const AuthService = {
  loginUser,
};
