import { ValidationError } from 'class-validator';
import HttpException from './HttpException';

export default class BadRequestException extends HttpException {
  constructor(validationErrors: ValidationError[]) {
    const errorProperties = validationErrors.map((error) => {
      const { property: field, constraints } = error;
      return { field, constraints };
    });
    super(400, 'Invalid Request Body', errorProperties);
  }
}
