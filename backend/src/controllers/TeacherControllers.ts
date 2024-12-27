import { Request, Response } from "express";
import { AppDataSource } from "../config/data-sources";
import { Teacher } from "../models/Teacher";

export class TeacherController {
    private teacherRepository = AppDataSource.getRepository(Teacher);

    async getAllTeachers(req: Request, res: Response) {
        try {
            const teachers = await this.teacherRepository.find();
            res.json(teachers);
        } catch (error) {
            res.status(500).json({ message: "Error fetching Students" });
        }
    }
}
