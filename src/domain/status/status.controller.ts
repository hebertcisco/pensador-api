import { Request, Response } from 'express';
import runMiddleware from 'expmidd';
import Cors from 'cors';
const cors = Cors({
  methods: ['GET'],
});
class StatusController {
  async show(req: Request, res: Response) {
    await runMiddleware(req, res, cors);
    res.status(200);
    res.json({
      status: 'online',
      date: new Date(),
      environment: process.env.NODE_ENV,
      aws: {
        region: process.env.AWS_REGION || 'local',
        function_version: process.env.AWS_LAMBDA_FUNCTION_VERSION || 'local',
      },
    });
  }
}

export default new StatusController();
