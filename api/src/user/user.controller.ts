import validationHandler from '../middlewares/validationHandler';
import Controller from '../core/Controller';
import UserService from './user.service';
import CreateUserDto from './dto/create-user.dto';
import isAuthenticated from '../middlewares/isAuthenticated';

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
      async (req, res, next) => {
        try {
          const user = await this.userService.create(req.body);
          req.session.user = user;
          res.send(user);
        } catch (err) {
          next(err);
        }
      },
    );

    this.router.post('/logout', isAuthenticated, async (req, res, next) => {
      try {
        await this.userService.delete(req.session.user);
        req.session.destroy((err) => {
          res.send({ message: 'Logout Successful!' });
        });
      } catch (err) {
        next(err);
      }
    });
  }
}
