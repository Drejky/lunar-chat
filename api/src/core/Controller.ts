import express from 'express';

export default abstract class Controller {
  protected abstract path: string;
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public getPath() {
    return this.path;
  }

  protected abstract initRoutes(): void;
}
