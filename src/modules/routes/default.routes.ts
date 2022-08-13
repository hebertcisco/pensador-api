import { Router } from 'express';
import type { Response } from 'express';

import statusController from '../controllers/status.controller';

const DefaultRoute = Router();

DefaultRoute.get('/', async (res: Response) => {
  await statusController.show(res);
});
export default DefaultRoute;
