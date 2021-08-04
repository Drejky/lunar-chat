import CreateRoomDto from './dto/create-room.dto';
import { Room } from './entities/room.entity';

export default class RoomService {
  private rooms: Room[] = [];

  public findAll() {
    return this.rooms;
  }

  public create(createRoomDto: CreateRoomDto) {
    const newRoom = new Room();
    newRoom.name = createRoomDto.name;
    newRoom.description = createRoomDto.description;
    newRoom.maxUserCount = createRoomDto.maxUserCount;
    this.rooms.push(newRoom);
    return newRoom;
  }
}
