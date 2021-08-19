import CreateUserDto from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { getRepository } from 'typeorm';

export default class UserService {
  private userRepository = getRepository(User);

  public async findAll() {
    return this.userRepository.find();
  }

  public async create(createUserDto: CreateUserDto) {
    // Todo: Check whether user already exists.
    const { name, icon, tripcode } = createUserDto;
    const newUser = new User();
    newUser.name = name;
    newUser.icon = icon;
    newUser.tripcode = tripcode;
    return this.userRepository.save(newUser);
  }
}
