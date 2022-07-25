import pensador from 'pensador-promise'; 
import type { Request, Response } from 'express';

import { DEFAULT_AUTHOR } from '../../constants';
import type { ResultInterface } from '../../typescript';

class PhraseController {
  async read(req: Request, res: Response) {
    const max: string | any = req.query.max;
    const term: string | any = req.query.term;
    const phrase: ResultInterface = await pensador({
      term: term || DEFAULT_AUTHOR || 'Jesus Cristo',
      max: parseInt(max) || 10,
    });

    return res.status(200).json({
      termoDePesquisa: phrase.searchTerm,
      total: phrase.total,
      frases: phrase.phrases.map(phrase => {
        return {
          autor: phrase.author,
          texto: phrase.text,
        };
      }),
    });
  }
}
export default new PhraseController();
