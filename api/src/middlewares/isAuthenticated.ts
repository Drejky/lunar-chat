import { NextFunction, Request, Response } from 'express';
import UnauthorizedException from '../core/exceptions/UnauthorizedException';

export default function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (!req.session.user) res.send(new UnauthorizedException());
  next();
}
