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

    async getClassById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const classe = await this.classRepository.findOne({ where: { id } });
            if (!classe) {
                res.status(404).json({ message: "Class not found" });
                return;
            }
            res.status(200).json(classe);
        } catch (error) {
            res.status(500).json({ message: "Error fetching class" });
        }
    }


    async classeExists(name: string, speciality: string): Promise<boolean> {
        const existingClasse = await this.classRepository.findOne({
            where: { name, speciality }
        });
        return !!existingClasse;
    }


    async addClass(req: Request, res: Response): Promise<void> {
        const ClasseData = req.body;

        try {
            const exists = await this.classeExists(ClasseData.name, ClasseData.speciality);
            if (exists) {
                res.status(409).json({ message: "Class already exists" });
                return;
            }

            const newClass = this.classRepository.create(ClasseData);
            const result = await this.classRepository.save(newClass);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ message: "Error creating class" });
        }
    }

    async updateClass(req: Request, res: Response): Promise<void> {
        const { id, teacherId, name, level, speciality, academic_year, max_students } = req.body;
        try {
            const existingClass = await this.classRepository.findOne({ where: { id } });
            if (!existingClass) {
                res.status(404).json({ message: "Class not found" });
                return;
            }
    
            existingClass.teacherId = teacherId;
            existingClass.name = name;
            existingClass.level = level;
            existingClass.speciality = speciality;
            existingClass.academic_year = academic_year;
            existingClass.max_students = max_students;
    
            const updatedClass = await this.classRepository.save(existingClass);
            res.status(200).json(updatedClass);
        } catch (error) {
            res.status(500).json({ message: "Error updating class" });
        }
    }

    async deleteClass(req: Request, res: Response): Promise<void> {
        const { id } = req.body;
        console.log("id " + id);
        try {
            const classe = await this.classRepository.findOne({ where: { id } });
            if (!classe) {
                res.status(404).json({ message: "Class not found" });
                return;
            }
    
            await this.classRepository.remove(classe);
            res.status(200).json({ message: "Class deleted" });
        } catch (error) {
            res.status(500).json({ message: "Error deleting class" });
        }
    }

}

