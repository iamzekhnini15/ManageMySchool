import { Request, Response } from "express";
import { AppDataSource } from "../config/data-sources";
import { Teacher } from "../models/Teacher";

export class TeacherController {
    private teacherRepository = AppDataSource.getRepository(Teacher);

    async getAllTeachers(req: Request, res: Response): Promise<void> {
        try {
            const teachers = await this.teacherRepository.find();
            res.json(teachers);
        } catch (error) {
            res.status(500).json({ message: "Error fetching Students" });
        }
    }

    async teacherExists(name: string, speciality: string): Promise<boolean> {
        const existingTeacher = await this.teacherRepository.findOne({
            where: { name, speciality }
        });
        return !!existingTeacher;
    }

    async addTeacher(req: Request, res: Response): Promise<void> {
        const teacherData = req.body;

        try {

            const exists = await this.teacherExists(teacherData.name, teacherData.speciality);
            if (exists) {
                res.status(409).json({ message: "Teacher already exists" });
                return;
            }

            const newTeacher = this.teacherRepository.create(teacherData);
            const result = await this.teacherRepository.save(newTeacher);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ message: "Error creating teacher" });
        }
    }
}