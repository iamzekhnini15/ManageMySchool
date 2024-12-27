import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Student } from "./Student";
import { Course } from "./Course";

@Entity("grades")
export class Grade {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => Student, student => student.grades)
    student: Student;

    @ManyToOne(() => Course, course => course.grades)
    course: Course;

    @Column({ nullable: true })
    grade_type: string;

    @Column("decimal", { precision: 5, scale: 2 })
    score: number;

    @Column("decimal", { precision: 5, scale: 2 })
    max_score: number;

    @Column()
    date: Date;

    @Column({ nullable: true })
    teacher_comments: string;
}
