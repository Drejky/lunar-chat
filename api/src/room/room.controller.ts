import validationHandler from '../middlewares/validationHandler';
import Controller from '../classes/Controller';
import RoomService from './room.service';
import CreateRoomDto from './dto/create-room.dto';

export default class RoomController extends Controller {
  protected path = '/room';
  private roomService = new RoomService();

  protected initRoutes() {
    this.router.get('/', (req, res) => {
      res.send(this.roomService.findAll());
    });

    this.router.post('/', validationHandler(CreateRoomDto), (req, res) => {
      res.send(this.roomService.create(req.body));
    });
  }
}
