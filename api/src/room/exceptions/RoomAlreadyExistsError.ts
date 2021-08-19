export default class RoomAlreadyExistsError extends Error {
  constructor() {
    super('A room with that name already exists!');
  }
}
