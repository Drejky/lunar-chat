import validationHandler from '../middlewares/validationHandler';
import Controller from '../classes/Controller';
import UserService from './user.service';
import CreateUserDto from './dto/create-user.dto';
import DeleteUserDto from './dto/delete-user.dto';

export default class UserController extends Controller {
  protected path = '/user';
  private userService = new UserService();

  protected initRoutes() {
    this.router.get('/', async (req, res) => {
      res.send(await this.userService.findAll());
    });

    this.router.post(
      '/',
      validationHandler(CreateUserDto),
      async (req, res) => {
        res.send(await this.userService.create(req.body));
      },
    );
  }
}
