import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Student } from "./Student";
import { Class } from "./Class";

@Entity("student_classes")
export class StudentClass {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => Student, student => student.studentClasses)
    student: Student;

    @ManyToOne(() => Class, class_ => class_.studentClasses)
    class: Class;

    @Column()
    enrollment_date: Date;

    @Column()
    status: string;
}
