import HttpException from './HttpException';

export default class RoomAlreadyExistsException extends HttpException {
  constructor() {
    super(400, 'A room with that name already exists!');
  }
}
