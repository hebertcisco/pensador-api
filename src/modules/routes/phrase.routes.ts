import { Router } from 'express';

import phraseController from '../controllers/phrase.controller';

const PhraseRouter = Router();

PhraseRouter.get('/', phraseController.read);

export default PhraseRouter;
