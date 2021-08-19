import validationHandler from '../middlewares/validationHandler';
import Controller from '../core/Controller';
import RoomService from './room.service';
import CreateRoomDto from './dto/create-room.dto';
import CreateMessageDto from './dto/create-message.dto';
import BadRequestException from '../core/exceptions/BadRequestException';
import RoomAlreadyExistsError from './exceptions/RoomAlreadyExistsError';
import isAuthenticated from '../middlewares/isAuthenticated';

export default class RoomController extends Controller {
  protected path = '/room';
  private roomService = new RoomService();

  protected initRoutes() {
    this.router.get('/', async (req, res) => {
      res.send(await this.roomService.findAll());
    });

    this.router.post(
      '/',
      isAuthenticated,
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

    this.router.post(
      '/:id',
      isAuthenticated,
      validationHandler(CreateMessageDto),
      async (req, res) => {
        res.send(await this.roomService.createMessage(req.params.id, req.body));
      },
    );

    this.router.get('/:id', isAuthenticated, async (req, res) => {
      res.send(await this.roomService.findAllMessages());
    });
  }
}
