import { validate, ValidationError } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import { plainToClass } from 'class-transformer';
import BadRequestException from '../exceptions/BadRequestException';

export default function validationHandler(type: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    validate(plainToClass(type, req.body)).then((errors: ValidationError[]) => {
      if (errors.length > 0) next(new BadRequestException(errors));
      else next();
    });
  };
}
