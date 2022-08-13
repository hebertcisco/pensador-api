import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import express from 'express';

import type { Application } from 'express';

import Routes from '../modules/routes/routes';
import { BODY_PARSER_LIMIT, MORGAN_FORMAT } from '..';

export class App {
  public application: Application;
  public constructor() {
    this.initialize();
  }

  private initialize() {
    this.application = express();
    this.application.use(cors());
    this.application.use(helmet());
    this.application.use(compression());
    this.application.use(bodyParser.json({ limit: BODY_PARSER_LIMIT }));
    this.application.use(
      bodyParser.urlencoded({ limit: BODY_PARSER_LIMIT, extended: true })
    );
    this.application.use(morgan(MORGAN_FORMAT));
    this.application.use(Routes);
  }
}
export const { application } = new App();
export default application;
