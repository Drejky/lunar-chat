import validationHandler from '../middlewares/validationHandler';
import Controller from '../core/Controller';
import RoomService from './room.service';
import CreateRoomDto from './dto/create-room.dto';
import BadRequestException from '../core/exceptions/BadRequestException';
import RoomAlreadyExistsError from './exceptions/RoomAlreadyExistrsError';

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
          if (err instanceof RoomAlreadyExistsError)
            next(new BadRequestException(err.message));
          else next(err);
        }
      },
    );
  }
}
