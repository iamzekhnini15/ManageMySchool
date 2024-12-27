import { Request, Response } from "express";
import { AppDataSource } from "../config/data-sources";
import { Student } from "../models/Student";

export class StudentController {
    private studentRepository = AppDataSource.getRepository(Student);

    async getAllStudents(req: Request, res: Response) {
        try {
            const students = await this.studentRepository.find();
            res.json(students);
        } catch (error) {
            res.status(500).json({ message: "Error fetching Students" });
        }
    }
}
