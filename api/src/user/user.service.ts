import CreateUserDto from './dto/create-user.dto';
import { User } from './entities/user.entity';

export default class UserService {
  private users: User[] = [];

  public findAll() {
    return this.users;
  }

  public create(createUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.name = createUserDto.name;
    newUser.icon = createUserDto.icon;
    newUser.tripcode = createUserDto.tripcode;
    this.users.push(newUser);
    return newUser;
  }
}
