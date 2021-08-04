import validationHandler from '../middlewares/validationHandler';
import Controller from '../classes/Controller';
import UserService from './user.service';
import CreateUserDto from './dto/create-user.dto';

export default class UserController extends Controller {
  protected path = '/user';
  private userService = new UserService();

  protected initRoutes() {
    this.router.get('/', (req, res) => {
      res.send(this.userService.findAll());
    });

    this.router.post('/', validationHandler(CreateUserDto), (req, res) => {
      res.send(this.userService.create(req.body));
    });
  }
}
