import { Router } from 'express';
import type { Request, Response } from 'express';

import statusController from './status/status.controller';

const DefaultRoute = Router();

DefaultRoute.get('/', async (req: Request, res: Response) => {
  await statusController.show(req, res);
});
export default DefaultRoute;
