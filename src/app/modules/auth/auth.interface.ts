export type ILoginUser = {
  id: string;
  password: string;
};

export type ILoginUserResponse = {
  accessToken: string;
  refreshToken?: string;
  needsPasswordChange?: boolean;
};

export type IUserJwtToken = {
  userId: string;
  role: string;
};
