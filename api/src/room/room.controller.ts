import validationHandler from '../middlewares/validationHandler';
import Controller from '../classes/Controller';
import RoomService from './room.service';
import CreateRoomDto from './dto/create-room.dto';
import RoomAlreadyExists from '../exceptions/RoomAlreadyExists';

export default class RoomController extends Controller {
  protected path = '/room';
  private roomService = new RoomService();

  protected initRoutes() {
    this.router.get('/', async (req, res) => {
      res.send(await this.roomService.findAll());
    });

    this.router.post(
      '/',
      validationHandler(CreateRoomDto),
      async (req, res, next) => {
        try {
          res.send(await this.roomService.create(req.body));
        } catch (err) {
          if (err.code == 23505) next(new RoomAlreadyExists());
          else next(err);
        }
      },
    );
  }
}
