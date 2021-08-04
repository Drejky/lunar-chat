import { getRepository } from 'typeorm';
import CreateRoomDto from './dto/create-room.dto';
import { Room } from './entities/room.entity';

export default class RoomService {
  private roomsRepository = getRepository(Room);

  public async findAll() {
    return this.roomsRepository.find();
  }

  public async create(createRoomDto: CreateRoomDto) {
    const newRoom = new Room();
    newRoom.name = createRoomDto.name;
    newRoom.description = createRoomDto.description;
    newRoom.maxUserCount = createRoomDto.maxUserCount;
    return this.roomsRepository.save(newRoom);
  }
}
