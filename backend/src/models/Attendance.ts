import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Student } from "./Student";

@Entity("attendances")
export class Attendance {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => Student, student => student.attendances)
    student: Student;

    @Column()
    date: Date;

    @Column()
    status: string;

    @Column({ nullable: true })
    reason: string;
}
