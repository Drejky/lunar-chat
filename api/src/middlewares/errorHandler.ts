import { Request, Response, NextFunction } from 'express';
import HttpException from '../core/exceptions/HttpException';

export default function errorHandler(
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  let { status, message, ...other } = err;
  status = status || 500;
  message = message || 'Internal Server Error';
  res.status(status).send({ status, message, ...other });
}
