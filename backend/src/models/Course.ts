import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Subject } from "./Subject";
import { Teacher } from "./Teacher";
import { Class } from "./Class";
import { Grade } from "./Grade";

@Entity("courses")
export class Course {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => Subject, subject => subject.courses)
    subject: Subject;

    @ManyToOne(() => Teacher, teacher => teacher.courses)
    teacher: Teacher;

    @ManyToOne(() => Class, class_ => class_.courses)
    class: Class;

    @Column({ nullable: true })
    semester: string;

    @Column({ nullable: true })
    program_details: string;

    @Column({ nullable: true })
    resources_link: string;

    @OneToMany(() => Grade, grade => grade.course)
    grades: Grade[];
}
