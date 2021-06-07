import { Router } from 'express';
import statusController from './status/status.controller';
import { Request, Response } from 'express';

const DefaultRoute = Router();

DefaultRoute.get('/', async (req: Request, res: Response) => {
  await statusController.show(req, res);
});
export default DefaultRoute;
