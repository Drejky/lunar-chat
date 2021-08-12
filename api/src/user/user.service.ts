import CreateUserDto from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { getRepository } from 'typeorm';

export default class UserService {
  private userRepository = getRepository(User);

  public async findAll() {
    //this.userRepository.query(`SELECT * FROM "user"`).then((data) => {
    //  console.log(data);
    //  return data;
    //});
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
