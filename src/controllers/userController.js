import { userCreate } from '../services/userService.js';

export const userController = async (req, res) => {
  const response = await userCreate(req);
  return res.status(response.status).json(response.message);
};
