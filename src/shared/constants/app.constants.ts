export const DEFAULT_AUTHOR: string = process.env.DEFAULT_AUTHOR?.toString()  || 'Jesus Cristo';
export const PORT: number = Number(process.env.PORT) || 3000;

export const BODY_PARSER_LIMIT: string =
  process.env.BODY_PARSER_LIMIT || '15mb';

export const MORGAN_FORMAT: string =
  process.env.MORGAN_FORMAT ||
  `:date[iso] HTTP/:http-version :method :url :status :response-time ms`;