import { Router } from 'express';

import phraseController from './phrase.controller';

const PhraseRouter = Router();

PhraseRouter.get('/', phraseController.read);

export default PhraseRouter;
