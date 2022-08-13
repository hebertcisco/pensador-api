import pensador from 'pensador-promise';
import type { Request, Response } from 'express';

import { DEFAULT_AUTHOR } from '../../shared/constants';
import type { ResultInterface } from '../../shared/interfaces';

export class PhraseController {
  public async read(req: Request, res: Response): Promise<void> {
    const max: string | any = req.query.max;
    const term: string | any = req.query.term;

    const phrase: ResultInterface = await pensador({
      term: term || DEFAULT_AUTHOR || 'Jesus Cristo',
      max: parseInt(max) || 10,
    });
    const result = {
      termoDePesquisa: phrase.searchTerm,
      total: phrase.total,
      frases: phrase.phrases.map((phrase) => {
        return {
          autor: phrase.author,
          texto: phrase.text,
        };
      }),
    };

    res.status(200);
    res.json(result);
  }
}
export default new PhraseController();
