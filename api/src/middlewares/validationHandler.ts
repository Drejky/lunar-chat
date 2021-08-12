import { validate, ValidationError } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import { plainToClass } from 'class-transformer';
import BadRequestException from '../core/exceptions/BadRequestException';

export default function validationHandler(type: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    validate(plainToClass(type, req.body)).then((errors: ValidationError[]) => {
      const errorProperties = errors.map((error) => {
        const { property: field, constraints } = error;
        return { field, constraints };
      });
      if (errors.length > 0) next(new BadRequestException(errorProperties));
      else next();
    });
  };
}
