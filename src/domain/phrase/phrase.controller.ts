import { Request, Response } from 'express';
import runMiddleware from 'expmidd';
import pensador from 'pensador-promise';
import { DEFAULT_AUTHOR } from '../../constants';
import { IResult } from '../../typescript';
import Cors from 'cors';

const cors = Cors({
  methods: ['GET'],
});

class PhraseController {
  async read(req: Request, res: Response) {
    const max: string | any = req.query.max;
    const term: string | any = req.query.term;
    const phrase: IResult = await pensador(
      {
        term: term || DEFAULT_AUTHOR || 'Jesus Cristo',
        max: parseInt(max) || 10
      });

    await runMiddleware(req, res, cors);
    return res.status(200).json({
      termoDePesquisa: phrase.searchTerm,
      total: phrase.total,
      frases: phrase.phrases.map((phrase) => {
        return ({
          autor: phrase.author,
          texto: phrase.text
        })
      })
    });
  }
}
export default new PhraseController();
