import { getRepository } from 'typeorm';
import CreateMessageDto from './dto/create-message.dto';
import CreateRoomDto from './dto/create-room.dto';
import { Message } from './entities/message.entity';
import { Room } from './entities/room.entity';
import RoomAlreadyExistsError from './exceptions/RoomAlreadyExistsError';

export default class RoomService {
  private roomsRepository = getRepository(Room);
  private messageRepository = getRepository(Message);

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

  public async findAllMessages() {
    return this.messageRepository.find();
  }

  public async createMessage(
    roomId: string,
    createMessageDto: CreateMessageDto,
  ) {
    // Todo: Check whether room with given ID exists
    // Todo: Check whether user is a member of the room
    const newMessage = new Message();
    newMessage.content = createMessageDto.content;
    newMessage.created_at = new Date();
    return this.messageRepository.save(newMessage);
  }
}
