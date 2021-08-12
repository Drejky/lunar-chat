import HttpException from './HttpException';

export default class BadRequestException extends HttpException {
  details: any;

  constructor(details?: any) {
    super(400, 'Bad Request');
    this.details = details;
  }
}
