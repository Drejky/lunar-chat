import { getRepository } from 'typeorm';
import CreateRoomDto from './dto/create-room.dto';
import { Room } from './entities/room.entity';
import RoomAlreadyExistsError from './exceptions/RoomAlreadyExistrsError';

export default class RoomService {
  private roomsRepository = getRepository(Room);

  public async findAll() {
    return this.roomsRepository.find();
  }

  public async findByName(name: string) {
    return this.roomsRepository
      .createQueryBuilder()
      .where('LOWER(name) = LOWER(:name)', { name })
      .getOne();
  }

  public async create(createRoomDto: CreateRoomDto) {
    const { name, description, maxUserCount } = createRoomDto;
    const room = await this.findByName(name);
    if (!room) throw new RoomAlreadyExistsError();
    const newRoom = new Room();
    newRoom.name = name;
    newRoom.description = description;
    newRoom.maxUserCount = maxUserCount;
    return this.roomsRepository.save(newRoom);
  }
}
