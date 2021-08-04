import { Request, Response, NextFunction } from 'express';
import HttpException from '../exceptions/HttpException';

export default function errorHandler(
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  const properties = err.properties;
  res.status(status).send({ status, message, properties });
}
