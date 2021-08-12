import express, { Application } from 'express';
import UserController from '../user/user.controller';
import errorHandler from '../middlewares/errorHandler';
import Controller from './Controller';
import RoomController from '../room/room.controller';
import { createConnection } from 'typeorm';

export default class LunarChatServer {
  public app: Application;
  private port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
  }

  public async start() {
    await createConnection();
    this.initMiddlewares();
    this.initRoutes([new UserController(), new RoomController()]);
    this.initErrorHandlers();
    this.app.listen(this.port, () => {
      console.log('Server listening at port', this.port);
    });
  }

  private initMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initErrorHandlers() {
    this.app.use(errorHandler);
  }

  private initRoutes(controllers: Controller[]) {
    for (let controller of controllers)
      this.app.use(controller.getPath(), controller.router);
  }
}
