import express, { Request, Response, Router } from "express";

export class UsersController {
  private router: Router;

  constructor() {
    this.router = express.Router();
    this.router.get("/", this.getUsers);
  }

  public getRouter = () => {
    return this.router;
  };

  private getUsers = async (req: Request, res: Response) => {
    try {
      const users = [{ name: "Ivan" }, { name: "Danil" }, { name: "Pasha" }];
      res.send(users);
    } catch (error) {
      const err = error as Error;
      res.send(err.message);
    }
  };
}
