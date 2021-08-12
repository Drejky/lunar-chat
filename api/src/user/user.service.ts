import CreateUserDto from './dto/create-user.dto';
import DeleteUserDto from './dto/delete-user.dto';
import { User } from './entities/user.entity';
import { getRepository } from 'typeorm';

export default class UserService {
  private userRepository = getRepository(User);

  public async findAll() {
    return this.userRepository.find();
  }

  public async create(createUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.name = createUserDto.name;
    newUser.icon = createUserDto.icon;
    newUser.tripcode = createUserDto.tripcode;
    return this.userRepository.save(newUser);
  }
}
