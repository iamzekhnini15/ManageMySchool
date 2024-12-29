import { Request, Response } from "express";
import { AppDataSource } from "../config/data-sources";
import { Student } from "../models/Student";
import { User } from "../models/User";

const roleMap = new Map<string, string>([
    ['student', '6ad0fc70-9d6c-45a6-b8e8-260d7c6b0dc2'],
    ['teacher', '2211e63e-51a0-4d0a-a1c7-9e583a896ffc'],
    ['admin', '00d20780-de60-49f5-8db0-c6294c1143a1']
  ]);

export class StudentController {
    private studentRepository = AppDataSource.getRepository(Student);
    private userRepository = AppDataSource.getRepository(User);

    async getAllStudents(req: Request, res: Response) {
        try {
            const students = await this.studentRepository.find();
            res.json(students);
        } catch (error) {
            res.status(500).json({ message: "Error fetching Students" });
        }
    }

    private nUser(mail: string, firstName: string, lastName: string, password: string, roleId: string) {
        return this.userRepository.create({
            email: mail,
            first_name: firstName,
            last_name: lastName,
            password: password,
            roleId: roleId,
        });
    }

    private nStudent(userId: string, dateOfBirth: Date) {
        return this.studentRepository.create({
            userId: userId,
            date_of_birth: dateOfBirth,
        });
    }
    

    async createStudent(req: Request, res: Response) {
        try {
            const { email, first_name, last_name, password, roleId, dateOfBirth } = req.body;

            const roleUUID = roleMap.get(roleId);

            if (!roleUUID) {
                res.status(400).json({ message: "Invalid role" });
                return;
            }

            const newUser = this.nUser(email, first_name, last_name, password, roleUUID);

            const savedUser = await this.userRepository.save(newUser);

            const newStudent = this.nStudent(savedUser.id, new Date(dateOfBirth));

            const savedStudent = await this.studentRepository.save(newStudent);
            
            res.json(savedStudent);

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Error fetching Students" });
        }
    }
}
