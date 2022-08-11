import userInteractor from '../core/interactors';
import { Response, Request } from 'express';

const usersController = async (req: Request, res: Response) => {
  const { body } = req;
  const { user } = body;
  const dataNewUser = await userInteractor.saveUser(user);
  res.json(dataNewUser);
};
export default usersController;
