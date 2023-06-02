import { Request, Response } from 'express';
import usersService from './users.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;

    const result = await usersService.createUserToDB(user);

    res.status(200).send({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Failed to create user',
    });
  }
};

export default {
  createUser,
};
