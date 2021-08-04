import HttpException from './HttpException';

export default class BadRequest extends HttpException {
  details: any;

  constructor(details?: any) {
    super(400, 'Invalid Request Body');
    this.details = details;
  }
}
