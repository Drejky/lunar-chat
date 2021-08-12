import BadRequest from './BadRequest';

export default class RoomAlreadyExists extends BadRequest {
  constructor() {
    super('A room with that name already exists!');
  }
}
