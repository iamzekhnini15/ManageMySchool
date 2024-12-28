import { Request, Response } from "express";
import { AppDataSource } from "../config/data-sources";
import { Class } from "../models/Class";

export class ClassController {
    private classRepository = AppDataSource.getRepository(Class);

    async getAllClasses(req: Request, res: Response) {
        try {
            const classes = await this.classRepository.find();
            res.json(classes);
        } catch (error) {
            res.status(500).json({ message: "Error fetching classes" });
        }
    }
    async addClass(req: Request, res: Response) {

        const classe = [
            {
                "name": "B",
                "max_students": 10,
                "level": "2",
                "speciality": "math",
                "academic_year": "2021",
            },
        ]

        try {
            const newClass = this.classRepository.create(classe);
            const result = await this.classRepository.save(newClass);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ message: "Error creating class" });
        }
    }
}
