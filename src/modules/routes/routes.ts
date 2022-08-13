import { Router } from 'express';

import DefaultRouter from './default.routes';
import PhraseRouter from './phrase.routes';

const Routes = Router();

Routes.use('/status', DefaultRouter).use('/', PhraseRouter);

export default Routes;
