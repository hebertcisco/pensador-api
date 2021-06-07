import { Router } from 'express';

import DefaultRouter from './domain/default.route';
import PhraseRouter from './domain/phrase/phrase.routes';

const Routes = Router();

Routes.use('/status', DefaultRouter).use('/', PhraseRouter);

export default Routes;
