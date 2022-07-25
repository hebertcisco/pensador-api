import type { Request, Response } from 'express';

class StatusController {
  async show(req: Request, res: Response) {
    void req;
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
