import { Request, Response } from "express";
import { AppDataSource } from "../config/data-sources";
import { User } from "../models/User";

export class UserController {
  private userRepository = AppDataSource.getRepository(User);

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await this.userRepository.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Error fetching users" });
    }
  }
}
